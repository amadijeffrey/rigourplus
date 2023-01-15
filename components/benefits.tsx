import picture2 from '../public/picture2.jpg'
import Image from 'next/image'
import docprofile from '../public/docprofile.jpg';
import Link from 'next/link';


export default function Benefits(){
    return (
        <div className="px-6 sm:px-10 lg:px-40 flex lg:pl-0 flex-col lg:flex-row max-h-">
            <div className=" w-full max-w-full lg:w-6/12 relative mb-8">
              <Image src={picture2} alt='doctor consulting online' className='image'/>
                <div className='appointment'>
                        <Image src={docprofile} alt='doctor profile' className='docprofile'/>
                            <h1 className='text-xl lg:text-3xl'>Dr. Benita</h1>
                            <h2 className='text-sm lg:text-xl text-[#6b5dd3]'>Inhouse medical doc</h2>
                        <Link href='/4' className='button'>Make appointment</Link>
                </div>
                <div className='emergency'>
                        <h1 className='text-xl lg:text-2xl'>Emergency</h1>  
                        <Link href='/ds' className='button text-sm'>Consultation <i className="bi bi-arrow-right ml-1"></i></Link>
                        <h2 className='text-xl lg:text-2xl'>Queue</h2>
                </div>
            </div>
            <div  className=" w-full lg:w-6/12 lg:pl-10">
                <h1 className="text-2xl sm:text-2xl font-bold mt-44 sm:mt-52 lg:mt-0 lg:text-6xl mb-7">The Advantages of <br />Using Rigour+ <hr  className='bg-[#6b5dd3] h-1 w-4/12 inline-block align-middle' /></h1>
                <div className="advantages">
                    <span><i className='bi bi-journals'></i></span>
                    <div>
                        <h1 className='text-xl sm:text:2xl lg:text-3xl'>Access to medical information</h1>
                        <h2 >Rigour+ gives you access to a wide array of top content across various medical professionals across various niche</h2>
                    </div>
                </div>
                <div className="advantages">
                    <span><i className="bi bi-capsule-pill"></i></span>
                    <div>
                        <h1 className='text-xl sm:text:2xl lg:text-3xl'>Ease of medication purchase</h1>
                        <h2>With Rigour+, from the comfort of your home, you can sit and request medications, and have them delivered to your home</h2>
                    </div>
                </div>
                <div className="advantages">
                    <span><i className="bi bi-hospital-fill"></i></span>
                    <div>
                        <h1 className='text-xl sm:text:2xl lg:text-3xl'>Premium healthcare just got more accessible</h1>
                    </div>
                </div>
            </div>
        </div>
    )
} 

