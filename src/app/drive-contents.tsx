"use client"
import React from "react"
import { files_table, folders_table } from "@/server/db/schema"
import RenderRow from "@/components/RenderRow"
import { Breadcrumbs } from "@/components/breadcrumbs"

const DriveContents = (props: {
  folders: (typeof folders_table.$inferSelect)[]
  files: (typeof files_table.$inferSelect)[]
  parents: (typeof folders_table.$inferSelect)[]
  isLoading: boolean
  error: Error | null
  currentFolderId: number
}) => {
  return (
    <div className="bg-zinc-900 w-full min-h-screen text-white font-sans">
      {/* Files and folders */}
      <div className="mx-auto max-w-7xl p-4">
        {/* Breadcrumb */}
        <Breadcrumbs breadcrumbs={props.parents} />
        <div className="rounded-md bg-zinc-800 overflow-hidden">
          {/* Headers */}
          <div className="group w-full border-b font-semibold border-zinc-700 hover:bg-zinc-700 transition-colors duration-200 cursor-pointer px-1 flex text-zinc-400">
            <div className="flex-[2] min-w-0 p-4">Name</div>
            <div className="flex-1 p-4">Type</div>
            <div className="flex-1 p-4">Size</div>
            <div className="flex-1 p-4">Last Modified</div>
            <div className="flex-1 p-4">Actions</div>
          </div>

          <div className="divide-y flex w-full flex-col divide-zinc-700">
            {props.files.map((file) => (
              <RenderRow
                key={file.id.toString()}
                child={file as unknown as typeof files_table}
                href={`/f/${file.id}`}
              />
            ))}
            {props.folders.map((folder) => (
              <RenderRow
                key={folder.id}
                child={folder as unknown as typeof folders_table}
                href={`/f/${folder.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default DriveContents
