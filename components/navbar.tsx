import { Disclosure, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import {Fragment, useState} from 'react'



const navigation = [
    { name: 'Home', href: '#' },
    { name: 'How It Works', href: '/blogs' },
    { name: 'Our Customers speak', href: '#' },
]

export default function Navbar() {
    const [open,setOpen] = useState<boolean>(false)
    return (
        <>
            <nav className='py-5 md:flex md:items-center md:justify-between'>
                 <div className="flex justify-between items-center">
                    <Link href='/' className=' text-2xl lg:text-5xl font-normal'>RigourPlus</Link>
                    <span onClick={() => setOpen(!open)} className='text-3xl block md:hidden'>
                    <i className={`${open ? "bi bi-x-lg" : 'bi bi-list'}`}></i>
                    </span>
                </div>
                <ul className={`z-10 md:z-auto bg-[#e7e1f2] md:bg-inherit md:flex md:items-center  absolute md:static py-4 md:py-0  w-full 
                left-0 right-0 md:w-auto transition-top-opacity ease-in-out duration-1000 ${open ? 'top-[90px] opacity-100' : '-top-[400px] opacity-0 md:opacity-100'}`}>
                    <li className=' mx-4 my-6 md:my-0'>
                        <Link href='/' className='text-base md:text-lg xl:text-3xl'>Home</Link>
                    </li>
                    <li className=' mx-4 my-6 md:my-0'>
                        <Link href='/blogs' className='text-base md:text-lg xl:text-3xl'>How It Works</Link>
                    </li>
                    <li className=' mx-4 my-6 md:my-0'>
                        <Link href='/' className='text-base md:text-lg  xl:text-3xl'>Our Customers speak</Link>
                    </li>
                    <Link href='/hy' className="button ml-4 md:ml-0">
                        Download
                        <div className='h-6 w-6 lg:h-9 lg:w-9 angle-right'>{'>'}</div>
                    </Link>
                </ul>
            </nav>
        </>
    )
}