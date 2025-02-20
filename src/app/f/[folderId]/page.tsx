import React, { Suspense } from "react"
import ContentBrowser from "@/app/drive-contents"
import { QUERIES } from "@/server/db/queries"
import { Metadata } from "next"

interface FolderPageProps {
  params: Promise<{ folderId: string }>
}

export const metadata: Metadata = {
  // Dynamic title
  title: `Rise Drive - Folder`,
  description:
    "Rise Drive is a file storage system that allows you to store and share files with yourself or others",
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
        <ContentBrowser
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
