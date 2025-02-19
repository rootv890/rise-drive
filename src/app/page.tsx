"use client"
import { Button } from "@/components/ui/button"
import React, { useEffect, useState } from "react"
import mockFolders, { Folder } from "./mock-data"
import Link from "next/link"
import {
  FaChevronRight,
  FaFolder,
  FaFile,
  FaFileWord,
  FaFilePdf,
  FaFileImage,
  FaFileExcel,
  FaFileArchive,
  FaFileCode,
} from "react-icons/fa"
import { format } from "date-fns"

const headerColumns = [
  {
    name: "Name",
    key: "name",
  },
  {
    name: "Type",
    key: "type",
  },
  {
    name: "Size",
    key: "size",
  },
  {
    name: "Last Modified",
    key: "lastModified",
  },
  {
    name: "Actions",
    key: "actions",
  },
]

const getFolderById = (
  folderId: string,
  folders: Folder[]
): Folder | undefined => {
  for (const folder of folders) {
    if (folder.id === folderId) {
      return folder
    }
    if (folder.children) {
      const foundInChildren = getFolderById(
        folderId,
        folder.children as Folder[]
      )
      if (foundInChildren) {
        return foundInChildren
      }
    }
  }
  return undefined
}

const getCurrentFolderChildren = (
  currentFolderId: string,
  allFolders: Folder[]
) => {
  const currentFolder = getFolderById(currentFolderId, allFolders)
  return currentFolder?.children || []
}

const formatFileSize = (bytes: number | undefined) => {
  if (bytes === undefined) return "N/A"
  if (bytes < 1024) return bytes + " bytes"
  const kb = bytes / 1024
  if (kb < 1024) return kb.toFixed(1) + " KB"
  const mb = kb / 1024
  if (mb < 1024) return mb.toFixed(1) + " MB"
  const gb = mb / 1024
  return gb.toFixed(1) + " GB"
}

const getFileIcon = (type: string) => {
  switch (type) {
    case "folder":
      return <FaFolder className="w-5 h-5 text-yellow-400" />
    case "docx":
    case "doc":
      return <FaFileWord className="w-5 h-5 text-blue-500" />
    case "pdf":
      return <FaFilePdf className="w-5 h-5 text-red-600" />
    case "jpeg":
    case "png":
    case "gif":
    case "svg":
      return <FaFileImage className="w-5 h-5 text-purple-500" />
    case "xlsx":
    case "csv":
      return <FaFileExcel className="w-5 h-5 text-green-500" />
    case "zip":
    case "rar":
      return <FaFileArchive className="w-5 h-5 text-orange-500" />
    case "html":
    case "css":
    case "js":
    case "jsx":
    case "ts":
    case "tsx":
      return <FaFileCode className="w-5 h-5 text-gray-400" />
    default:
      return <FaFile className="w-5 h-5 text-zinc-400" />
  }
}

const renderRow = (
  child: File | Folder,
  onFolderClick: (folderId: string) => void
) => {
  const isFolder = child.type === "folder"
  const lastModifiedDate = isFolder
    ? "N/A"
    : (child as File).updatedAt
    ? format(new Date((child as File).updatedAt!), "MMM dd, yyyy")
    : "N/A"

  return (
    <div
      key={child.id}
      className="group w-full border-b border-zinc-700 hover:bg-zinc-700 transition-colors duration-200 cursor-pointer px-1 flex text-zinc-400"
    >
      <div
        className="flex items-center p-4 w-full  min-w-0"
        onClick={() => isFolder && onFolderClick(child.id)}
      >
        {/* Name */}
        <div className="flex items-center gap-2 flex-[2] min-w-0">
          {getFileIcon(child.type)}
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
          {isFolder ? "Folder" : child.type.toUpperCase()}
        </div>

        {/* Size */}
        <div className="text-zinc-400 flex-1">
          {isFolder ? "N/A" : formatFileSize(child.size)}
        </div>

        {/* Last Modified */}
        <div className="text-zinc-400 flex-1">{lastModifiedDate}</div>

        {/* Actions (Placeholder for future actions) */}
        <div className="flex-1"></div>
      </div>
    </div>
  )
}

const HomePage = () => {
  const [currentFolderId, setCurrentFolderId] = useState<string>("root")
  const [children, setChildren] = useState<any[]>([])
  const [breadcrumbs, setBreadcrumbs] = useState<any[]>([])

  const fetchChildren = (folderId: string) => {
    const fetchedChildren = getCurrentFolderChildren(folderId, mockFolders)
    setChildren(fetchedChildren)
  }

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

  return (
    <div className="bg-zinc-900 w-full min-h-screen text-white font-sans">
      {/* Nav bar */}
      <div className="flex items-center justify-between p-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2">{renderBreadcrumbs()}</div>
        <Button className="bg-violet-600 hover:bg-violet-700">
          Upload File
        </Button>
      </div>
      {/* Files and folders */}
      <div className="mx-auto max-w-7xl p-4">
        <div className="rounded-md bg-zinc-800 overflow-hidden">
          {/* Headers */}
          <div className="group w-full border-b border-zinc-700 hover:bg-zinc-700 transition-colors duration-200 cursor-pointer px-1 flex text-zinc-400">
            <div className="flex-[2] min-w-0 p-4">Name</div>
            <div className="flex-1 p-4">Type</div>
            <div className="flex-1 p-4">Size</div>
            <div className="flex-1 p-4">Last Modified</div>
            <div className="flex-1 p-4">Actions</div>
          </div>

          {/* Child files and folders */}
          <div className="divide-y flex w-full flex-col divide-zinc-700">
            {children.map((child) => renderRow(child, handleFolderClick))}
          </div>

          {children.length === 0 && (
            <div className="p-8 text-center justify-center items-center flex w-full text-zinc-500">
              No items here.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default HomePage
