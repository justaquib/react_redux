import { Inter } from 'next/font/google'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementAsync, selectCount, checkStorage, setCount } from '../storage/counterSlice'
import { useEffect } from 'react'
import Image from 'next/image'
import InitLayout from '@/layout/initLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  useEffect(() => {
    // console.log('aaa')
    dispatch(checkStorage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <InitLayout>
        <h1 className="relative uppercase font-bold text-4xl">
          React & Redux Counter
        </h1>
        <h1 className='text-5xl my-4'>{count}</h1>
        <div>
          <div>
            <button
              className="mr-5 border-black border p-3"
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
            <button
              className="mr-5 border-black border p-3"
              aria-label="Increment value"
              onClick={() => dispatch(incrementAsync(1))}
            >
              Async
            </button>
            <button
              className="mr-5 border-black border p-3"
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
          </div>
          {

          <div className='mt-5 flex items-center justify-center'>
            <button
              className="bg-red-500 text-white border p-3 hover:bg-red-600"
              aria-label="Increment value"
              onClick={() => dispatch(setCount(0))}
              disabled={count === 0}
            >
              Reset
            </button>
          </div>
          }
        </div>
      </InitLayout>
    </>
  )
}
