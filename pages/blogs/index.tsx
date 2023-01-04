import { useState,useEffect } from "react"
import {db} from '../../firebase-config';
import {collection, getDocs} from 'firebase/firestore'
import Image from 'next/image';


export default function Blogs(){
    const [blogs, setBlogs] = useState(['k'])
    const blogCollectionRef = collection(db, 'blogs') 

    useEffect(() => {
        const fetchBlogs = async () => {
            const data = await getDocs(blogCollectionRef)
            // setBlogs(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        fetchBlogs()
    }, [])

    if(blogs.length < 1){
        return <div>Loading...</div>
    }else{
        return(
            <div className="px-10 py-5 lg:px-40 lg:py-20">
                <p>tyutyut uyiuiu</p>
                {/* {
                    blogs.map((blog) => {
                        <div key={blog.id} className="w-full flex p-5 h-52 max-h-52">
                            <Image src={} alt='doctor profile' className='h-full w-4/12 mr-5'/>
                                <div className='w-7/12'>
                                    <h1 className='text-xl lg:text-3xl'>{blog.title}</h1>
                                    <h2 className='text-xl lg:text-2xl text-[#a9a9a9] mt-2' >{blog.description}</h2>
                                </div>
                        </div>
                    })
                } */}
            </div>
        )
    }
    
}