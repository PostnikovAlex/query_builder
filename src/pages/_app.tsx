import { ReactElement, ReactNode, Suspense } from 'react'
import { type AppProps } from 'next/app'
import type { NextPage } from 'next'
import classNames from 'classnames'

import store from '@/store/store';
import { Provider } from 'react-redux';

import { Inter } from 'next/font/google'
import '../styles/globals.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font' })

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
      <div className={classNames(inter.variable, 'h-full')}>
        {getLayout(
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
          )}
      </div>
  )
}
