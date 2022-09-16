import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'
import 'react-toastify/dist/ReactToastify.css'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'
import Script from 'next/script'
import { AuthContextProvider } from 'contexts/AuthContext'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <Script strategy="lazyOnload" id="tag-manager">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M6P67HL')
        `}
        </Script>
        {isDevelopment && isSocket && <ClientReload />}
        <Analytics />
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ThemeProvider>
    </AuthContextProvider>
  )
}
