import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/clear.css';
import '../styles/common.css';
import '../styles/carouFredSel.css'
import '../styles/sm-clean.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
