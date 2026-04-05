import { ReactNode } from 'react'
import '../assets/css/globals.css'
import { Nav } from './components/Nav'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main style={{ padding: 20 }}>{children}</main>
      </body>
    </html>
  )
}