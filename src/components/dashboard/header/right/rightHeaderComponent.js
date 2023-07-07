import { BiUser } from '@react-icons/all-files/bi/BiUser'
import {IoSettingsOutline} from '@react-icons/all-files/io5/IoSettingsOutline'
import { MdHelpOutline } from '@react-icons/all-files/md/MdHelpOutline'
import React from 'react'

export default function RightHeaderComponent() {
  return (
    <>
      <div className="hidden lg:flex lg:flex-1 gap-2 items-center lg:justify-end">
          <div className=''>
                <button className='p-2.5 rounded-full hover:bg-slate-100 hover:ease-in-out hover:duration-300'>
                    <MdHelpOutline className='text-2xl text-slate-600' />
                </button>
            </div>
          <div className=''>
              <button className='p-2.5 rounded-full hover:bg-slate-100 hover:rotate-45'>
                  <IoSettingsOutline className='text-2xl text-slate-600' />
              </button>
          </div>
          <div className=''>
              <button className='p-2.5 rounded-full bg-slate-200'>
                  <BiUser className='text-2xl text-slate-600' />
              </button>
          </div>
      </div>
    </>
  )
}
