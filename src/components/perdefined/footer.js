import Link from 'next/link'
import BsArrowRight from '@react-icons/all-files/bs/BsArrowRight';

export default function Footer() {
    return (
        <>
            <footer className="bg-white dark:bg-gray-800">
                <div className="w-full mx-auto max-w-screen-xl p-6 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2023 <Link href="/" className="hover:underline">{process.env.NEXT_PUBLIC_APP_NAME}™</Link>. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <Link href="/about" className="mr-4 hover:underline md:mr-6 ">About</Link>
                        </li>
                        <li>
                            <Link href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="#" className="mr-4 hover:underline md:mr-6">Licensing</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}