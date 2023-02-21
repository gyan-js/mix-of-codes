import React from 'react'
import { BsSunFill } from 'react-icons/bs'
import { Divider } from 'semantic-ui-react'
import {FaPython, FaGitAlt} from 'react-icons/fa'
import blogs from '../context/blogs'
const Home = () => {

  return (
    <div className=' min-h-screen   dark:bg-gray-900'>
      <div className="text-center py-6   text-lg font-bold text-gray-800 md:text-xl lg:px-24 dark:text-gray-300">
        <p className=''>Codophilic</p>
       <br/>
      <h1 className=' mb-8 text-4xl font-bold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight dark:text-gray-50'>
        
        <span>Read </span>

        <span className='block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-indigo-600 to-blue-600 lg:inline'>Learn </span>
        
        <span>Code</span>🎭
      </h1>
      
      </div>
      <div className=''>
      <div className='font-mono flex align-end flex-wrap'>
      {blogs.map(items =>
        <div className="cursor-pointer group px-6 py-6 md:px-10 md:w-1/3 flex flex-col items-start rounded transform">
        <span className="inline-block py-1 px-2 rounded bg-gray-100 dark:bg-indigo-900 text-indigo-700 dark:text-gray-200 text-sm font-medium tracking-widest">
          {items.Tag}
        </span>
        <h2 className="sm:text-2xl text-xl title-font font-semibold text-gray-700 mt-4 mb-4 dark:text-gray-100 group-hover:text-indigo-800 dark:group-hover:text-indigo-400">
          {items.title}
        </h2>
        <p className="leading-relaxed mb-5 text-gray-800 dark:text-gray-200">
          {items.desc}
        </p>

        <div className="flex items-center flex-wrap pb-2 border-b-2 border-gray-300 mt-auto w-full justify-between dark:border-indigo-400">
          <a className="text-indigo-700 inline-flex items-center dark:text-indigo-200 group-hover:text-indigo-800 dark:group-hover:text-indigo-400">
            Learn More{" "}
            <span className="pl-1">
              <BsSunFill />
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
        )}
        </div>
        </div>
     
    </div>
  )
}

export default Home