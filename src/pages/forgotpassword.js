import { BiUser } from '@react-icons/all-files/bi/BiUser';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react'

export default function Forgotpassword() {

  const formRef     =  useRef(null);
  const router      =  useRouter();

  const signIn = () => {

    const formDetails   =   formRef.current;
    const username      =   formDetails.username.value;
    const password      =   formDetails.password.value;

    if(username === 'admin' && password === '1234'){
        router.push('/marketplace')
    }else{
        
        console.log('you have entered worng credential')
    }

  }

  return (
    <>
        <div className="h-screen md:flex justify-center items-center bg-login md:py-24">
            <div className="flex md:w-1/4 min-h-full flex-wrap rounded-2xl border-white border-2 shadow-lg justify-center py-10 items-center bg-slate-50">
                <form className="flex flex-col items-center justify-center" ref={formRef}>
                    <h1 className="text-gray-800 font-normal text-3xl mb-1">Forgot Password</h1>
                    <p className="text-sm font-normal text-center text-gray-600">Let's help you recovering to<br/>connecting with us</p>
                    <div className='flex my-4'>
                        <div className='p-2.5 rounded-full bg-gradient-to-r from-sky-600 to-indigo-500 border-4 border-white'>
                            <BiUser className='text-6xl text-white' />
                        </div>
                    </div>
                    
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                        </svg>
                        <input className="pl-2 outline-none border-none" type="text" name="username" id="" placeholder="Username/Email Address" />
                    </div>
                    
                    {/* <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fillRule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clipRule="evenodd" />
                        </svg>
                        <input className="pl-2 outline-none border-none" type="password" name="password" id="" placeholder="Password" />
                    </div> */}
                    <button type="button" onClick={() => signIn()} className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Recover Account</button>
                    <div className='flex flex-row justify-between items-start'>
                        <Link href='/login'>
                            <span className="text-sm ml-2 hover:text-blue-800 text-blue-500 cursor-pointer">Sign In</span>
                        </Link>
                        <Link href='/signup'>
                            <span className="text-sm ml-2 hover:text-blue-800 text-blue-500 cursor-pointer">Sign Up</span>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}
