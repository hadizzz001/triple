
import { Navbar2, Footer } from '@/components'
import './globals.css'
import './custom.css'
import './bootstrap.min.css'
import './bs-select.css'
import './slick.css'
import { useSearchParams } from 'next/navigation'
import ContextWrapper from './context/store';
 

 

export const metadata = {
  title: 'Triple Win Solutions',
  description: 'Discover the best insurance in the world',
  keywords: 'insurance, best insurance, affordable insurance, health insurance, life insurance, car insurance, home insurance, financial protection',
  icons: {
    icon: 'favicon.ico',
  },
  openGraph: {
    title: 'Triple Win Solutions',
    description: 'Discover the best insurance in the world',
    url: 'https://triplewin.solutions',
    type: 'website',
    image: 'favicon.ico',
  },
};


export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {


  return (
    <html lang='en'>  
      <body>
      <style
  dangerouslySetInnerHTML={{
    __html:
      "\n        button:focus{\n          outline:none !important\n        }\n        "
  }}
/>


        <ContextWrapper>
          <Navbar2 />
          {children}
          <Footer />
        </ContextWrapper>

      </body>
    </html>
  )
}
