import docprofile from '../public/docprofile.jpg';
import { useState, useEffect } from 'react';
import {db} from '../firebase-config';
import {collection, query, orderBy, onSnapshot} from 'firebase/firestore'
import Link from "next/link";
import { Blog } from '../pages/blogs/index';
import ArticleList from './ArticleList';


export default function Articles(){
    const [articles,setArticles] = useState<Blog[]>([])
    const blogCollectionRef = collection(db, 'blogs') 

    useEffect(() => {
        const fetchBlogs = () => {
            const q = query(blogCollectionRef, orderBy('created', 'desc'))
            onSnapshot(q, (querySnapshot) => {
            const newArrayOfBlogs = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id} as Blog))
            setArticles(newArrayOfBlogs)
            })
        }
        fetchBlogs()
    }, [])

    if(articles.length < 1){
        return <div className="text-center">
                    <div role="status">
                        <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
    }else{
        const {imageUrl, title, content, id} = articles[0]
        return (
            <div>
                <h1  className='text-2xl sm:text-3xl text-center lg:text-4xl 2xl:text-6xl lg:flex lg:justify-center font-bold m-5 2xl:m-36 lg:m-24 '>Daily curated articles for your healthcare</h1>
                <div className='flex flex-col lg:flex-row px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-40 lg:py-20'>
                    <div className='w-full lg:w-6/12 p-7  mb-4 lg:mb-0'>
                        <img src={imageUrl} alt='doctor consulting online' className='firstblog'/>
                        <h1 className='text-xl sm:text-2xl lg:text-2xl 2xl:text-4xl font-bold mt-9 desc' >{title}</h1>
                        <h2
                            className='text-lg lg:text-lg 2xl:text-2xl text-[#a9a9a9] mt-2 desc h-[3.5rem] sm:h-auto'
                            dangerouslySetInnerHTML={{__html: content}}
                            />
                        <Link href={`/blogs/${id}`}><h4 className='text-xl mt-7'>Learn more</h4></Link>
                    </div>
                    <ArticleList allArticles={articles}/>
                </div>
            </div>
        )
    }
} 