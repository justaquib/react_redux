import Footer from '@/components/perdefined/footer'
import Header from '@/components/perdefined/header'
import React from 'react'

export default function InitLayout({children}) {
  return (
    <>
        <Header/>
            <main className={`min-h-full h-full flex flex-col justify-center items-center bg-slate-100`}>{children}</main>
        <Footer/>
    </>
  )
}
