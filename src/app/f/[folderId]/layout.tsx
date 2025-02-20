import React from "react"

const FolderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-4 w-full h-screen bg-zinc-900 p-4  text-white">
      {children}
    </div>
  )
}

export default FolderLayout
