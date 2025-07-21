import Footer from '@/components/main/Footer'
import { Navbar } from '@/components/main/Navbar'
import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Manan Khandelwal | Full Stack Developer',
  description:
    'Full Stack Developer specializing in React Native, Node.js, and modern web technologies. Building scalable web and mobile applications with expertise in JavaScript, GraphQL, and cloud technologies. Based in Delhi, India.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  )
}
