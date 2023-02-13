import React, { useState, useEffect } from 'react'
import { Disclosure, Menu } from '@headlessui/react'

import { Popover, Transition } from '@headlessui/react'
import { BsMoonStarsFill, BsCloudSunFill } from 'react-icons/bs'
import { BiTerminal } from 'react-icons/bi'

import { AiFillCaretDown } from 'react-icons/ai'

function Navbar() {
  const [theme, setTheme] = useState()

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    }
    else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if(storedTheme){
      setTheme(storedTheme);
    }
  }, [])
  

  useEffect(() => {
      localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    }
    else {
      document.documentElement.classList.remove("dark")
    }
    
  }, [theme])

  const themeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Popover as="nav" className=" sticky top-0 bg-[#080d16] ">

      <>
        <div className="mx-auto py-1 px-2 sm:px-6 lg:px-8 bg-white dark:bg-[#080d16] drop-shadow">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}

            </div>
            <div className=" mr-2 sm:items-stretch sm:justify-start">

              <div className=" flex items-start mx-auto px-6 sm:ml-6 sm:block">
                <div className=" ml-0  flex hide ">

                  <>
                    <a
                      //key={item.name}
                      href="#"
                      className='font-bold text-indigo-600 dark:text-white 
                          px-3 py-2 rounded-md  text-base flex flex-row text-lg'

                    //aria-current={current ? 'page' : undefined}
                    >
                      <BiTerminal className='mt-1 scale-125 mr-2 text-indigo-700 dark:text-white ' />
                      Latest
                    </a>
                    <div className="group inline-block relative">
                      <div
                        className=" bg-transparent text-gray-700 font-semibold py-2 px-8 rounded inline-flex items-center"
                      >
                        <span className='text-indigo-600 dark:text-white font-bold mx-1  text-base md:text-base' >Posts</span>

                        <AiFillCaretDown className='text-indigo-700 dark:text-white'/>
                        


                      </div>

                    </div>
                  </>

                </div>
              </div>

            </div>
            <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

              <div className=''>
                <input type="checkbox" className="checkbox" id="checkbox" onChange={themeSwitch} />
                <label for="checkbox" class="label">
                <BsCloudSunFill className='text-indigo-700 dark:text-white ' />
                <BsMoonStarsFill className='text-indigo-700 dark:text-white' />
                  
                  <div class='ball bg-indigo-700 dark:bg-white' />
                </label>
              </div>

            </div>
          </div>
        </div>


      </>

    </Popover>
  )
}



export default Navbar;