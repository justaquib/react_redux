import { MdMenu } from '@react-icons/all-files/md/MdMenu'
import Image from 'next/image'
import React from 'react'

export default function LeftHeaderComponent(props) {
  const toggleLside     =   props.toggleLside;
  return (
    <>
        <div className="flex lg:flex-1 gap-2 items-center">
            <div className=''>
                <button className='p-2.5 rounded-full hover:bg-slate-100' onClick={() => toggleLside()}>
                    <MdMenu className='text-2xl text-slate-600' />
                </button>
            </div>
            <a href="/" className="-m-1.5 p-1.5 flex">
                <Image
                    src={process.env.NEXT_PUBLIC_APP_LOGO}
                    alt="BrandLogo"
                    className="rounded-xl h-8 w-auto"
                    width={100}
                    height={24}
                    priority
                />
                <span className="mt-1">inBottle</span>
            </a>
        </div>
    </>
  )
}
