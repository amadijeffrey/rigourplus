import { useRouter } from "next/router";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import {db} from '../../../firebase-config';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage'
import { getDoc, doc, updateDoc} from 'firebase/firestore'
import {Blog} from './index'
import { storage} from '../../../firebase-config'
import { Editor } from "@tinymce/tinymce-react";


export default function Edit() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [imageUpload, setImageUpload] = useState<Blob | null | string>(null)

    const router = useRouter()
    const {blogId }= router.query
    const singleBlogRef = doc(db, 'blogs', `${blogId}`) 

    useEffect(() => {
        const fetchBlog = async () => {
            const doc = await getDoc(singleBlogRef)
            const blogData = doc.data() as Blog
            setTitle(blogData.title)
            setContent(blogData.content)
            setImageUpload(blogData.imageUrl)
        }
        fetchBlog()
    }, [])

    const updateBlog = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (imageUpload === null){
            alert('add a picture')
            return;
        }
        if(typeof imageUpload === 'string'){
            setIsLoading(true)
            await updateDoc(singleBlogRef, {
                title,
                content,
            })
            setIsLoading(false)
            router.push('/blogs/new')
            return
        }
        setIsLoading(true)
        const imageRef = ref(storage, `/images/${imageUpload.name + Date.now()}`)
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then(async (url) => {
                await updateDoc(singleBlogRef, {
                    title,
                    content,
                    imageUrl: url,
                })
                setIsLoading(false)
                router.push('/blogs/new')
            }).catch(() => {
                alert('error in image url')
            })
        }).catch(() => {
            alert('error uploading image')
        })
    
    }

    const updateImageState = (e: any) => {
        setImageUpload(e.target.files[0])
        alert('image added')
    }

    return (
        <div className='px-10 py-5 lg:px-40 lg:py-20'>
            <h2 className="text-xl lg:text-3xl font-medium text-center mb-5">Create new blog</h2>
            <form onSubmit={updateBlog}>
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
                <label htmlFor='content' className="block text-xl lg: text-2xl font-medium text-gray-700">
                    Content
                </label>
                <Editor 
                    id="content"
                    value={content}
                    onEditorChange={(newText) => setContent(newText)}
                />
                <button type='submit' className="button mt-5 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#6b5dd3] active:shadow-lg">
                  {isLoading && <div>
                        <div role="status">
                            <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>}
                    update
                </button>    
            </form>
        </div>
    )
}