import React, { useState, useEffect } from 'react'
import { Disclosure, Menu } from '@headlessui/react'

import { Popover, Transition } from '@headlessui/react'
import { BsMoonStarsFill, BsCloudSunFill } from 'react-icons/bs'
import { DiGhostSmall } from 'react-icons/di'

import { AiFillCaretDown } from 'react-icons/ai'
/*const navigation = [
  { name: 'Latest', href: '#', current: false, icon: 'code' },
  { name: 'Team', href: 'https://github.com', icon: 'dropdown' },
]
const drop_links = [
  { href: '/git-blg', label: 'Git' },
  { href: '/js-blg', label: 'Javascript' },
  { href: '/py-blg', label: 'Python' },
  { href: '/react-blg', label: 'React' },
  { href: '/go-blg', label: 'GoLang' },
] */

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar() {
  const [theme, setTheme] = useState()

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    }
    else{
      setTheme('light')
    }
  }, [])
  

  useEffect(() => {
    if(theme === "dark") {
      document.documentElement.classList.add("dark")
    }
    else{
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const themeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Popover as="nav" className=" sticky top-0 bg-[#080d16]  ">
      <header className=' border-[#000] fixed w-full border-t-4  dark:border-indigo-600 shadow dark:shadow-2 z-50' ></header>
      <>
        <div className="mx-auto py-1 px-2 sm:px-6 lg:px-8 bg-[#080d16]">
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
                      className='font-bold text-white 
                          px-3 py-2 rounded-md  text-base flex flex-row text-lg'

                    //aria-current={current ? 'page' : undefined}
                    >
                      <DiGhostSmall className='mt-1.5 text-xl' />
                      Latest
                    </a>
                    <div className="group inline-block relative">
                      <button
                        className=" bg-transparent text-gray-700 font-semibold py-2 px-8 rounded inline-flex items-center"
                      >
                        <span className="font-bold text-white 
                          px-3  rounded-md  text-base flex flex-row text-lg">Posts</span>
                        <AiFillCaretDown className='text-white' />
                      </button>
                      <ul className="absolute right-0 hidden text-white  group-hover:block">
                        <li className="">
                          <a
                            className="rounded-t-lg bg-[#000]  dark:text-gray-50 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >Git</a
                          >
                        </li>
                        <li className="">
                          <a
                            className="bg-[#000]  py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >JavaScript</a
                          >
                        </li>
                        <li className="">
                          <a
                            className="rounded-b-lg bg-[#000]  py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >React</a
                          >
                        </li>
                      </ul>
                    </div>
                  </>

                </div>
              </div>

            </div>
            <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              
            <div className=''>
    <input type="checkbox" className="checkbox" id="checkbox" onChange={themeSwitch} />
  <label for="checkbox" class="label">
  <BsCloudSunFill style={{color: 'white'}} />
    <BsMoonStarsFill style={{color: 'white'}} />
    <div class='ball bg-indigo-600' />
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