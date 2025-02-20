import { FaFolder, FaFileWord, FaFilePdf, FaFileExcel, FaFileArchive, FaFileCode, FaFileImage, FaFile } from "react-icons/fa";

export const formatFileSize = ( bytes: number | undefined ) => {
  if ( bytes === undefined ) return "N/A";
  if ( bytes < 1024 ) return bytes + " bytes";
  const kb = bytes / 1024;
  if ( kb < 1024 ) return kb.toFixed( 1 ) + " KB";
  const mb = kb / 1024;
  if ( mb < 1024 ) return mb.toFixed( 1 ) + " MB";
  const gb = mb / 1024;
  return gb.toFixed( 1 ) + " GB";
};
