import React, { useState, useEffect } from 'react'
import { Disclosure, Menu } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'
import { Popover, Transition } from '@headlessui/react'
import { BsMoonStarsFill, BsCloudSunFill } from 'react-icons/bs'
import { BiTerminal } from 'react-icons/bi'

import { AiFillCaretDown } from 'react-icons/ai'

import navigation_routes from '../context/navigation'

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

    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    }
    else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("theme", theme);
  }, [theme])

  useEffect(() => {
    var theme_stored = localStorage.getItem("theme")

    if (theme_stored) {
      setTheme(theme_stored);
    }
  }, [])


  const themeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const navigate = useNavigate()

  return (
    <Popover as="nav" className="  top-0 bg-[#080d16] ">

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
                        
                      className='cursor-pointer font-bold text-indigo-600 dark:text-white 
                          px-3 py-2 rounded-md  text-base flex flex-row text-lg'
                          onClick={() => navigate('/')}

                    //aria-current={current ? 'page' : undefined}
                    >
                      <BiTerminal className='mt-1 scale-125 mr-2 text-indigo-700 dark:text-white ' />
                      Latest
                    </a>
                    <div className="group inline-block relative">
                      <div
                        className=" bg-transparent text-gray-700 font-semibold py-2 px-8 rounded inline-flex items-center"
                      >
                        <button
                          class="flex items-center hover:text-indigo-600 text-gray-800 dark:text-gray-50 mx-6 cursor-pointer"
                        >
                          <span class="mr-1 font-bold ">Dropdown</span>
                          <AiFillCaretDown />
                        </button>
                        <ul className="z-100 opacity-100 dark:bg-black rounded-br-8 ml-[-50px] mt-40 dropdown-menu absolute group-hover:block hidden text-gray-700 pt-1 bg-white dark:bg-dark w-40  rounded-xl left-1/3">
                          <li class="">
                            <a
                              class="cursor-pointer hover:bg-gray-300 rounded-t dark:bg-black text-gray-800 dark:text-gray-50 py-2 px-4 block whitespace-no-wrap"
                              onClick={() => navigate(`/topics/${navigation_routes[0]}`)}
                            >Git</a
                            >
                          </li>
                          <li class="">
                            <a
                              class="dark:bg-black dark:text-gray-50 hover:bg-gray-300 py-2 px-4 block whitespace-no-wrap"
                              
                              onClick={() => navigate(`/topics/${navigation_routes[1]}`)}
                            >Javascript</a
                            >
                          </li>
                          <li class="">
                            <a
                              class="rounded-b dark:bg-black dark:text-gray-50 hover:bg-gray-300 py-2 px-4 block whitespace-no-wrap"
                              onClick={() => navigate(`/topics/${navigation_routes[2]}`)}
                            >React
                            </a>
                          </li>


                        </ul>
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