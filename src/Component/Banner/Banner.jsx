import React from 'react'
import BannerPng from '../../assets/education.png'
import { GrUserExpert } from 'react-icons/gr'
import { MdOutlineAccessTime } from 'react-icons/md'
import { FaBookReader } from 'react-icons/fa'
import {animate, motion} from 'framer-motion'


const Icon = [
   {
      icon: <FaBookReader/>,
      teks: "40.000+ Courses",
      delay: .3
   },
   {
      icon: <GrUserExpert/>,
      teks: "Expart Intoduction",
      delay: .5
   },
   {
      icon: <MdOutlineAccessTime/>,
      teks: "Unlimated Access",
      delay: .7
   }
];

const slideRight = (delay) => {
   return {
      initial:{
         x: -30,
         opacity: 0,
      },
      animate: {
         opacity: 1,
         x: 0,
         transition: {
            duration: 0.5,
            delay: delay,
            ease: "easeInOut"
         }
      }
   }
}

const slideUp = (delay) => {
   return {
      initial: {
         opacity: 0,
         x: 20,
      },
      animate:{
         opacity: 1,
         x: 0,
         transition: {
            duration: 0.5,
            delay: delay,
            ease: "easeInOut"
         }
      }
   }
}

const Banner = () => {
  return (
    <section className='bg-white'>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2
      gap-8 space-y-6 md:space-y-0">
         <motion.div
               variants={slideRight(0,5)}
               initial="initial"
               whileInView={"animate"}
               viewport={{ once: true }}
               className="flex justify-center items-center">
            <img src={BannerPng} alt="" className="w-[350px] md:max-w-[450px]
            object-cover drop-shadow"/>
         </motion.div>
         <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-12">
               <motion.h1 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
               className='!leading-snug text-3xl font-bold md:text-4xl'>
                  The World's Online Learning Plattform
               </motion.h1>
            </div>
            {Icon.map((res, index) => (
               <motion.div
               variants={slideUp(0,5) } 
               initial="initial"
               whileInView={"animate"}
               viewport={{ once: true }}               
               className='flex items-center gap-4 p-6 mt-3 bg-[#f4f4f4] rounded-2xl
               hover:bg-white duration-300 hover:shadow-2xl'>
                  <span className='text-2xl'>{res.icon}</span>
                  <p className="text-lg">{res.teks}</p>
               </motion.div>
            ))}
         </div>
      </div>
    </section>
  )
}

export default Banner