import { db } from "@/server/db"
import React from "react"
import {
  folders as foldersTable,
  files as filesTable,
} from "@/server/db/schema"
import { eq } from "drizzle-orm"
import DriveContents from "@/app/drive-contents"

const FolderPage = async ({
  params,
}: {
  params: Promise<{ folderId: string }>
}) => {
  const { folderId } = await params
  const parsedFolderId = parseInt(folderId)

  if (isNaN(parsedFolderId)) {
    return (
      <div className="flex flex-col h-full w-full items-center justify-center">
        <h1 className="text-2xl font-bold">Invalid Folder {folderId} 🙄</h1>
        <p className="text-xl text-balance text-center mt-3 text-gray-500">
          Please try again with a valid folder ID. If you need help, please
          contact support.
        </p>
      </div>
    )
  }

  const currentFolder = await db
    .select()
    .from(foldersTable)
    .where(eq(foldersTable.id, parsedFolderId))

  // Children
  const folders = await db
    .select()
    .from(foldersTable)
    .where(eq(foldersTable.parent, parsedFolderId))

  // Add files under the current folder
  const files = await db
    .select()
    .from(filesTable)
    .where(eq(filesTable.parent, parsedFolderId))

  console.log("Current Folder\n", currentFolder)
  console.log("Folders\n", folders)
  console.log("Files\n", files)

  return (
    <div>
      <h1 className="text-2xl font-bold">{currentFolder[0].name}</h1>

      <DriveContents
        currentFolderId={parsedFolderId}
        files={files}
        folders={folders}
        error={null}
        isLoading={false}
      />
    </div>
  )
}

export default FolderPage
