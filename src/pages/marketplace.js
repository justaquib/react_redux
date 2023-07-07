import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add, remove, quantityManage } from '../storage/cartSlice'
import { productFetch } from '../storage/productSlice'
import ProductImageCrousel from '../components/productImageCrousel'
import { useEffect } from 'react'
import Image from 'next/image'
import find from 'lodash/find'
import DashboadLayout from '@/layout/dashboadLayout';
import {IoAdd} from '@react-icons/all-files/io5/IoAdd';
import {MdEdit} from '@react-icons/all-files/md/MdEdit';
import SideBarR from '@/components/dashboard/sideBarR';
import {MdSettings} from '@react-icons/all-files/md/MdSettings';
import {IoTrash} from '@react-icons/all-files/io5/IoTrash';
import {IoMdMore} from '@react-icons/all-files/io/IoMdMore';
import {MdInfo} from '@react-icons/all-files/md/MdInfo';
import{IoMdAdd} from '@react-icons/all-files/io/IoMdAdd';

export default function Marketplace() {
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
                    <h1 className='font-semibold text-2xl text-gray-800'>All Products</h1>
                </div>
                <div className='flex flex-row justify-between mb-6'>
                    <div className='flex flex-row space-x-4 justify-center items-center'>
                        <div className=''>
                            <input type='text' className='border-2 w-96 text-sm border-gray-300 rounded-lg px-4 py-2.5 focus:ring-blue-500 focus:border-blue-500' placeholder='Search product...' />
                        </div>
                        <div>
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
                    <div className='d-flex flex-col'>
                        <button onClick={() => setToggleRside(true)} className='bg-blue-600 py-1.5 px-4 text-base text-white flex flex-row justify-center items-center rounded hover:bg-blue-700 hover:text-white'>
                            <IoMdAdd className='me-1' />
                            Add product
                        </button>
                    </div>
                </div>
            </div>
            <SideBarR setToggleRside={setToggleRside} toggleRSide={toggleRSide} />
            {/* <div className={`absolute z-50 top-0 right-0 h-screen transition duration-500 ease-in-out  ${toggleRSide ? 'w-1/3' : 'w-0'} bg-white`}>
                <div className='relative'>
                    <div>
                        <button onClick={handleToggle} className='p-2 top-2 left-2 absolute rounded-full border border-black hover:bg-black hover:text-white'>
                            <MdClose />
                        </button>
                    </div>
                </div>
            </div> */}
            <div className='grid grid-cols-6 gap-4 w-full'>   
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
                    <div key={key} className="w-full m-2 max-w-sm bg-white rounded-lg shadow dark:bg-gray-800">
                        {
                            p.productImage.length > 0 ?
                            <ProductImageCrousel imgA={p.productImage} />
                            :
                            <Image
                                className="p-8 rounded-t-lg"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqR6Ap_L-a5EsSeDCIPggUn1Tz-j0jI2tBvKITwqMfRv5tZuzCs3tT-QXnwgzz4h6Iq_k&usqp=CAU"
                                alt="product image"
                                width={400}
                                height={400}
                                priority
                            />
                        }
                        <div className="px-4 pb-5 mt-2">
                            <a href="#">
                            <h5 className="text-base font-semibold tracking-tight text-slate-600 dark:text-white">{p.productName}</h5>
                            <p className='text-slate-400 text-sm font-bold'>{p.weight}{p.weightSymbol}</p>
                            </a>
                            {/* <div className="flex items-center mt-2.5 mb-5">
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                            </div> */}
                            <div className="flex items-center justify-between">
                            <span className="text-base font-bold text-slate-600 dark:text-white">₹<del className="text-red-600 font-bold">{p.costPrice}</del> {p.sellPrice}</span>
                            {
                                find(cart, ['id', p.id]) ?
                                <div className="flex items-center border-gray-100">
                                    <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => { find(cart, ['id', p.id]).quantity === 1 ? dispatch(remove(p.id)) : dispatch(quantityManage({ id: p.id, quantity: find(cart, ['id', p.id]).quantity - 1 })) }}> - </span>
                                    <span className='bg-slate-50 text-center text-xs outline-none py-2 px-3'>{find(cart, ['id', p.id]).quantity}</span>
                                    <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => dispatch(quantityManage({ id: p.id, quantity: find(cart, ['id', p.id]).quantity + 1 }))}> + </span>
                                </div>
                                :
                                <button onClick={() => { dispatch(add(p)) }} className="text-white bg-blue-700 flex flex-row justify-center items-center hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                                    <MdEdit className='me-1' />
                                    Edit
                                </button>
                            }
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        </DashboadLayout>
    </>
  )
}
