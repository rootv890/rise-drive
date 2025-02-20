import DriveContents from "@/app/drive-contents"
import { QUERIES } from "@/server/db/queries"

const RootFolderPage = async () => {
  const { id: rootFolderId } = await QUERIES.getRootFolder()
  const foldersPromise = QUERIES.getAllFolders(rootFolderId)
  const filesPromise = QUERIES.getAllFiles(rootFolderId)
  const parentsPromise = QUERIES.getAllParents(rootFolderId)

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
