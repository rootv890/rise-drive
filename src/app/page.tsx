import React, { Suspense } from "react"
import { db } from "@/server/db"
import {
  folders as foldersTable,
  files as filesTable,
} from "@/server/db/schema"
import DriveContents from "./drive-contents"

const DrivePage = async () => {
  let folders: (typeof foldersTable.$inferSelect)[] = []
  let files: (typeof filesTable.$inferSelect)[] = []
  let error: Error | null = null
  let isLoading = true

  try {
    isLoading = true
    folders = await db.select().from(foldersTable)
    files = await db.select().from(filesTable)
  } catch (error) {
    console.error(error)
  } finally {
    isLoading = false
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <Suspense fallback={<div>Loading...</div>}>
        <DriveContents
          folders={folders}
          files={files}
          isLoading={isLoading}
          error={error}
        />
      </Suspense>
    </div>
  )
}

export default DrivePage
