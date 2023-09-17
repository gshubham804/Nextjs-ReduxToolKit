import Header from '@/components/Header'
import './css/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nextjs-ReduxToolkit',
  description: 'Learn Nextjs with Redux Toolkit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-bodyFont w-full text-darkText'>
        <Header/>
        {children}
        </body>
    </html>
  )
}
