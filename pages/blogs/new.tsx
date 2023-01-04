import { useState } from "react";
import { storage} from '../../firebase-config'
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage'
import {collection, addDoc} from 'firebase/firestore'
import {db} from '../../firebase-config';


export default function Form(){
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [imageUpload, setImageUpload] = useState(null)
    const blogCollectionRef = collection(db, 'blogs') 


    const submitForm = (e: any) => {
        e.preventDefault()
        if (imageUpload === null) return;
        const imageRef = ref(storage, `/images/${imageUpload + Date.now()}`)
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                addDoc(blogCollectionRef, {
                    title,
                    imageUrl: url,
                    content
                })
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
                    onChange={(e: any) => setTitle(e.target.value)}
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
                    <div className="flex text-xl text-gray-600">
                        <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                        <span>Upload a file</span>
                        <input id="file-upload" type="file" className="sr-only" onChange={(e: any) => setImageUpload(e.target.files[0])}/>
                        </label>
                        <p className="text-xl pl-1">or drag and drop</p>
                    </div>
                    <p className="text-lg text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                </div>
                </div>
                <label htmlFor='content' className="block text-xl lg: text-2xl font-medium text-gray-700">
                    Content
                </label>
                <textarea
                    id="content"
                    className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 "
                    placeholder="blog content"
                    defaultValue={content}
                    onChange={(e: any) => setContent(e.target.value)}
                    />
            </form>
        </div>
    )
}