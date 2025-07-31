import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { AuthProvider } from '@/contexts/AuthContext'
import { ThemeProvider } from '@/contexts/ThemeContext'
import LiveBackground from '@/components/ui/LiveBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Auth Dashboard App',
  description: 'Modern authentication and dashboard application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <LiveBackground />
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
} 