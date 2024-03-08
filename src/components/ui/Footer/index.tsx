import React, { useContext } from 'react'
import { Context as FooterContext } from '@/components/Context/FooterContext'
import classNames from 'classnames'

export type FooterProps = {
  controls?: React.ReactNode
}
const Footer = () => {
  const { controls, className } = useContext(FooterContext)

  return (
    <footer
      className={classNames('fixed bottom-0 flex justify-center items-center h-[65px] w-full bg-blue-dark', className)}
    >
      {controls && controls}
    </footer>
  )
}

export default Footer
