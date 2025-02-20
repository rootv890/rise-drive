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
