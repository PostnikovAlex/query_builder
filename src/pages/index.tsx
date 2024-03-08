//@ts-nocheck
import React, { useContext, useEffect, useRef, useState } from 'react'
import Layout from '@/layouts/DefaultLayout'

import { NextPageWithLayout } from '@/pages/_app'



const Main: NextPageWithLayout = () => {

  return (
    <div className="max-w-[824px] mx-auto">

    </div>
  )
}

Main.getLayout = (page) => {
  return (
    <Layout
      ContainerProps={{
        className: 'px-4 py-3 min-w-[1280px] max-w-[1280px] mx-auto',
      }}
    >
      {page}
    </Layout>
  )
}

export default Main
