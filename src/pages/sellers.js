import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add, remove, quantityManage } from '../storage/cartSlice'
import { productFetch } from '../storage/productSlice'
import ProductImageCrousel from '../components/productImageCrousel'
import { useEffect } from 'react'
import Image from 'next/image'
import find from 'lodash/find'
import DashboadLayout from '@/layout/dashboadLayout';
import {MdEdit} from '@react-icons/all-files/md/MdEdit';
import SideBarR from '@/components/dashboard/sideBarR';
import {MdSettings} from '@react-icons/all-files/md/MdSettings';
import {IoTrash} from '@react-icons/all-files/io5/IoTrash';
import {IoMdMore} from '@react-icons/all-files/io/IoMdMore';
import {MdInfo} from '@react-icons/all-files/md/MdInfo';
import{MdAddCircle} from '@react-icons/all-files/md/MdAddCircle';

export default function Sellers() {
    const cart = useSelector((state) => state.cart.cart)
    const products = useSelector((state) => state.product.value)
    const dispatch = useDispatch()
    const [toggleRSide,setToggleRside] = useState(false);

    useEffect(() => {
      // console.log('aaa')
      dispatch(productFetch());
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
  return (
    <>
        <DashboadLayout>
            <div className='flex flex-col justify-between'>
                <div className='grow mb-4'>
                    <h1 className='font-semibold text-2xl text-gray-800'>Sellers</h1>
                </div>
            </div>
            <SideBarR setToggleRside={setToggleRside} toggleRSide={toggleRSide} />
            <div className='grid grid-row gap-4 w-full'>   
                <div className="relative">
                    <div className="flex items-center justify-between pb-4">
                        <div className='flex flex-row gap-2'>
                            <div>
                                <label htmlFor="table-search" className="sr-only">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                    </div>
                                    <input type="text" id="table-search" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for seller"/>
                                </div>
                            </div>
                            <div>
                                <button onClick={() => setToggleRside(true)} className='p-2.5 hover:bg-gray-200 text-gray-500 text-2xl hover:shadow rounded-full'>
                                    <MdAddCircle />
                                </button>
                                <button className='p-2.5 hover:bg-gray-200 text-gray-500 text-2xl hover:shadow rounded-full'>
                                    <MdSettings />
                                </button>
                                <button className='p-2.5 hover:bg-gray-200 text-gray-500 text-2xl hover:shadow rounded-full'>
                                    <IoTrash />
                                </button>
                                <button className='p-2.5 hover:bg-gray-200 text-gray-500 text-2xl hover:shadow rounded-full'>
                                    <MdInfo />
                                </button>
                                <button className='p-2.5 hover:bg-gray-200 text-gray-500 text-2xl hover:shadow rounded-full'>
                                    <IoMdMore />
                                </button>
                            </div>
                        </div>
                        
                        <div>
                            <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                <svg className="w-4 h-4 mr-2 text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path></svg>
                                Last 30 days
                                <svg className="w-3 h-3 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            {/* <!-- Dropdown menu --> */}
                            <div id="dropdownRadio" className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" style={{position:'absolute',inset: 'auto auto 0px 0px', 'margin': '0px', 'transform': 'translate3d(522.5px, 3847.5px, 0px)'}}>
                                <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
                                    <li>
                                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                            <input id="filter-radio-example-1" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="filter-radio-example-1" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last day</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                            <input id="filter-radio-example-2" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="filter-radio-example-2" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 7 days</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                            <input id="filter-radio-example-3" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="filter-radio-example-3" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 30 days</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                            <input id="filter-radio-example-4" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="filter-radio-example-4" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last month</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                            <input id="filter-radio-example-5" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="filter-radio-example-5" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last year</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="p-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Seller name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Flavour
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Accesories
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Available
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Weight
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                products === '' ?
                                [...Array(10)].map((o, i) => (
                                <>
                                    <div key={i}  role="status" className="max-w-sm mr-2 border bg-white border-gray-200 rounded-xl shadow animate-pulse md:p-6 dark:border-gray-700">
                                        <div className="flex items-center justify-center w-full h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                                            <svg className="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                                        </div>
                                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                        <button className="text-white justify-center items-center bg-gray-200 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3 text-center dark:bg-gray-200 dark:hover:bg-gray-200 dark:focus:ring-gray-200" >
                                            <div className="h-2.5 bg-gray-100 rounded-full dark:bg-gray-700 w-24"></div>
                                        </button>
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </>
                                ))
                                :
                                products.length === 0 ?
                                <div className='col-span-full h-96 flex flex-col justify-center items-center'>
                                    <h1 className='font-bold text-gray-900'>No Products Found!</h1>
                                </div>
                                :
                                products.map((p, key) => (
                                <tr key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {p.productName}
                                    </th>
                                    <td className="px-6 py-4">
                                        Silver
                                    </td>
                                    <td className="px-6 py-4">
                                        Laptop
                                    </td>
                                    <td className="px-6 py-4">
                                        Yes
                                    </td>
                                    <td className="px-6 py-4">
                                        Yes
                                    </td>
                                    <td className="px-6 py-4">
                                        ₹{p.costPrice}
                                    </td>
                                    <td className="px-6 py-4">
                                        {p.weight}{p.weightSymbol}
                                    </td>
                                    <td className="flex items-center px-6 py-4 space-x-3">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                                    </td>
                                </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </DashboadLayout>
    </>
  )
}
