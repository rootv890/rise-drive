import { create } from "zustand";
import { DbFolder, DbFile } from "@/server/db/schema";
interface BreadcrumbStore {
  folders: DbFolder[];
  setFolders: ( folders: DbFolder[] ) => void; // ON the dynamic route set the folders
  files: DbFile[];
  setFiles: ( files: DbFile[] ) => void; // ON the dynamic route set the files
  // breadcrumbs: DbFolder[];
  // setBreadcrumbs: ( breadcrumbs: DbFolder[] ) => void;
  // generateBreadcrumbs: ( folderId: number ) => void;
}


export const breadcrumbsStore = create<BreadcrumbStore>( ( set ) => ( {
  folders: [],
  files: [],
  setFolders: ( folders: DbFolder[] ) => {
    console.log( "Setting folders", folders );
    set( { folders } );
  },
  setFiles: ( files: DbFile[] ) => {
    console.log( "Setting files", files );
    set( { files } );
  },
} ) );
