import { db } from "@/server/db"
import React from "react"
import {
  folders as foldersTable,
  files as filesTable,
  DbFolder,
} from "@/server/db/schema"
import { eq } from "drizzle-orm"
import DriveContents from "@/app/drive-contents"

async function getAllParents(folderId: number) {
  const parents: DbFolder[] = []
  let currentFolderId: number | null = folderId

  while (currentFolderId !== null) {
    // get the parent folder
    const parentFolder = await db
      .select()
      .from(foldersTable)
      .where(eq(foldersTable.id, currentFolderId))

    parents.unshift(parentFolder[0])
    currentFolderId = parentFolder[0].parent ?? null
  }

  return parents
}

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
  const foldersPromise = db
    .select()
    .from(foldersTable)
    .where(eq(foldersTable.parent, parsedFolderId))

  // Add files under the current folder
  const filesPromise = db
    .select()
    .from(filesTable)
    .where(eq(filesTable.parent, parsedFolderId))

  const parentsPromise = getAllParents(parsedFolderId)

  const [folders, files, parents] = await Promise.all([
    foldersPromise,
    filesPromise,
    parentsPromise,
  ])

  // console.log("Current Folder\n", currentFolder)
  // console.log("Folders\n", folders)
  // console.log("Files\n", files)
  console.log("Parents\n", parents)

  return (
    <div>
      <h1 className="text-2xl font-bold">{currentFolder[0].name}</h1>

      <DriveContents
        currentFolderId={parsedFolderId}
        files={files}
        folders={folders}
        parents={parents}
        error={null}
        isLoading={false}
      />
    </div>
  )
}

export default FolderPage
