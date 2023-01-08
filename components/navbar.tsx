import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'


const navigation = [
    { name: 'Home', href: '#' },
    { name: 'How It Works', href: '/df' },
    { name: 'Our Customers speak', href: '#' },
  ]
  
export default function Navbar(){
    return (
        <Disclosure as="nav" >
            {({ open }) => (
                <>
                    <div className='mb-5lg:mb-0 '>
                        <div className="relative flex  items-center justify-between">
                        <div className="inset-y-0 left-0 flex items-center md:hidden">
                            {/* Mobile menu button*/}
                            <Disclosure.Button className="flex items-center justify-center rounded-md p-2 text-gray-400 border-solid border-2 border-[#6b5dd3]  focus:outline-none ">
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                            )}
                            </Disclosure.Button>
                        </div>
                        <div className="flex items-center justify-center ">
                            <a href='/' className=' text-2xl lg:text-5xl'>RigourPlus</a>
                        </div>
                        <div className="basis-6/12 grow hidden md:block lg:grow-0">
                            <div className="flex justify-around  ">
                                {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className='text-lg lg:text-3xl'
                                >
                                    {item.name}
                                </Link>
                                ))}
                            </div>
                            </div>
                        <Link href='/hy' className="button">
                                Download
                                <div className='h-9 w-9 angle-right'>{'>'}</div>
                            </Link>
                        </div>
                    </div>
                    <Disclosure.Panel className="md:hidden">
                        <div className="fixed z-40 right-0 left-0 top-20 h-52 p-6 bg-[#e7e1f2] space-y-1  flex flex-col">
                            {navigation.map((item) => (
                                <Link
                                key={item.name}
                                href={item.href}
                                className='text-xl'
                                >
                                {item.name}
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                    
                </>
            )}
            </Disclosure>
    )
}