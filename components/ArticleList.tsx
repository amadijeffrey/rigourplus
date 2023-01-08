import Link from 'next/link'
import React from 'react'
import {Blog} from '../pages/blogs/index'


const ArticleList: React.FC<{allArticles: Blog[]}> = (props) =>  {
    const articles = props.allArticles.slice(1,4)
    return(
        <div className='w-full lg:w-6/12'>
            <h1 className='text-2xl lg:text-4xl font-bold mb-4'>What's new? <Link href='/blogs'className='text-xl lg:text-2xl float-right text-[#6b5dd3]' >see more <i className="bi bi-arrow-right"></i></Link></h1>
            {
                articles.map((article) => {
                   return <Link href={`/blogs/${article.id}`} key={article.id}>
                        <div className='article'>
                           <img src={article.imageUrl} alt='doctor profile' className='article-image'/>
                            <div className='w-full md:w-8/12'>
                                <h1 className='text-xl lg:text-3xl'>{article.title}</h1>
                                <h2
                                    className='text-xl lg:text-2xl text-[#a9a9a9] mt-2'
                                    dangerouslySetInnerHTML={{__html: article.content}}
                                    />
                            </div>
                        </div>
                    </Link>
                })
            }
        </div>
    )
}

export default ArticleList