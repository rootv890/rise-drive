import DriveContents from "@/app/drive-contents"
import { db } from "@/server/db"
import {
  folders as foldersTable,
  files as filesTable,
} from "@/server/db/schema"
import { eq, isNull } from "drizzle-orm"
import React from "react"
import { getAllParents } from "../get-all-parent"
const RootFolderPage = async () => {
  const rootFolderId = await getRootFolderId()
  const foldersPromise = db.select().from(foldersTable)

  const filesPromise = db
    .select()
    .from(filesTable)
    .where(eq(filesTable.parent, rootFolderId))

  const parentsPromise = getAllParents(rootFolderId)

  const [folders, files, parents] = await Promise.all([
    foldersPromise,
    filesPromise,
    parentsPromise,
  ])

  return (
    <div>
      <DriveContents
        folders={folders}
        files={files}
        parents={parents}
        isLoading={false}
        error={null}
        currentFolderId={0}
      />
    </div>
  )
}

export default RootFolderPage

const getRootFolderId = async () => {
  const rootFolder = await db
    .select()
    .from(foldersTable)
    .where(isNull(foldersTable.parent))

  if (rootFolder.length === 0) {
    throw new Error("Root folder not found")
  }
  return rootFolder[0].id
}
