import { motion } from 'framer-motion'
import React from 'react'
import { FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { TbWorld, TbWorldWww } from 'react-icons/tb'



const Footer = () => {
  return (
    <footer className='py-28 bg-[#f4f4f4]'>
      <motion.div 
      initial={{ opacity: 0, y:50 }}
      whileInView={{ opacity: 1, y:0 }}
      className="container">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
            <div className="space-y-4 max-w-[300px]">
               <h1 className='text-2xl font-bold'>The Coding Journey</h1>
               <p className='text-dark2'>
                  TCJ is a platform dedicated to empowering aspiring
                  developer. From beginner tutorials to advance programming concepts
                  , we provide a comprehensive learning experiance designed to help
                  you master coding skills, build projects, and launch your tech career
               </p>
            </div>
            <div className="grid grid-cols-2 gap-10">
               <div className="space-y-4">
                  <h1 className="text-2xl font-bold">
                     Courses
                  </h1>
                  <div className="text-dark2 ">
                     <ul className="space-y-2 text-lg">
                        <li className="cursor-pointer hover:text-secondary duration-200">
                           Web Development
                        </li>
                        <li className="cursor-pointer hover:text-secondary duration-200">
                           Software Development
                        </li>
                        <li className="cursor-pointer hover:text-secondary duration-200">
                           Apps Development
                        </li>
                        <li className="cursor-pointer hover:text-secondary duration-200">
                           E-learning
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="space-y-4">
                  <h1 className="text-2xl font-bold">
                     Links
                  </h1>
                  <div className="text-dark2 ">
                     <ul className="space-y-2 text-lg">
                        <li className="cursor-pointer hover:text-secondary duration-200">
                           Home
                        </li>
                        <li className="cursor-pointer hover:text-secondary duration-200">
                           Services
                        </li>
                        <li className="cursor-pointer hover:text-secondary duration-200">
                          About
                        </li>
                        <li className="cursor-pointer hover:text-secondary duration-200">
                           Contact
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="space-y-4 max-w-[300px]">
               <h1 className="text-2xl font-bold">
                  Get In Touce
               </h1>
               <div className="flex items-center">
                  <input maxLength={10} type="text" name="" placeholder="Enter your email" 
                  className='p-3 rounded-s-xl bg-white w-full
                  py-4 focus:ring-0 focus:outline-none placeholder:text-dark2'
                  />
                  <button className='bg-primary
                   p-2 rounded-e-xltext-white font-semibold 
                   py-4 px-6'>
                     Go
                  </button>
               </div>
               <div className=" flex space-x-6 py-3">
                  <a href="#">
                     <FaWhatsapp className='cursor-pointer text-4xl max-md:text-2xl
                     hover:text-primary hover:scale-105 duration-200 '/>
                  </a>
                  <a href="#">
                     <FaInstagram className='cursor-pointer text-4xl max-md:text-2xl
                     hover:text-primary hover:scale-105 duration-200 '/>
                  </a>
                  <a href="#">
                     <TbWorldWww className='cursor-pointer text-4xl max-md:text-2xl
                     hover:text-primary hover:scale-105 duration-200 '/>
                  </a>
               </div>
            </div>
         </div>
      </motion.div>
    </footer>
  )
}

export default Footer