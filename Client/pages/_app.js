//Dependencies
import { QueryClientProvider, QueryClient } from 'react-query';
//Styles
import GlobalStyles from '@/configs/theme.js';
import '@/styles/globals.css';
//Context
import GlobalContextProvider from '@/context/GlobalContext'
//Components
import Layout from '@/components/common/Layout'
//Font
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient()

  return (
    <GlobalContextProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
          <main className={roboto.className}>
            <Layout >
              <Component {...pageProps} />
            </Layout>
          </main>
      </QueryClientProvider>
    </GlobalContextProvider>
  )
}
