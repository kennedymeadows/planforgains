'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { AuthContextProvider } from '@/context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-slate-50">
      <body className={`${inter.className} h-full`}>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
