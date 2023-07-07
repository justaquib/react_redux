import React, { useState } from 'react'
import { FaSitemap } from '@react-icons/all-files/fa/FaSitemap';
import { FiShoppingCart } from '@react-icons/all-files/fi/FiShoppingCart';
import {FiBox} from '@react-icons/all-files/fi/FiBox';
import {FiUsers} from '@react-icons/all-files/fi/FiUsers';
import {MdBugReport} from '@react-icons/all-files/md/MdBugReport';
import {BiMessageSquareDots} from '@react-icons/all-files/bi/BiMessageSquareDots';
import {BsCreditCard} from '@react-icons/all-files/bs/BsCreditCard';
import {BsClipboardData} from '@react-icons/all-files/bs/BsClipboardData';
import {VscSignOut} from '@react-icons/all-files/vsc/VscSignOut';
import {IoBriefcaseOutline} from '@react-icons/all-files/io5/IoBriefcaseOutline';
import {VscLock} from '@react-icons/all-files/vsc/VscLock';
import {RiAdminLine} from '@react-icons/all-files/ri/RiAdminLine';
import {HiArrowCircleUp} from '@react-icons/all-files/hi/HiArrowCircleUp';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Sidebar(props) {

  const toggleLside = props.toggleLside;
  const [upgrade,setUpgrade]    =   useState(true);
  const [active, setActive] = useState(null);

  const router      =   useRouter();
  
  const navLinks    =   [
    {'name':'Dashboard','path':'marketplace','icon':<BsClipboardData className="text-2xl text-slate-600" />},
    {'name':'Products','path':'products','icon':<FiBox className="text-2xl text-slate-600"/>},
    {'name':'Orders','path':'orders','icon':<FiShoppingCart className="text-2xl text-slate-600" />},
    {'name':'Users','path':'users','icon':<FiUsers className="text-2xl text-slate-600" />},
    {'name':'Payments','path':'payments','icon':<BsCreditCard className="text-2xl text-slate-600" />},
    {'name':'Messages','path':'chat','icon':<BiMessageSquareDots className="text-2xl text-slate-600" />},
    {'name':'Sellers','path':'sellers','icon':<IoBriefcaseOutline className="text-2xl text-slate-600"/>},
    
  ]

  return (
    <>
      <div className={`flex flex-row justify-start overflow-y-auto p-2 pb-16 lg:px-4 ${toggleLside ? 'w-1/6' : 'w-[80px]'} bg-white h-full`}>
          <div className='flex flex-col justify-between w-full'>
              <div className='flex flex-col'>
                  {
                    navLinks.map((link,index) => 
                    <a key={index} href={link.path} onClick={(e) => [setActive(index)]} className={`flex flex-row gap-2 justify-start items-center group hover:bg-slate-200 rounded-3xl cursor-pointer ${active === index && "bg-slate-300"}`}>
                        <div className=''>
                            <button className='p-2.5 rounded-full group-hover:bg-slate-100'>
                                {link.icon}
                            </button>
                        </div>
                        <div className={`${toggleLside ? 'block' : 'hidden'}`}>
                            <h1 className={` ${active === index ? 'text-slate-800' : 'text-slate-600'} font-medium text-base `}>{link.name}</h1>
                        </div>
                    </a>
                    )
                  }
              </div>
              {
                upgrade && toggleLside ?
                <div  className='flex flex-col py-4'>
                  <div id="upgradePlanCardSm" className='w-full flex flex-col justify-center items-center p-2 cursor-pointer hover:bg-emerald-700 shadow rounded-xl min-h-[200px]'>
                    <VscLock className='text-3xl text-slate-100' />
                    <h1 className='text-xl font-bold text-slate-100'>Upgrade Plan</h1>
                  </div>
                </div>
                :
                <div  className='flex flex-col py-4'>
                  <div id="upgradePlanCardSm" className='w-full flex flex-col justify-center items-center p-2 cursor-pointer hover:bg-emerald-700 shadow rounded-xl min-h-[20px]'>
                    <VscLock className='text-2xl text-slate-100' />
                  </div>
                </div>
              }
              <div className='flex flex-col py-4'>
                  <div className='flex flex-row gap-2 justify-start items-center group hover:bg-slate-200 rounded-3xl cursor-pointer'>
                      <div className=''>
                          <button className='p-2.5 rounded-full group-hover:bg-slate-100'>
                              <RiAdminLine className='text-2xl text-slate-600' />
                          </button>
                      </div>
                      <div className={`${toggleLside ? 'block' : 'hidden'}`}>
                          <h1 className='text-slate-600 font-medium text-base'>User Role</h1>
                      </div>
                  </div>
                  <div className='flex flex-row gap-2 justify-start items-center group hover:bg-slate-200 rounded-3xl cursor-pointer'>
                      <div className=''>
                          <button className='p-2.5 rounded-full group-hover:bg-slate-100 group-hover:-translate-y-6 group-hover:origin-top-left group-hover:-rotate-45 group-hover:ease-in-out group-hover:duration-300'>
                              <MdBugReport className='text-2xl text-slate-600' />
                          </button>
                      </div>
                      <div className={`${toggleLside ? 'block' : 'hidden'}`}>
                          <h1 className='text-slate-600 font-medium text-base'>Bugs</h1>
                      </div>
                  </div>
                  <div className='flex flex-row gap-2 justify-start items-center group hover:bg-slate-200 rounded-3xl cursor-pointer'>
                      <div className=''>
                          <button className='p-2.5 rounded-full group-hover:bg-slate-100'>
                              <FaSitemap className='text-2xl text-slate-600' />
                          </button>
                      </div>
                      <div className={`${toggleLside ? 'block' : 'hidden'}`}>
                          <h1 className='text-slate-600 font-medium text-base'>Sitemap</h1>
                      </div>
                  </div>
                  <div className='flex flex-row gap-2 justify-start items-center group hover:bg-slate-200 rounded-3xl cursor-pointer'>
                      <div className=''>
                          <button className='p-2.5 rounded-full group-hover:bg-slate-100'>
                              <VscSignOut className='text-2xl text-red-600' />
                          </button>
                      </div>
                      <div className={`${toggleLside ? 'block' : 'hidden'}`}>
                          <Link href='/login'>
                                <h1 className='text-slate-600 font-medium text-base'>Logout</h1>
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}
