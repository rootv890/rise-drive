import DriveContents from "@/app/drive-contents"
import { db } from "@/server/db"
import {
  folders as foldersTable,
  files as filesTable,
} from "@/server/db/schema"
import { eq, isNull } from "drizzle-orm"
import React from "react"

const RootFolderPage = async () => {
  const rootFolderId = await getRootFolderId()
  const folders = await db.select().from(foldersTable)

  const files = await db
    .select()
    .from(filesTable)
    .where(eq(filesTable.parent, rootFolderId))

  return (
    <div>
      <DriveContents
        folders={folders}
        files={files}
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
