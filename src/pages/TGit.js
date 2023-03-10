import React, {useEffect, useState} from 'react'
import blogs from '../context/blogs'
import { BsFillArrowRightSquareFill } from 'react-icons/bs'
const TGit = () => {
  const [count, setCount] = useState(0);

  
  var article = blogs.filter(function(blog) {
    return blog.key === 'Git'
  })
   console.log(article);
   useEffect(() => {
    setCount(article.length);
   }, [article])
  return (
    <div className='min-h-screen min-w-full dark:bg-[#0e141f] px-10 py-10' >
      <div className='flex flex-wrap justify-between' >
       <span className=' dark:text-white text-[#2c2c2c] font-sans font-semibold text-3xl py-1 px-1 ml-[40px] '>Git</span>
       <span className=' dark:text-white text-[#2c2c2c] font-sans font-semibold text-3xl '>Articles: {count} </span>
      </div>
    <div className='flex align-end flex-wrap' >
     
    {blogs.map(function(blog) {
      if(blog.key === 'Git') {
        
        return(
          <div className="cursor-pointer group px-6 py-6 md:px-10 md:w-1/3 flex flex-col items-start rounded transform">
      <span className="inline-block py-1 px-2 rounded bg-gray-100 dark:bg-indigo-900 text-indigo-700 dark:text-gray-200 text-sm font-medium tracking-widest">
        {blog.Tag}
      </span>
      <h2 className="sm:text-2xl text-xl title-font font-semibold text-gray-700 mt-4 mb-4 dark:text-gray-100 group-hover:text-indigo-800 dark:group-hover:text-indigo-400">
        {blog.title}
      </h2>
      <p className="leading-relaxed mb-5 text-gray-800 dark:text-gray-200">
        {blog.desc}
      </p>

      <div className="flex items-center flex-wrap pb-2 border-b-2 border-gray-300 mt-auto w-full justify-between dark:border-indigo-400">
        <a className="text-indigo-700 inline-flex items-center dark:text-indigo-200 group-hover:text-indigo-800 dark:group-hover:text-indigo-400">
          Learn More{" "}
          <span className="pl-1">
            <BsFillArrowRightSquareFill />
          </span>
        </a>

        <a className="inline-flex items-center">
          <span className="flex-grow flex flex-col pl-4">
            <span className="text-gray-900 text-xs tracking-widest mt-0.5 dark:text-indigo-300">
              
            </span>
          </span>
        </a>
      </div>
    </div>
        )
      }
    })}
      </div>
    </div>
  )
}

export default TGit