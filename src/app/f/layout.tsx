import DriveNavbar from "@/components/DriveNavbar"
import React from "react"

const FLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DriveNavbar />
      {children}
    </div>
  )
}

export default FLayout
