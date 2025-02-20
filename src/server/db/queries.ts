import "server-only";
import { db } from "@/server/db";
import { folders_table, files_table } from "@/server/db/schema";
import { eq, isNull } from "drizzle-orm";

export const QUERIES = {
  // Get a folder by id
  getFolder: function ( folderId: number ) {
    return db.select().from( folders_table ).where( eq( folders_table.id, folderId ) );
  },
  getAllFolders: function ( folderId: number ) {
    return db
      .select()
      .from( folders_table )
      .where( eq( folders_table.parent, folderId ) );
  },
  getAllFiles: function ( folderId: number ) {
    return db.select().from( files_table ).where( eq( files_table.parent, folderId ) );
  },
  getAllParents: async function ( folderId: number ) {
    const parents: ( typeof folders_table.$inferSelect )[] = [];
    let currentFolderId: number | null = folderId;
    while ( currentFolderId !== null ) {
      // get the parent folder
      const parentFolder = await this.getFolder( currentFolderId );
      parents.unshift( parentFolder[ 0 ] );
      currentFolderId = parentFolder[ 0 ].parent ?? null;
    }
    return parents;
  },
  getRootFolder: async function () {
    const rootFolder = await db
      .select()
      .from( folders_table )
      .where( isNull( folders_table.parent ) );
    if ( rootFolder.length === 0 ) {
      throw new Error( "Root folder not found" );
    }
    return rootFolder[ 0 ];
  },
};


export const Muatations = {
  // Create a file in the database after uploading it to the uploadthing 🗣️ server!!!
  createFile: async function ( input: {
    file: {
      name: string;
      type: string;
      url: string;
      size: number;
    };
    parent: number;
    userId: string;
  } ) {
    const { file, userId } = input;
    const [ fileData ] = await db.insert( files_table ).values( {
      ...file,
      parent: input.parent ?? ( await QUERIES.getRootFolder() ).id, // Check if parent is given else set to root folder
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    } ).$returningId();

    return {
      file: fileData,
      error: null,
      success: true,
      userId,
    };
  },
};
