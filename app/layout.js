import './globals.css'
import { Poppins, Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', })

const poppins = Poppins({ 
  subsets: ['latin'], 
  variable: '--font-poppins',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], 
})

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
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${space_grotesk.variable} ${inter.variable} `}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}