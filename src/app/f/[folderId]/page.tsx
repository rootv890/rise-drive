import React, { Suspense } from "react"
import DriveContents from "@/app/drive-contents"
import { QUERIES } from "@/server/db/queries"

interface FolderPageProps {
  params: Promise<{ folderId: string }>
}

const FolderPage = async ({ params }: FolderPageProps) => {
  const { folderId } = await params
  const parsedFolderId = parseInt(folderId)

  if (isNaN(parsedFolderId)) {
    return (
      <div className="flex flex-col h-full w-full items-center justify-center">
        <h1 className="text-2xl font-bold">Invalid Folder {folderId} 🙄</h1>
      </div>
    )
  }

  const foldersPromise = QUERIES.getAllFolders(parsedFolderId)
  const filesPromise = QUERIES.getAllFiles(parsedFolderId)
  const parentsPromise = QUERIES.getAllParents(parsedFolderId)

  const [folders, files, parents] = await Promise.all([
    foldersPromise,
    filesPromise,
    parentsPromise,
  ])

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <DriveContents
          currentFolderId={parsedFolderId}
          files={files}
          folders={folders}
          parents={parents}
        />
      </Suspense>
    </div>
  )
}

export default FolderPage
