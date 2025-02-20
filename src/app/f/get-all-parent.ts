import { getFolder } from "@/server/db/queries";
import { folders_table } from "@/server/db/schema";

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
