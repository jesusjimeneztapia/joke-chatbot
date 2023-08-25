import { UserProvider } from '@/components/UserProvider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Joke Chatbot',
  description: 'Un Chatbot que hace chiste, pero no tan buenos'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='es'>
      <head>
        <link rel='icon' href='/favicon.svg' />
      </head>
      <body className={`${inter.className} bg-slate-900`}>
        <UserProvider>
          <Header />
          <main className='p-4 container mx-auto'>{children}</main>
        </UserProvider>
      </body>
    </html>
  )
}
