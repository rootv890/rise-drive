'use server';

import { db } from "./db";
import { and, eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";
import { UTApi } from "uploadthing/server";
import { files_table, folders_table } from "./db/schema";
import { cookies } from "next/headers";

const utAPI = new UTApi();

// ────────────────────────────────────────────────────────────
// ✅ Helper Functions (Kept together for better organization)
// ────────────────────────────────────────────────────────────

const validateFileOwnershipPromise = ( fileKey, userId ) =>
  db.select().from( files_table ).where( and( eq( files_table.fileKey, fileKey ), eq( files_table.owner, userId ) ) );

const deleteFileFromUTPromise = ( fileKey ) =>
  utAPI.deleteFiles( [ fileKey ] );

const deleteFileFromDBPromise = ( fileKey, userId ) =>
  db.delete( files_table ).where( and( eq( files_table.fileKey, fileKey ), eq( files_table.owner, userId ) ) );

const getAllChildrenFoldersPromise = ( folderId ) =>
  db.select( { id: folders_table.id } ).from( folders_table ).where( eq( folders_table.parent, folderId ) );

const getAllChildrenFilesPromise = ( folderId ) =>
  db.select().from( files_table ).where( eq( files_table.parent, folderId ) );

const validateFolderOwnershipPromise = ( folderId, userId ) =>
  db.select().from( folders_table ).where( and( eq( folders_table.id, folderId ), eq( folders_table.owner, userId ) ) );

const deleteSingleFolderFromDBPromise = ( folderId, userId ) =>
  db.delete( folders_table ).where( and( eq( folders_table.id, folderId ), eq( folders_table.owner, userId ) ) );

// ────────────────────────────────────────────────────────────
// ✅ DELETE FILE FUNCTION
// ────────────────────────────────────────────────────────────

export async function deleteFile ( fileKey, isClient = true ) {
  const { userId } = await auth();
  if ( !userId ) throw new Error( "Unauthorized" );

  // Validate ownership BEFORE attempting deletion
  const file = await validateFileOwnershipPromise( fileKey, userId );
  if ( !file.length ) throw new Error( "File not found or not owned" );

  try {
    await Promise.all( [
      deleteFileFromUTPromise( fileKey ),
      deleteFileFromDBPromise( fileKey, userId ),
    ] );
  } catch ( error ) {
    console.error( `Error deleting file: ${ fileKey }`, error );
    throw new Error( `Failed to delete file: ${ fileKey }` );
  }

  // ✅ Force refresh for the client (if applicable)
  if ( isClient ) {
    const cookieStore = await cookies();
    cookieStore.set( 'force-refresh', JSON.stringify( Math.random() ) );
  }

  return { success: true };
}

// ────────────────────────────────────────────────────────────
// ✅ DELETE FOLDER FUNCTION (Handles nested structures properly)
// ────────────────────────────────────────────────────────────

export async function deleteFolder ( folderId, visitedFolders = new Set() ) {
  const { userId } = await auth();
  if ( !userId ) throw new Error( "Unauthorized" );

  // Prevent infinite recursion in case of cyclic references
  if ( visitedFolders.has( folderId ) ) {
    throw new Error( `Detected cycle in folder structure! Folder ID: ${ folderId }` );
  }
  visitedFolders.add( folderId );

  // Validate folder ownership BEFORE deletion
  const folder = await validateFolderOwnershipPromise( folderId, userId );
  if ( !folder.length ) throw new Error( "Folder not found or not owned" );

  try {
    console.log( `Deleting files in folder: ${ folderId }` );
    const childrenFiles = await getAllChildrenFilesPromise( folderId );
    await Promise.all( childrenFiles.map( ( file ) => deleteFile( file.fileKey ) ) );

    console.log( `Recursively deleting child folders of: ${ folderId }` );
    const childrenFolders = await getAllChildrenFoldersPromise( folderId );
    await Promise.all( childrenFolders.map( ( childFolder ) => deleteFolder( childFolder.id, visitedFolders ) ) );

    console.log( `Deleting folder from DB: ${ folderId }` );
    const deleteFolderFromDB = await deleteSingleFolderFromDBPromise( folderId, userId );

    return { success: !!deleteFolderFromDB };
  } catch ( error ) {
    console.error( `Error deleting folder: ${ folderId }`, error );
    throw new Error( `Failed to delete folder: ${ folderId }` );
  }
}
