import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Simple Sidebar */}
        <div className=" flex w-full min-h-screen h-full">
          <div className=" hidden lg:block h-screen w-1/5 bg-zinc-800 ">
            <div className="h-1/6 flex items-start justify-start p-6">
              <h1 className="text-white font-mono text-2xl font-bold">
                Rise Drive
              </h1>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}
