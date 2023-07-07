import { Inter } from 'next/font/google'
import Footer from '../components/perdefined/footer'
import Header from '../components/header'
import { useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Redux() {

const [data,setData] = useState({});
const [userData,setUserData] = useState([]);

const onChangeData = (e) => {
  setData({
    ...data,
    [e.target.name] : e.target.value
  })
}

const submitData = (e) => {
  e.preventDefault();
  setUserData(current => [...current,data]);
}

const deleteUserData = (key) =>{
  let deleteData = [...userData];
  deleteData.splice(key,1)
  setUserData(deleteData);
}

console.log(userData)
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {/* <Header /> */}

      <div className='w-full max-w-xl mx-auto'>
        <form className='w-full flex flex-col gap-4'>
          <input type="text" name="name" onChange={onChangeData} placeholder='Enter your name' id='name' className='border border-2 border-gray-400 rounded-lg p-4' />
          <input type='tel' name="ph" onChange={onChangeData} placeholder="Enter your phone number" id="ph" className='border border-2 border-gray-400 rounded-lg p-4' />
          <textarea name="addr" onChange={onChangeData} placeholder='Enter your address' id="addr" className='border border-2 border-gray-400 rounded-lg p-4'></textarea>
          <button type='button' onClick={submitData} className='p-4 rounded-lg bg-yellow-400 font-bold hover:bg-yellow-500'>Submit</button>
        </form>
      </div>
      {
        userData.length >= 1 && 
        <div className='w-full max-w-xl mx-auto mt-8'>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Phone No.
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Address
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                      userData.map((data,key) => (
                          <tr key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {data.name}
                            </th>
                            <td className="px-6 py-4">
                                {data.ph}
                            </td>
                            <td className="px-6 py-4">
                                {data.addr}
                            </td>
                            <td className="px-6 py-4">
                                <button type='button' onClick={() => deleteUserData(key)} className="font-medium text-red-600 dark:text-red-500 bg-white py-2 px-4 rounded-md hover:bg-red-500 hover:text-white">Delete</button>
                            </td>
                        </tr>
                      ))
                    }
                </tbody>
            </table>
        </div>
      </div>
      }

      {/* <Footer /> */}

    </main>
  )
}
