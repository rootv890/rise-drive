"use client"
import { Button } from "@/components/ui/button"
import React, { useEffect, useState } from "react"

import { FaChevronRight } from "react-icons/fa"
import { LiaUploadSolid } from "react-icons/lia"
import { format } from "date-fns"

import { FileIcon } from "@/components/file-icons"
import { File as DbFile, Folder as DbFolder } from "@/server/db/schema"
import { formatFileSize } from "@/utils/utils"

function getBreadcrumbs(currentFolderId: number, folders: DbFolder[]) {
  const currentActiveFolder = folders.find(
    (folder) => folder.id === currentFolderId
  )

  if (!currentActiveFolder) return []

  // add the current folder to the breadcrumbs
  const breadcrumbs: DbFolder[] = [currentActiveFolder]

  function getParentFolder(folderId: number | null) {
    if (!folderId) return []
    const parentFolder = folders.find((folder) => folder.id === folderId)
    if (!parentFolder) return []
    breadcrumbs.unshift(parentFolder) // add the parent folder to the breadcrumbs
    getParentFolder(parentFolder.parent) // Recursively get the parent folder
  }
  getParentFolder(currentActiveFolder.parent)
  return breadcrumbs
}

function getChildrenFromCurrentFolder(
  currentFolder: number,
  folders: DbFolder[],
  files: DbFile[]
) {
  const currentActiveFolder = folders.find(
    (folder) => folder.id === currentFolder
  )

  if (!currentActiveFolder) return []

  // Get the children where the file and folder parent id == current folderid
  const currentActiveFolderChildrenFolder = folders.filter(
    (folder) => folder.parent === currentFolder
  )

  const currentActiveFolderChildrenFile = files.filter(
    (file) => file.parent === currentFolder
  )

  return [
    ...currentActiveFolderChildrenFolder,
    ...currentActiveFolderChildrenFile,
  ]
}

const renderRow = (
  child: DbFile | DbFolder,
  onFolderClick: (folderId: number) => void
) => {
  const isFolder = child.type === "folder"
  const lastModifiedDate = isFolder
    ? "N/A"
    : (child as DbFile).updatedAt
    ? format(new Date((child as DbFile).updatedAt!), "MMM dd, yyyy")
    : "N/A"

  return (
    <div
      key={child.id}
      className="group w-full border-b border-zinc-700 hover:bg-zinc-700 transition-colors duration-200 cursor-pointer px-1 flex text-zinc-400"
    >
      {" "}
      <div
        className="flex items-center p-4 w-full  min-w-0"
        onClick={() => isFolder && onFolderClick(child.id)}
      >
        {/* Name */}
        <div className="flex items-center gap-2 flex-[2] min-w-0">
          <FileIcon type={child.type?.toString() || ""} />
          <span
            className={`truncate overflow-hidden whitespace-nowrap ${
              isFolder
                ? "font-semibold group-hover:underline underline-offset-2 text-white"
                : "text-zinc-300"
            }`}
          >
            {child.name}
          </span>
        </div>

        {/* Type */}
        <div className="text-zinc-400 flex-1">
          {isFolder ? "Folder" : child.type?.toUpperCase() || ""}
        </div>

        {/* Size */}
        <div className="text-zinc-400 flex-1">
          {isFolder ? "N/A" : formatFileSize((child as DbFile).size || 0)}
        </div>

        {/* Last Modified */}
        <div className="text-zinc-400 flex-1">{lastModifiedDate}</div>

        {/* Actions (Placeholder for future actions) */}
        <div className="flex-1"></div>
      </div>
    </div>
  )
}

const getRootFolderId = (folders: DbFolder[]) => {
  return folders.find((folder) => folder.parent === null)?.id
}

