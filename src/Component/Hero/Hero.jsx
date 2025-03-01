import React from 'react';
import Navbar from '../Navbar/Navbar';
import { GrFormNextLink } from "react-icons/gr";
import Blob from '../../assets/blob.svg';
import HeroPng from '../../assets/hero.png';
import {motion, animate} from 'framer-motion';


export const AnimateUp = (delay) => {
   return {
      initial: {
         opacity: 0,
         y: 50,
      },
      animate: {
         opacity: 1,
         y: 0,
         transition: {
            type: "spring",
            stiffness: 100,
            duration: 0.5,
            delay: delay,
            ease: "easeInOut"
         }
      }
   }
}

const Hero = () => {
  return (
    <section className='bg-light dark:bg-black overflow-hidden relative'>
      <Navbar/>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
         <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
            <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
               <motion.h1 
               variants={AnimateUp(0.6)}
               initial="initial"
               animate="animate"
               // initial={{ opacity: 0, y: 50 }}
               // animate={{ opacity: 1, y: 0 }}
               // transition={{ duration: 0.5, delay:0.2, ease: "easeOut" }}
               className={`text-3xl lg:text-5xl font-bold !leading-snug`}>
                  Let's Learn to build a{" "}
                  <span className="text-secondary">Website </span>
                  for your business
               </motion.h1>
               <motion.div
               initial={{ x: 20, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration:0.6, delay: .3, ease: "easeOut" }}
               className="flex justify-center md:justify-start">
                  <button className="primary-btn flex items-center gap-4 group">
                     get started <GrFormNextLink className='font-bold text-xl 
                     group-hover:translate-x-2
                     group-hover:-rotate-45 
                     duration-200 group-hover:ease-in'/>
                  </button>
               </motion.div>
            </div>
         </div>
         <div className="flex justify-center items-center">
            <motion.img 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut"}}
            src={HeroPng} className="w-[400px] xl:w-[600px] 
            relative z-10 drop-shadow" />
            <img src={Blob} alt="" className="absolute -bottom-32 w-[8000px] 
            md:w-[1500x] z-[1] hidden md:block" />
         </div> 
      </div>
    </section>
  )
}

export default Hero