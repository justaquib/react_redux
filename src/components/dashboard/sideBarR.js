import React from 'react'

export default function SideBarR({setToggleRside,toggleRSide}) {
  return (
    <>
        <div className={`${toggleRSide ? '' : 'translate-x-full'} fixed top-0 inset-0 z-40 bg-gray-500 bg-opacity-75 w-full transition-transform duration-700`}></div>
            <div id="cart-drawer" className={`${toggleRSide ? '' : 'translate-x-full'} fixed top-0 right-0 z-40 w-full h-screen max-w-md p-4 overflow-y-auto transition-transform duration-700 ease-in-out bg-white dark:bg-gray-800`} aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full overflow-hidden">
                            <div className="pointer-events-auto w-screen max-w-md">
                                <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                                    <div className="flex-1 overflow-y-auto">
                                        <div className="flex items-start justify-between border-b py-4 px-4">
                                            <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Add Product</h2>
                                            <div className="ml-3 flex h-7 items-center">
                                                <button type="button" className="p-2 rounded-full text-gray-100 bg-gray-700" onClick={() => setToggleRside(false)}>
                                                    <span className="sr-only">Close panel</span>
                                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-2 gap-4 px-4 py-6 w-full'>
                                            <div className=''>
                                                <p className='mb-2'>Product Name</p>
                                                <input type="text" className='border-2 w-full text-sm border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500' placeholder='Fresh milk' />
                                            </div>
                                            <div className=''>
                                                <p className='mb-2'>Category</p>
                                                <input type="text" className='border-2 w-full text-sm border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500' placeholder='Milk' />
                                            </div>
                                            <div className=''>
                                                <p className='mb-2'>Brand</p>
                                                <input type="text" className='border-2 w-full text-sm border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500' placeholder='Fresh milk' />
                                            </div>
                                            <div className=''>
                                                <p className='mb-2'>Price</p>
                                                <input type="number" className='border-2 w-full text-sm border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500' placeholder='₹75' />
                                            </div>
                                            <div className='col-span-2'>
                                                <p className='mb-2'>Product category</p>
                                                <textarea rows="6" className='border-2 w-full text-sm border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500' placeholder='e.g. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam mollis nunc,'></textarea>
                                            </div>
                                            <div className='col-span-2'>
                                                <div className='flex flex-row'>

                                                </div>
                                            </div>
                                            <div className='col-span-2'>
                                                <div className="flex items-center justify-center w-full">
                                                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                        </div>
                                                        <input id="dropzone-file" type="file" className="hidden" />
                                                    </label>
                                                </div> 
                                            </div>
                                            <div className='col-span-2'>
                                                <button className='px-4 py-3 hover:bg-blue-700 bg-blue-600 text-white rounded-lg w-full'>Add product</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
