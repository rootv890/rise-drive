import {
  FaFile,
  FaFileImage,
  FaFileVideo,
  FaFileAudio,
  FaFilePdf,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
  FaFileCode,
  FaFolder,
} from "react-icons/fa" // 📦 Using React Icons for consistency

interface FileIconProps {
  type: string
  className?: string
}

export function FileIcon({ type, className = "" }: FileIconProps) {
  // 🎯 Helper function to get the appropriate icon based on file type
  const getIcon = () => {
    // Convert type to lowercase for easier matching
    const lowerType = type.toLowerCase()

    // 📁 First check if it's a folder
    if (lowerType === "folder") {
      return <FaFolder className={`w-5 h-5 text-yellow-400 ${className}`} />
    }

    // 🖼️ Image files
    if (["jpg", "jpeg", "png", "gif", "svg", "webp"].includes(lowerType)) {
      return <FaFileImage className={`w-5 h-5 text-blue-400 ${className}`} />
    }

    // 🎥 Video files
    if (["mp4", "mov", "avi", "webm"].includes(lowerType)) {
      return <FaFileVideo className={`w-5 h-5 text-purple-400 ${className}`} />
    }

    // 🎵 Audio files
    if (["mp3", "wav", "ogg"].includes(lowerType)) {
      return <FaFileAudio className={`w-5 h-5 text-green-400 ${className}`} />
    }

    // 📄 Document files
    if (lowerType === "pdf") {
      return <FaFilePdf className={`w-5 h-5 text-red-400 ${className}`} />
    }
    if (["doc", "docx"].includes(lowerType)) {
      return <FaFileWord className={`w-5 h-5 text-blue-600 ${className}`} />
    }
    if (["xls", "xlsx"].includes(lowerType)) {
      return <FaFileExcel className={`w-5 h-5 text-green-600 ${className}`} />
    }
    if (["ppt", "pptx"].includes(lowerType)) {
      return (
        <FaFilePowerpoint className={`w-5 h-5 text-orange-400 ${className}`} />
      )
    }

    // 👨‍💻 Code files
    if (
      ["js", "ts", "jsx", "tsx", "py", "java", "cpp", "html", "css"].includes(
        lowerType
      )
    ) {
      return <FaFileCode className={`w-5 h-5 text-cyan-400 ${className}`} />
    }

    // 📄 Default file icon for unknown types
    return <FaFile className={`w-5 h-5 text-gray-400 ${className}`} />
  }

  return getIcon()
}
