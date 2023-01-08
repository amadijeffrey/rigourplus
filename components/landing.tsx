import pictureOfDoctor from '../public/chibuke.png'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './navbar'


export default function Landing(){

    return (
        <div className="px-10 py-5 lg:px-40 lg:py-20  gradient">
            <Navbar />
            <div className='flex flex-col lg:flex-row'>
                <div  className='w-full lg:w-[50%]'>
                    <h1 className='text-3xl sm:text-5xl lg:text-8xl lg:pt-24 relative mt-14' >Creating magic<br />in the lives Of  <br /> others <span className='circles first'><i className="bi bi-thermometer-low"></i></span><span className='circles second'><i className="bi bi-heart-pulse"></i></span><span  className='circles third'>free support 24/7</span></h1>
                    <h1 className=' my-10 lg:my-20 text-xl lg:text-4xl'>We provide a health ecosystem from Telemedicine, Ambulance request and online medicine purchase</h1>  
                        <Link href='#' className='inline-block mr-3' >
                            <div className="flex bg-[#090f47] text-white p-2 rounded-xl items-center">
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

    