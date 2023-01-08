import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { storage} from '../../firebase-config'
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage'
import {collection, addDoc, Timestamp, query, orderBy, onSnapshot, deleteDoc, doc} from 'firebase/firestore'
import {db} from '../../firebase-config';
import {Blog} from './index'
import Link from "next/link";
import { Editor } from "@tinymce/tinymce-react";


export default function Form(){
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const [imageUpload, setImageUpload] = useState<Blob | null>(null)
    const [blogs, setBlogs] = useState<Blog[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const blogCollectionRef = collection(db, 'blogs') 


    useEffect(() => {
        fetchBlogs()
    }, [])

    const updateImageState = (e: any) => {
        if(e.target.files[0].size > 10000000){
            alert('file too large')
            return
        }
        setImageUpload(e.target.files[0])
        alert('image added')
    }

    const fetchBlogs = async () => {
        const q = query(blogCollectionRef, orderBy('created', 'desc'))
        onSnapshot(q, (querySnapshot) => {
            const newArrayOfBlogs = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id} as Blog))
            setBlogs(newArrayOfBlogs)
        })
    }

    const deleteBlog = async (id: string) => {
        const docRef = doc(db, 'blogs', id)
        await deleteDoc(docRef)
        fetchBlogs()
    }

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (imageUpload === null){
            alert('add a picture')
            return;
        }
        setIsLoading(true)
        const imageRef = ref(storage, `/images/${imageUpload.name + Date.now()}`)
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                addDoc(blogCollectionRef, {
                    title,
                    imageUrl: url,
                    content,
                    created: Timestamp.now()
                }).then(() => {
                    setTitle('')
                    setContent('')
                    setImageUpload(null)
                    setIsLoading(false)
                    fetchBlogs()
                })
            }).catch(() => {
                alert('error getting imageurl')
            })
        }).catch(() => {
            alert('error uploading image')
        })
    }

    return(
        <div className='px-10 py-5 lg:px-40 lg:py-20'>
            <h2 className="text-xl lg:text-3xl font-medium text-center mb-5">Create new blog</h2>
            <form onSubmit={submitForm}>
                <label htmlFor='title' className="block text-lg lg:text-2xl font-medium text-gray-700">
                    Title
                </label>
                <input
                    value={title}
                    type="text"
                    id="title"
                    className=" w-full flex-1 h-10 p-3 mb-5 rounded-md border-gray-300"
                    placeholder="blog title"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                />
                <div className="mb-5">
                    <label className="block text-lg lg:text-2xl font-medium text-gray-700">Blog photo</label>
                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                        <div className="space-y-1 text-center">
                            <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                            >
                                <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                />
                            </svg>
                                <input id="file-upload" type="file" 
                                    onChange={updateImageState} 
                                    accept=".jpg, .jpeg, .png"
                                />
                        </div>
                    </div>
                </div>
                <label htmlFor='content' className="block text-xl mb-4 lg: text-2xl font-medium text-gray-700">
                    Content
                </label>
                <Editor 
                    id="content"
                    value={content}
                    onEditorChange={(newText) => setContent(newText)}
                />
                <button type='submit' className="button mt-5 hover:bg-[#6b5dd3] hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#6b5dd3] active:shadow-lg">
                   {isLoading &&  <div role="status">
                        <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>}
                 create
                </button>    
            </form>
            <div className=" mt-7">
                {blogs.map((blog) => {
                    return <div className="inline-block rounded-lg shadow-lg bg-white w-full mb-7 lg:mb-7 lg:w-[31%] mr-5" key={blog.id}>
                            <img className="h-44 w-full object-contain" src={blog.imageUrl} alt=""/>
                            <div className="p-6">
                                <h5 className="text-gray-900 text-xl font-medium mb-2 truncate">{blog.title}</h5>
                                <p
                                    className="text-gray-700 text-base mb-4 loaded"
                                    dangerouslySetInnerHTML={{__html: blog.content}}
                                    />
                                <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 mr-4 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg "><Link href={`/blogs/${blog.id}/edit`}>edit</Link></button>
                                <button type="button" onClick={() => setModalOpen(true)} className=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg ">delete</button>
                                {modalOpen && <div onClick={() => setModalOpen(false)} className="fixed left-0 right-0 top-0 bottom-0 bg-[rgba(0,0,0,0.2)] z-20">
                                    <div  className="w-2/6 h-1/4 mx-auto my-[20%] bg-white p-7">
                                        <h1 className=" text-xl lg:text-3xl mb-5">Are you sure you want to delete article ?</h1>
                                        <button type="button" onClick={() => setModalOpen(false)} className=" inline-block px-6 py-2.5 bg-blue-600 mr-4 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg ">cancel</button>
                                        <button type="button" onClick={() => deleteBlog(blog.id)} className=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg ">delete</button>
                                    </div>
                                </div>}
                            </div>
                   </div>
                })}
            </div>
        </div>
    )
}