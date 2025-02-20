import Link from "next/link"
import React from "react"
import { Button } from "./ui/button"
import { Breadcrumbs } from "./breadcrumbs"
import { UserButton } from "@clerk/nextjs"
import { SignedIn, SignedOut } from "@clerk/nextjs"
import { SignInButton } from "@clerk/nextjs"
import Logo from "./logo"

const DriveNavbar = () => {
  return (
    <div className="flex items-center w-full justify-between px-6 py-4 bg-zinc-900">
      <div className="flex w-full justify-between   items-center gap-2">
        <div className="flex items-center gap-4 select-none">
          <Link
            className="flex items-center gap-2 font-semibold tracking-tighter stroke-white fill-white"
            href="/"
          >
            <Logo />
            <p className="text-white text-2xl font-bold">Rise Drive</p>
          </Link>

          {/* Breadcrumbs */}
          <Breadcrumbs breadcrumbs={[]} />
        </div>

        <div className="flex items-center gap-4">
          <div>
            <SignedIn>
              <div className="text-white">
                <UserButton />
              </div>
            </SignedIn>
            <SignedOut>
              <Button
                variant="default"
                size="lg"
                className=" text-white px-4 py-2 rounded-md"
              >
                <SignInButton />
              </Button>
            </SignedOut>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DriveNavbar
