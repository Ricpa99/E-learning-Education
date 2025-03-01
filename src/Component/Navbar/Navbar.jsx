import React, { useState } from 'react';
import { TfiAlignRight } from "react-icons/tfi";
import {motion} from 'framer-motion';



const navbarMenu = [
   {
      id: 1,
      title: 'Home',
      patch: '/',
   },
   {
      id: 2,
      title: 'Services',
      patch: '#'
   },
   {
      id: 3,
      title: 'About Us',
      patch: '#'
   },
   {
      id: 4,
      title: 'Our Team',
      patch: '#'
   },
   {
      id: 5,
      title: 'Contact Us',
      patch: '#'
   },
]


const Navbar = () => {
   const [count, setCount] = useState(1);

  return (
    <nav className='relative z-20'>
      <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="container py-5 flex justify-between items-center">
         <div className="">
            <h1 className='font-bold text-2xl'>The coding Journey</h1>
         </div>
         <div className="hidden lg:block">
            <ul className='flex gap-4 items-center'>
               {
                  navbarMenu.map((res,index) => {
                     return (
                        // <>
                        <li key={res.id}>
                           <a className='inline-block py-2 px-3 hover:text-secondary
                           relative group' href={res.patch}>
                              <div className="w-0 h-1 group-hover:duration-500 group-hover:w-7
                              group-hover:ease-in-out bg-secondary absolute mt-2 left-1/2
                              -translate-x-2 top-1/2 bottom-0 group-hover:block  rounded-lg">
                              </div>
                              {res.title}</a>
                        </li>
                        // </>
                     )
                  })
               }
               <button className='primary-btn'>Sign in</button>
            </ul>
         </div>
         <div className="lg:hidden">
            <div onClick={() => setCount(count == 0 ? 1 : 0)} className='flex [&>*]:rounded-xl flex-col justify-between h-8 cursor-pointer' type='button'>
               <span className={`${count == 1 ? 'rotate-45 translate-y-[18px] duration-300 ease-in-out delay-100' : ''} w-[32px] h-[2.5px] bg-dark`}></span>
               <span className={`${count == 1 ? 'w-0 duration-300 ease-in-out delay-100' : 'w-[32px]'}  h-[2.5px] bg-dark`}></span>
               <span className={`${count == 1 ? '-rotate-45 -translate-y-3 duration-300 ease-in-out delay-100' : ''} w-[32px] h-[2.5px] bg-dark`}></span>
            </div>
         </div>
      </motion.div>
    </nav>
  )
}

export default Navbar