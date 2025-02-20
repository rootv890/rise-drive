import { db } from "@/server/db"
import React from "react"
import { folders_table, files_table } from "@/server/db/schema"
import { eq } from "drizzle-orm"
import DriveContents from "@/app/drive-contents"
import { getAllParents } from "../get-all-parent"

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
    .from(folders_table)
    .where(eq(folders_table.id, parsedFolderId))

  // Children
  const foldersPromise = db
    .select()
    .from(folders_table)
    .where(eq(folders_table.parent, parsedFolderId))

  // Add files under the current folder
  const filesPromise = db
    .select()
    .from(files_table)
    .where(eq(files_table.parent, parsedFolderId))

  const parentsPromise = getAllParents(parsedFolderId)

  const [folders, files, parents] = await Promise.all([
    foldersPromise,
    filesPromise,
    parentsPromise,
  ])

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
