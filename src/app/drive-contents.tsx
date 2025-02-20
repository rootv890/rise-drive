"use client"
import React from "react"
import { files_table, folders_table } from "@/server/db/schema"
import RenderRow from "@/components/RenderRow"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { LiaUploadSolid } from "react-icons/lia"
import { UploadButton } from "@/components/uploadthing"
import { useRouter } from "next/navigation"

const ContentBrowser = (props: {
  folders: (typeof folders_table.$inferSelect)[]
  files: (typeof files_table.$inferSelect)[]
  parents: (typeof folders_table.$inferSelect)[]
  currentFolderId: number
}) => {
  const router = useRouter()
  return (
    <div className="w-full min-h-screen  font-sans">
      <div className="mx-auto max-w-7xl p-4">
        <div className="flex justify-between items-center">
          <Breadcrumbs breadcrumbs={props.parents} />
          <div>
            {/* <Button className="bg-violet-600 hover:bg-violet-700">
              <LiaUploadSolid className="w-auto h-12" /> Upload File
            </Button> */}
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                console.log(res)
                router.refresh() // to refresh the page after the upload is complete
              }}
            />
          </div>
        </div>
        <div className="rounded-lg bg-zinc-800 ">
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
export default ContentBrowser
