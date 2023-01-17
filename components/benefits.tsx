import docpicture from '../public/picture5.jpg'
import Image from 'next/image'
import docprofile from '../public/doc.jpg';
import Link from 'next/link';


export default function Benefits(){
    return (
        <div className="px-6 sm:px-10 lg:px-16 flex lg:pl-0 xl:pl-0 xl:px-20 2xl:px-20 flex-col lg:flex-row ">
            <div className=" w-full lg:w-6/12 relative mb-8">
              <Image src={docpicture} alt='doctor consulting online' className='image'/>
                <div className='appointment left-0 -bottom-44 sm:left-10 lg:-bottom-36 xl:-bottom-52 2xl:left-1/4'>
                        <Image src={docprofile} alt='doctor profile' className='docprofile'/>
                            <h1 className='text-xl lg:text-2xl xl:text-3xl'>Dr. Benita</h1>
                            <h2 className='text-sm lg:text-base xl:text-xl text-[#6b5dd3]'>Inhouse medical doc</h2>
                        <Link href='/' className='button text-sm'>Make appointment</Link>
                </div>
                <div className='emergency -right-4 -bottom-10 sm:right-0  sm:top-1/4 lg:top-2/4 xl:top-2/4 xl:right-0 2xl:right-12 2xl:top-1/3'>
                        <h1 className='text-xl lg:text-2xl'>Emergency</h1> 
                        <Link href='/ds' className='button text-sm'>Consultation <i className="bi bi-arrow-right ml-1"></i></Link>
                        <h2 className='text-xl lg:text-2xl'>Queue</h2>
                </div>
            </div>
            <div  className=" w-full lg:w-6/12 lg:pl-10">
                <h1 className="text-2xl sm:text-2xl font-bold mt-44 sm:mt-52 lg:mt-0 lg:text-4xl 2xl:text-6xl mb-7">The Advantages of <br />Using Rigour+ <hr  className='bg-[#6b5dd3] h-1 w-4/12 inline-block align-middle' /></h1>
                <div className="advantages">
                    <span><i className='bi bi-journals'></i></span>
                    <div>
                        <h1 className='text-xl sm:text-2xl lg:text-2xl 2xl:text-3xl'>Access to medical information</h1>
                        <h2 className='text-lg lg:text-lg 2xl:text-2xl'>Rigour+ gives you access to a wide array of top content across various medical professionals across various niche</h2>
                    </div>
                </div>
                <div className="advantages">
                    <span><i className="bi bi-capsule-pill"></i></span>
                    <div>
                        <h1 className='text-xl sm:text-2xl lg:text-2xl 2xl:text-3xl'>Ease of medication purchase</h1>
                        <h2 className='text-lg lg:text-lg 2xl:text-2xl'>With Rigour+, from the comfort of your home, you can sit and request medications, and have them delivered to your home</h2>
                    </div>
                </div>
                <div className="advantages">
                    <span><i className="bi bi-hospital-fill"></i></span>
                    <div>
                        <h1 className='text-xl sm:text-2xl lg:text-2xl 2xl:text-3xl'>Premium healthcare just got more accessible</h1>
                    </div>
                </div>
            </div>
        </div>
    )
} 

