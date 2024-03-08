import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import Header from '@/components/ui/Header'
import Footer, { type FooterProps } from '@/components/ui/Footer'
import classNames from 'classnames'
import { getTypographyClassNames } from '@/libs/typography'

export type LayoutProps = {
  ContainerProps?: React.HTMLProps<HTMLElement>
  FooterProps?: FooterProps
  hasOrderDetails?: boolean
  children?: React.ReactNode
}

const Layout = ({ ContainerProps, children, hasOrderDetails }: LayoutProps) => {

  return (
    <>
      <Header
      containerClass='m-auto w-full max-w-[1280px]'
      leftSideNode={
        <h1 className={classNames(getTypographyClassNames('h1'), 'text-white')} >Query Builder App</h1>
      }
      />
      <main className="bg-background" {...ContainerProps}>
        <div className="flex justify-center w-full">
          {children}
        </div>
      </main>
 
    </>
  )
}

export default Layout
