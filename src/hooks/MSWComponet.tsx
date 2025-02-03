"use client"

import { useEffect, useState } from "react"

const initializeMSW = async () => {
  if (
    process.env.NEXT_RUNTIME !== "nodejs" &&
    process.env.NEXT_PUBLIC_MSW === "enable"
  ) {
    const { worker } = await import("../api/mocks/worker/browser")
    await worker.start({
      onUnhandledRequest: "bypass",
    })
  }
}

export const MSWComponent = ({ children }: { children: React.ReactNode }) => {
  const [mswReady, setMswReady] = useState(false)

  useEffect(() => {
    const init = async () => {
      await initializeMSW()
      setMswReady(true)
    }

    init()
  }, [mswReady])

  if (!mswReady) return null

  return <>{children}</>
}
