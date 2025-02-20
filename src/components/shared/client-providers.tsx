import type { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider"

type ClientProvidersProps = {
  children: ReactNode;
}


export default function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
