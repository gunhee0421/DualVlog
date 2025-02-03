import ReduxProvider from "@/hooks/ReduxProvider"
import { Nanum_Gothic } from "next/font/google"
import "./styles/globals.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { MSWComponent } from "@/hooks/MSWComponet"
import ReactQueryProviders from "@/hooks/ReactQueryProviders"
import { Toaster } from "sonner"

export const metadata = {
  title: "Dual Blog",
  description: "Velog의 오마주 블로그"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {process.env.NEXT_PUBLIC_MSW === "enable" ? (
          <MSWComponent>
            <ReactQueryProviders>
              <ReduxProvider>
                <Toaster />
                {children}
              </ReduxProvider>
            </ReactQueryProviders>
          </MSWComponent>
        ) : (
          <ReactQueryProviders>
            <ReduxProvider>
              <Toaster />
              {children}
            </ReduxProvider>
          </ReactQueryProviders>
        )}
      </body>
    </html>
  )
}
