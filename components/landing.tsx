import pictureOfDoctor from '../public/chibuke.png'
import Image from 'next/image'
import { Fragment } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Home', href: '#' },
    { name: 'How It Works', href: '#' },
    { name: 'Our Customers speak', href: '#' },
  ]

export default function Landing(){
    return (
        <div className="px-10 py-5 lg:px-40 lg:py-20  gradient">
           
            <Disclosure as="nav" >
            {({ open }) => (
                <>
                <div className='mb-5lg:mb-0 '>
                    <div className="relative flex  items-center justify-between">
                    <div className=" inset-y-0 left-0 flex items-center md:hidden">
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
                            <a
                                key={item.name}
                                href={item.href}
                                className='text-lg lg:text-3xl'
                            >
                                {item.name}
                            </a>
                            ))}
                        </div>
                        </div>
                    <a href='/' className="button">
                            Download
                            <div className='h-9 w-9 angle-right'>{'>'}</div>
                        </a>
                    </div>
                </div>
                {/* <Transition
                    as={Fragment}
                    enter="transition ease-out duration-1000"
                    enterFrom="transform translate-y-0"
                    enterTo="transform translate-y-5"
                    leave="transition ease-in duration-900"
                    leaveFrom="transform translate-y-3"
                    leaveTo="transform translate-y-0"
                  > */}
                    <Disclosure.Panel className="md:hidden">
                        <div className="fixed z-40 right-0 left-0 top-20 h-40 p-6 bg-[#e7e1f2] space-y-1  flex flex-col">
                        {navigation.map((item) => (
                            <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className='text-xl'
                            >
                            {item.name}
                            </Disclosure.Button>
                        ))}
                        </div>
                    </Disclosure.Panel>
                {/* </Transition> */}
                </>
            )}
            </Disclosure>
            <div className='flex flex-col lg:flex-row'>
                <div  className='w-full lg:w-[50%]'>
                    <h1 className='text-3xl sm:text-5xl lg:text-8xl lg:pt-24 relative mt-14' >Creating magic<br />in the lives Of  <br /> others <span className='circles first'><i className="bi bi-thermometer-low"></i></span><span className='circles second'><i className="bi bi-heart-pulse"></i></span><span  className='circles third'>free support 24/7</span></h1>
                    <h1 className=' my-10 lg:my-20 text-xl lg:text-4xl'>We provide a health ecosystem from Telemedicine, Ambulance request and online medicine purchase</h1>  
                        <a href='#' className='inline-block mr-3' >
                            <div className="flex bg-[#090f47] text-white p-2 rounded-xl items-center">
                               <i className="bi bi-google-play text-3xl mr-2"></i>
                               <p>Get it on <br/> google play</p>
                            </div>
                        </a> 
                        <a href='#' className='inline-block' >
                            <div className="flex bg-[#090f47] text-white p-2 rounded-xl items-center">
                               <i className="bi bi-apple text-3xl mr-2"></i>
                               <p>Get it on <br/> app store</p>
                            </div>
                        </a>    
                </div>
                <div className='half-first-section' >
                  <Image src={pictureOfDoctor} alt='picture of doctor' className='doctor-potrait'/>
                       <div className='contact'>
                            <div className='call'><i className="bi bi-telephone-fill"></i></div>
                            <div>
                                <h3 className='text-sm lg:text-lg font-bold text-[#6b5dd3]'>24 hour service</h3>
                                <h2 className='lg:text-3xl font-bold'>2347045782090</h2>
                            </div>
                        </div>
                </div>
            </div>
            <div className='flex justify-between my-28 lg:my-52'>
                    <h1 className='text-3xl lg:text-6xl w-6/12'>Serving your health need<br />is our priority</h1>
                   <h2 className='lg:text-3xl w-5/12'>We provide a health-ecosystem from Telemedicine, Ambulance request and online medicine purchase</h2>
                </div>
        </div>
    )
} 

    