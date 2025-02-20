import { db } from "@/server/db";
import { DbFolder, folders as foldersTable } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export async function getAllParents ( folderId: number ) {
  const parents: DbFolder[] = [];
  let currentFolderId: number | null = folderId;

  while ( currentFolderId !== null ) {
    // get the parent folder
    const parentFolder = await db
      .select()
      .from( foldersTable )
      .where( eq( foldersTable.id, currentFolderId ) );

    parents.unshift( parentFolder[ 0 ] );
    currentFolderId = parentFolder[ 0 ].parent ?? null;
  }

  return parents;
}
