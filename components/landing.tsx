import pictureOfDoctor from '../public/picture2.png'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './navbar'


export default function Landing(){

    return (
        <>
        
        <div className="px-6 sm:px-10 py-5 lg:px-16 lg:py-10 xl:px-20 2xl:px-40 gradient">  
            <Navbar />  
            <div className='flex flex-col lg:flex-row'>
                <div  className='w-full lg:w-[50%]'>
                    <h1 className='text-2xl sm:text-5xl lg:text-5xl lg:pt-20  2xl:text-8xl relative mt-14 font-semibold sm:leading-tight md:leading-tight lg:leading-tight 2xl:leading-tight' >Creating magic<br />in the lives of  <br /> others <span className='circles first'><i className="bi bi-thermometer-low"></i></span><span className='circles second'><i className="bi bi-heart-pulse"></i></span><span  className='circles third'>FREE SUPPORT 24/7</span></h1>
                    <h1 className=' my-10 lg:my-20 text-xl lg:text-2xl 2xl:text-3xl text-slate-600'>We provide a health ecosystem from Telemedicine, Ambulance request and online medicine purchase</h1>  
                        <Link href='#' className='inline-block mr-3' >
                            <div className="flex bg-[#090f47] text-white p-2 rounded-xl items-center mb-3">
                               <i className="bi bi-google-play text-3xl mr-2"></i>
                               <p>Get it on <br/> google play</p>
                            </div>
                        </Link> 
                        <Link href='/hhj' className='inline-block' >
                            <div className="flex bg-[#090f47] text-white p-2 rounded-xl items-center">
                               <i className="bi bi-apple text-3xl mr-2"></i>
                               <p>Get it on <br/> app store</p>
                            </div>
                        </Link>    
                </div>
                <div className='half-first-section' >
                  <Image src={pictureOfDoctor} alt='picture of doctor' className='doctor-potrait' priority={true}/>
                       <div className='contact'>
                            <div className='call'><i className="bi bi-telephone-fill"></i></div>
                            <div>
                                <h3 className='text-sm  sm:text-base md:text-lg xl:text-lg font-bold text-[#6b5dd3]'>24 hour service</h3>
                                <h2 className='text-sm  sm:text-base md:text-xl xl:text-3xl font-normal'>+2347045782090</h2>
                            </div>
                        </div>
                </div>
            </div>
            <div className='flex justify-between my-28 xl:my-52'>
                    <h1 className='text-xl sm:text-3xl md:text-2xl lg:text-4xl 2xl:text-5xl lg:leading-tight w-6/12'>Serving your health need<br />is our priority</h1>
                   <h2 className='text-sm lg:text-2xl 2xl:text-3xl w-5/12 text-slate-600' >We provide a health-ecosystem from Telemedicine, Ambulance request and online medicine purchase</h2>
                </div>
        </div>
        </>
    )
} 

    