const DriveContents = (props: {
  folders: DbFolder[]
  files: DbFile[]
  isLoading: boolean
  error: Error | null
}) => {
  const [currentFolderId, setCurrentFolderId] = useState<number>(
    () => getRootFolderId(props.folders) as number
  ) // 1 === root
  const [children, setChildren] = useState<unknown[]>([])
  const [breadcrumbs, setBreadcrumbs] = useState<unknown[]>([])

  useEffect(() => {
    const children = getChildrenFromCurrentFolder(
      currentFolderId,
      props.folders,
      props.files
    )
    setChildren(children)
  }, [currentFolderId, props.folders, props.files])

  // BreadCrumbs
  useEffect(() => {
    const breadcrumbs = getBreadcrumbs(currentFolderId, props.folders)
    setBreadcrumbs(breadcrumbs)
  }, [currentFolderId, props.folders])

  const handleFolderClick = (folderId: number) => {
    setCurrentFolderId(folderId)
  }

  const renderBreadcrumbs = () => {
    return breadcrumbs.map((breadcrumb, index) => {
      const isLast = index === breadcrumbs.length - 1
      // breadcrumb is a DbFolder
      const breadcrumbFolder = breadcrumb as DbFolder
      return (
        <div key={breadcrumbFolder.id} className="flex items-center gap-2">
          <div
            className={`cursor-pointer px-2 py-1 rounded-md hover:text-violet-600 transition-all duration-300 ${
              !isLast
                ? "hover:underline underline-offset-2 bg-zinc-800"
                : "font-semibold text-white"
            }`}
            onClick={() => !isLast && handleFolderClick(breadcrumbFolder.id)} // Prevent click on last breadcrumb
          >
            {breadcrumbFolder.name}
          </div>
          {!isLast && <FaChevronRight className="w-3 h-3 text-zinc-500" />}
        </div>
      )
    })
  }
  return (
    <div className="bg-zinc-900 w-full min-h-screen text-white font-sans">
      {/* Nav bar */}
      <div className="flex items-center justify-between p-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2">{renderBreadcrumbs()}</div>
        <Button className="bg-violet-600 hover:bg-violet-700">
          <span className="flex items-center gap-2">
            <LiaUploadSolid className="w-4 h-4" /> Upload File
          </span>
        </Button>
      </div>
      {/* Files and folders */}
      <div className="mx-auto max-w-7xl p-4">
        <div className="rounded-md bg-zinc-800 overflow-hidden">
          {/* Headers */}
          <div className="group w-full border-b font-semibold border-zinc-700 hover:bg-zinc-700 transition-colors duration-200 cursor-pointer px-1 flex text-zinc-400">
            <div className="flex-[2] min-w-0 p-4">Name</div>
            <div className="flex-1 p-4">Type</div>
            <div className="flex-1 p-4">Size</div>
            <div className="flex-1 p-4">Last Modified</div>
            <div className="flex-1 p-4">Actions</div>
          </div>

          {/* Child files and folders */}
          {props.isLoading ? (
            <div className="p-8 text-center justify-center items-center flex w-full text-zinc-500">
              Loading...
            </div>
          ) : (
            <div className="divide-y flex w-full flex-col divide-zinc-700">
              {children.map((child) =>
                renderRow(child as DbFile | DbFolder, (folderId) => {
                  handleFolderClick(folderId)
                })
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default DriveContents

/**
 * dump
 *
  const generateBreadcrumbPath = (
    folderId: string | null,
    folders: Folder[],
    path: Folder[]
  ) => {
    if (folderId === null) {
      return [...path]
    }

    const currentFolder = getFolderById(folderId, folders)
    if (currentFolder) {
      return generateBreadcrumbPath(currentFolder.parent, folders, [
        currentFolder,
        ...path,
      ])
    }
    return [...path] // Should ideally not reach here in a valid folder structure
  }

  useEffect(() => {
    fetchChildren(currentFolderId)
    const breadcrumbPath = generateBreadcrumbPath(
      currentFolderId,
      mockFolders,
      []
    )
    setBreadcrumbs(breadcrumbPath)
  }, [currentFolderId])

  const handleFolderClick = (folderId: string) => {
    setCurrentFolderId(folderId)
  }

  const renderBreadcrumbs = () => {
    return breadcrumbs.map((breadcrumb, index) => {
      const isLast = index === breadcrumbs.length - 1
      return (
        <div key={breadcrumb.id} className="flex items-center gap-2">
          <div
            className={`cursor-pointer px-2 py-1 rounded-md hover:text-violet-600 transition-all duration-300 ${
              !isLast
                ? "hover:underline underline-offset-2 bg-zinc-800"
                : "font-semibold text-white"
            }`}
            onClick={() => !isLast && handleFolderClick(breadcrumb.id)} // Prevent click on last breadcrumb
          >
            {breadcrumb.name}
          </div>
          {!isLast && <FaChevronRight className="w-3 h-3 text-zinc-500" />}
        </div>
      )
    })
  }
 */
