import { folders as DbFolder } from "@/server/db/schema"
import { FaChevronRight } from "react-icons/fa"

export const Breadcrumbs: React.FC<{
  breadcrumbs: (typeof foldersTable)[]
}> = ({ breadcrumbs }) => {
  return (
    <>
      {breadcrumbs.map((breadcrumb, index) => {
        const isLast = index === breadcrumbs.length - 1
        // breadcrumb is a DbFolder 🏠
        const breadcrumbFolder = breadcrumb as typeof DbFolder
        return (
          <div key={index} className="flex items-center gap-2">
            <div
              className={`cursor-pointer px-2 py-1 rounded-md hover:text-violet-600 transition-all duration-300 ${
                !isLast
                  ? "hover:underline underline-offset-2 bg-zinc-800"
                  : "font-semibold text-white"
              }`}
            >
              {breadcrumbFolder.name}
            </div>
            {!isLast && <FaChevronRight className="w-3 h-3 text-zinc-500" />}
          </div>
        )
      })}
    </>
  )
}
