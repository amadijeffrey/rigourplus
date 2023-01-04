import pictureOfDocSmiling from '../public/docsmiling.jpg';
import docprofile from '../public/docprofile.jpg';
import healthTracka from '../public/healthtracka.png';
import mdcn from '../public/mdcn.jpeg';
import synlab from '../public/synlab.png';
import Giglogistics from '../public/Giglogistics.png';
import Image from 'next/image'

export default function Offers(){
    return (
        <>
            <div className='px-10 py-5 lg:px-40 lg:py-20 lg:my-44'>
                <div className='flex flex-col lg:flex-row'>
                    <div className='w-full lg:w-6/12 p-5'>
                        <h1 className='text-3xl text-center sm:text-5xl lg:text-6xl mb-8'>We have experienced and professional doctors</h1>
                        <h2 className='write'>Rigour+ goes beyond your imagination to offer you a truly holistic suite of services that ensures you have fewer things to worry about.</h2>
                        <div className='offers'>
                            <div>
                                <span className='icon'><i className="bi bi-asterisk"></i></span>
                                <span><h1 className='text-sm sm:text-lg lg:text-xl'>Emergency Service</h1></span>
                            </div>
                            <div>
                                <span className='icon'><i className="bi bi-asterisk"></i></span>
                                <span><h1 className='text-sm sm:text-lg lg:text-xl'>Easy online booking</h1></span>
                            </div>
                            <div>
                                <span className='icon'><i className="bi bi-asterisk"></i></span>
                                <span><h1 className='text-sm sm:text-lg lg:text-xl'>24/7 Support system</h1></span>
                            </div>
                            <div>
                                <span className='icon'><i className="bi bi-asterisk"></i></span>
                                <span><h1 className='text-sm sm:text-lg lg:text-xl'>Purchase medication</h1></span>
                            </div>
                        </div>
                        <button className='button'>Download</button>
                    </div>
                    <div  className='w-full lg:w-6/12 relative lg:-right-36'>
                       <Image  className='image' src={pictureOfDocSmiling} alt='doctor consulting online' />  
                       <div className='card'>
                            <Image src={docprofile} alt='doctor profile' className='docprofile'/>
                            <div>
                                <h1 className='text-xl lg:text-2xl'>Dr. Benita</h1>
                                <h2 className='text-sm lg:text-xl'>Inhouse medical doc</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className='my-24 text-3xl sm:text-5xl font-bold lg:text-7xl flex justify-center'>Our Partners</h1>
                <div className='partners'>
                    <Image src={healthTracka} alt='healthtracka logo' className='partner-icon'/>  
                    <Image src={mdcn} alt='mdcn logo' className='partner-icon'/>  
                    <Image src={synlab} alt='synlab logo' className='partner-icon'/>  
                    <Image src={Giglogistics} alt='gig logo' className='partner-icon'/>  
                </div>
            </div>
        </>
    )
} 