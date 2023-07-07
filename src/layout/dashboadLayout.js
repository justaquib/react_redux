import DashHeader from '@/components/dashboard/header/dashheader'
import React, { useState } from 'react'
import Sidebar from '@/components/dashboard/sidebar';

export default function DashboadLayout({children}) {
    const [toggleLside,setToggleLside] = useState(true);

    const getLeftCallBack = () => {
        if(toggleLside === false){
            setToggleLside(true)
            // console.log("true")
        }
        else{
            setToggleLside(false)
            // console.log("false")
        }
      }
    
  return (
    <>
        {/**  Need to find a way without overflow **/}
        <main className={`h-full min-h-screen overflow-hidden max-h-screen bg-slate-100`}>
            <DashHeader toggleLside={getLeftCallBack} />
            <div className='flex flex-row w-full h-full justify-start items-start'>
                <Sidebar toggleLside={toggleLside} />
                <div className={`flex flex-col relative overflow-y-auto pb-20 ${toggleLside ? 'w-5/6' : 'w-full'} bg-gray-50 h-full p-4`}>
                    {children}
                    <footer className="bg-white dark:bg-gray-800 shadow rounded-xl mt-4 w-full">
                        <div className="w-full mx-auto p-6 flex items-center justify-between">
                            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                                © 2023 <a href="/" className="hover:underline">{process.env.NEXT_PUBLIC_APP_NAME}™</a>. All Rights Reserved.
                            </span>
                            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                                <li>
                                    <a href="/about" className="mr-4 hover:underline md:mr-6 ">About</a>
                                </li>
                                <li>
                                    <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
                                </li>
                                <li>
                                    <a href="/contact" className="hover:underline">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </div>
        </main>
    </>
  )
}
