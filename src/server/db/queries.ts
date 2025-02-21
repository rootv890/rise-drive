import "server-only";
import { db } from "@/server/db";
import { folders_table, files_table } from "@/server/db/schema";
import { eq, isNull } from "drizzle-orm";

export const QUERIES = {
  // Get a folder by id
  getFolderById: function ( folderId: number ) {
    return db.select().from( folders_table ).where( eq( folders_table.id, folderId ) );
  },
  getFolderByName: function ( folderName: string ) {
    return db.select().from( folders_table ).where( eq( folders_table.name, folderName ) );
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
      const parentFolder = await this.getFolderById( currentFolderId );
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


export const MUTATIONS = {
  // Create a file in the database after uploading it to the uploadthing 🗣️ server!!!
  createFile: async function ( input: {
    file: {
      name: string;
      type: string;
      url: string;
      size: number;
    };
    parentId: number;
    userId: string;
  } ) {
    const { file, userId, parentId } = input;
    const [ fileData ] = await db.insert( files_table ).values( {
      name: file.name,
      type: file.type,
      url: file.url,
      size: file.size,
      parent: parentId ?? ( await QUERIES.getRootFolder() ).id,
      owner: userId,
    } ).$returningId();

    return {
      file: fileData,
      error: null,
      success: true,
      userId,
    };
  },
};
