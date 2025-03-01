import React from 'react'
import BannerPng from '../../assets/banner.png'
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

const slideLeft = (delay) => {
   return {
      initial:{
         x: 30,
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

const BannerComunity = () => {
  return (
    <section className='bg-white'>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2
      gap-8 space-y-6 md:space-y-0">
         <motion.div
         initial={{ opacity: 0, x: -50 }}
         whileInView={{ opacity: 1, x: 0 }}
         
         className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <h1 className='text-4xl font-bold !leading-snug'>Join our Community to Start your Journey</h1>
            <p className='text-dark2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias recusandae voluptas temporibus?</p>
            <a href="" className="primary-btn !mt-8 inline-flex">Join Now </a>
            </div>
         </motion.div>
         <motion.div
         variants={slideLeft(0,5)}
         initial="initial"
         whileInView={"animate"}
         // viewport={{ once: true }}
         className="flex justify-center items-center">
            <img src={BannerPng} alt="" className="w-[350px] md:max-w-[450px]
            object-cover drop-shadow"/>
         </motion.div>
      </div>
    </section>
  )
}

export default BannerComunity