import DriveContents from "@/app/drive-contents"
import { getAllParents } from "../get-all-parent"
import { getAllFolders, getAllFiles, getRootFolder } from "@/server/db/queries"

const RootFolderPage = async () => {
  const { id: rootFolderId } = await getRootFolder()
  const foldersPromise = getAllFolders(rootFolderId)
  const filesPromise = getAllFiles(rootFolderId)
  const parentsPromise = getAllParents(rootFolderId)

  const [folders, files, parents] = await Promise.all([
    foldersPromise,
    filesPromise,
    parentsPromise,
  ])

  return (
    <div>
      <DriveContents
        folders={folders}
        files={files}
        parents={parents}
        currentFolderId={0}
      />
    </div>
  )
}

export default RootFolderPage
