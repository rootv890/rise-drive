import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Button } from "./ui/button"
import { LiaUploadSolid } from "react-icons/lia"
import { Breadcrumbs } from "./breadcrumbs"

const DriveNavbar = () => {
  return (
    <div className="flex items-center w-full justify-between px-6 py-4 bg-zinc-900">
      <div className="flex w-full justify-between   items-center gap-2">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              className="invert"
              src="/next.svg"
              alt="logo"
              width={64}
              height={64}
            />
          </Link>

          {/* Breadcrumbs */}
          <Breadcrumbs breadcrumbs={[]} />
        </div>

        <Button className="bg-violet-600 hover:bg-violet-700" size="lg">
          <LiaUploadSolid className="w-auto h-12" /> Upload File
        </Button>
      </div>
    </div>
  )
}

export default DriveNavbar
