// app/providers.jsx
"use client"

import { env } from "@/env"
import posthog from "posthog-js"
import { PostHogProvider as PHProvider } from "posthog-js/react"
import { useEffect } from "react"
import SuspendedPostHogPageView from "./post-hog-page-viewer"

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(env.POSTHOG_KEY, {
      api_host: env.POSTHOG_HOST,
      person_profiles: "identified_only",
    })
  }, [])

  return (
    <PHProvider client={posthog}>
      <SuspendedPostHogPageView />
      {children}
    </PHProvider>
  )
}
