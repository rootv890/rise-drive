import React from "react"
import { FileIcon } from "@/components/file-icons"
import { files_table, folders_table } from "@/server/db/schema"
import { format } from "date-fns"
import { formatFileSize } from "@/utils/utils"
import Link from "next/link"

interface RenderRowProps {
  child: typeof files_table | typeof folders_table
  href: string
}

const RenderRow: React.FC<RenderRowProps> = ({
  child,
  href,
}: RenderRowProps) => {
  const isFolder = child.type.toString() === "folder"
  const lastModifiedDate = isFolder
    ? "N/A"
    : (child as typeof files_table).updatedAt
    ? format(new Date(child.updatedAt.toString()), "MMM dd, yyyy")
    : "N/A"

  return (
    <div
      key={child.id.toString()}
      className="group w-full border-b border-zinc-700 hover:bg-zinc-700 transition-colors duration-200 cursor-pointer px-1 flex text-zinc-400"
    >
      <Link href={href} className="flex items-center p-4 w-full  min-w-0">
        {/* Name */}
        <div className="flex items-center gap-2 flex-[2] min-w-0">
          <FileIcon type={child.type?.toString() || ""} />
          <span
            className={`truncate overflow-hidden whitespace-nowrap ${
              isFolder
                ? "font-semibold group-hover:underline underline-offset-2 text-white"
                : "text-zinc-300"
            }`}
          >
            {child.name.toString()}
          </span>
        </div>

        {/* Type */}
        <div className="text-zinc-400 flex-1">
          {isFolder ? "Folder" : child.type.toString()?.toUpperCase() || ""}
        </div>

        {/* Size */}
        <div className="text-zinc-400 flex-1">
          {isFolder
            ? "N/A"
            : formatFileSize(Number((child as typeof files_table).size))}
        </div>

        {/* Last Modified */}
        <div className="text-zinc-400 flex-1">{lastModifiedDate}</div>

        {/* Actions (Placeholder for future actions) */}
        <div className="flex-1"></div>
      </Link>
    </div>
  )
}

export default RenderRow
