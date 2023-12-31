import './globals.css'
import {  Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LowerSection from './components/LowerSection'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', })

// const poppins = Poppins({ 
//   subsets: ['latin'], 
//   variable: '--font-poppins',
//   display: 'swap',
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], 
// })

const space_grotesk = localFont({
  variable: '--font-space-grotesk',
  src: [
    {
      path: './fonts/SpaceGrotesk-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/SpaceGrotesk-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/SpaceGrotesk-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/SpaceGrotesk-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
})

export const metadata = {
  title: 'Quil - Work Life Balance',
  description: 'Your mental health is important. Make it a priority. You matter too!',
  keywords: ["Work", "balance", "mental health"],
  icons: {
    icon: [
      '/favicon.ico?v=4',
    ],
    apple: [
      '/apple-touch-icon.png?v=4',
    ],
    shortcut: [
      '/apple-touch-icon.png?v=4',
    ],
  },
  manifest: '/site.webmanifest'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${space_grotesk.variable} ${inter.variable} `}>
        <Navbar/>
        {children}
        <LowerSection/>
        <Footer/>
      </body>
    </html>
  )
}
