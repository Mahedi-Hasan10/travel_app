import Footer from './footer/Footer'
import './globals.css'
import Navbar from './navbar/Navbar'




export const metadata = {
  title: 'Travel',
  description: 'Travel UI/UX for Camping',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
         <main className="relative overflow-hidden">
            {children}
          </main>
         <Footer/>
      </body>
    </html>
  )
}
