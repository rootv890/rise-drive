import { db } from "@/server/db";
import { folders_table, files_table } from "@/server/db/schema";
import { eq, isNull } from "drizzle-orm";

// Get a folder by id
export function getFolder ( folderId: number ) {
  return db
    .select()
    .from( folders_table )
    .where( eq( folders_table.id, folderId ) );
}

// Children -  All folders and files under a folder
export function getAllFolders ( folderId: number ) {
  return db
    .select()
    .from( folders_table )
    .where( eq( folders_table.parent, folderId ) );
}

// Add files under the current folder
export function getAllFiles ( folderId: number ) {
  return db
    .select()
    .from( files_table )
    .where( eq( files_table.parent, folderId ) );
}

export async function getAllParents ( folderId: number ) {
  const parents: ( typeof folders_table.$inferSelect )[] = [];
  let currentFolderId: number | null = folderId;
  while ( currentFolderId !== null ) {
    // get the parent folder
    const parentFolder = await getFolder( currentFolderId );
    parents.unshift( parentFolder[ 0 ] );
    currentFolderId = parentFolder[ 0 ].parent ?? null;
  }
  return parents;
}


export async function getRootFolder () {
  const rootFolder = await db.select().from( folders_table ).where( isNull( folders_table.parent ) );
  if ( rootFolder.length === 0 ) {
    throw new Error( "Root folder not found" );
  }
  return rootFolder[ 0 ];
}
