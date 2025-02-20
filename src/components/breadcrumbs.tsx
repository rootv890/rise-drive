import { folders_table } from "@/server/db/schema"
import Link from "next/link"
import { FaChevronRight } from "react-icons/fa"

export const Breadcrumbs: React.FC<{
  breadcrumbs: (typeof folders_table.$inferSelect)[]
}> = ({ breadcrumbs }) => {
  return (
    <div className="flex items-center gap-2 my-4">
      {breadcrumbs.map(
        (breadcrumb: typeof folders_table.$inferSelect, index: number) => {
          const isLast = index === breadcrumbs.length - 1
          // breadcrumb is a DbFolder 🏠
          return (
            <div key={index} className="flex items-center gap-2">
              <Link
                href={`/f/${breadcrumb.id}`}
                className={`cursor-pointer px-2 py-1 rounded-md hover:text-violet-600 transition-all duration-300 ${
                  !isLast
                    ? "hover:underline underline-offset-2 bg-zinc-800"
                    : "font-semibold text-white"
                }`}
              >
                {breadcrumb.name.toString()}
              </Link>
              {!isLast && <FaChevronRight className="w-3 h-3 text-zinc-500" />}
            </div>
          )
        }
      )}
    </div>
  )
}
