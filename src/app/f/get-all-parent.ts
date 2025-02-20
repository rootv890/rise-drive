import { db } from "@/server/db";
import { folders_table } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export async function getAllParents ( folderId: number ) {
  const parents: ( typeof folders_table.$inferSelect )[] = [];
  let currentFolderId: number | null = folderId;

  while ( currentFolderId !== null ) {
    // get the parent folder
    const parentFolder = await db
      .select()
      .from( folders_table )
      .where( eq( folders_table.id, currentFolderId ) );

    parents.unshift( parentFolder[ 0 ] );
    currentFolderId = parentFolder[ 0 ].parent ?? null;
  }

  return parents;
}
