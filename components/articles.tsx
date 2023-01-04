import docprofile from '../public/docprofile.jpg';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {db} from '../firebase-config';
import {collection, getDocs} from 'firebase/firestore'

export default function Articles(){
    const [articles,setArticles] = useState(['k'])
    const blogCollectionRef = collection(db, 'blogs') 

    // useEffect(() => {
    //   const getArticles = async () => {
    //     const data = await getDocs(blogCollectionRef)
    //     setArticles(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    //   }

    //   getArticles()
    // }, [])

    if(articles.length < 1){
        return <div>loading...</div>
    }else{
        return (
            <div>
                <h1  className='text-3xl text-center lg:text-6xl lg:flex lg:justify-center font-bold m-24 lg:m-36 '>Daily curated articles for your healthcare</h1>
                <div className='flex flex-col lg:flex-row px-10  lg:px-40 lg:py-20'>
                    <div className='w-full lg:w-6/12 p-7'>
                        <Image src={docprofile} alt='doctor consulting online' className='firstblog'/>
                        <a><h1 className='text-2xl lg:text-4xl font-bold mt-9' >Dr. Benita</h1></a>
                        <h2 className='text-lg lg:text-2xl text-[#a9a9a9] mt-2'>Inhouse medical doc Rigour+ gives you access to a wide array of top content across various medical profes</h2> 
                        <a href='/k'><h4 className='text-xl mt-7'>Learn more</h4></a>
                    </div>
                    <div className='w-full lg:w-6/12'>
                        <h1 className='text-2xl lg:text-4xl font-bold mb-4'>What's new? <a href='/blogs'className='text-xl lg:text-2xl float-right text-[#6b5dd3]' >see more <i className="bi bi-arrow-right"></i></a></h1>
                        <div className='article'>
                                <Image src={docprofile} alt='doctor profile' className='article-image'/>
                                    <div className='w-8/12'>
                                        <h1 className='text-xl lg:text-3xl'>Dr. Benita Inhouse medical doc Rigour+ gives you</h1>
                                        <h2 className='text-xl lg:text-2xl text-[#a9a9a9] mt-2' >Inhouse medical doc Rigour+ gives you access to a wide array of top content across various medical profes</h2>
                                    </div>
                        </div>
                        <div className='article'>
                                <Image src={docprofile} alt='doctor profile' className='article-image'/>
                                <div className='w-8/12'>
                                    <h1 className='text-3xl'>Dr. Benita</h1>
                                    <h2 className='text-2xl text-[#a9a9a9] mt-2'>Inhouse medical doc Rigour+ gives you access to a wide array of top content across various medical profes</h2>
                                </div>
                        </div>
                        <div className='article'>
                                <Image src={docprofile} alt='doctor profile' className='article-image'/>
                                <div className='w-8/12'>
                                    <h1 className='text-3xl'>Dr. Benita</h1>
                                    <h2 className='text-2xl text-[#a9a9a9] mt-2'>Inhouse medical doc Rigour+ gives you access to a wide array of top content across various medical profes</h2>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 