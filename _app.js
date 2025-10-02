import '@/styles/globals.css'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import AOS from 'aos'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])
  return <Component {...pageProps} />
}
