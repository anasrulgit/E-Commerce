import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-Commerce',
  description: 'Fullstack E-Commerce Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
            <h1>E-Commerce Project</h1>
          </nav>
          {children}
        </Providers>
      </body>
    </html>
  )
}