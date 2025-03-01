import React from 'react'
// import {faBell} from 'react-icons'
import bgImage from '../../assets/bg.png'
import {motion} from 'framer-motion'
import { FaBell } from 'react-icons/fa'


const Bgstyle = {
   backgroundImage: `url(${bgImage})`,
   backgroundRepeat: "no-repeat",
   backgroundSize: "cover",
   backgroundPosition: "center"
}

const Bell = (delay) => {
   setTimeout(() => {
      alert("ok")
   }, 3000);
}



const Subcribe = () => {
  return (
    <section className='bg-[#f7f7f7f7]'>
      <div style={Bgstyle} className="container py-24 md:py-28 ">
         <div className="flex flex-col justify-center">
            <motion.div 
            initial={{opacity: 0, scale: 0.5}}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeIn" }}
            className="text-center space-y-4 lg:max-w-[430px] mx-auto">
               <h1 className="text-4xl font-bold !leading-snug">450k+ Students are learning from us</h1>
               <p className='text-pretty'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, veritatis ea tenetur adipisci ex commodi deleniti iste laboriosam corporis. 
                  Optio id, expedita delectus nisi deserunt cumque animi voluptatibus nulla in possimus odit veniam consectetur aliquid. 
                  Fugit vel dolor voluptate ea, cum temporibus maxime, maiores quis accusamus repudiandae asperiores, iste repellendus.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolore nihil ipsa maiores. Accusamus, nisi dignissimos dolorem, 
                  inventore maxime culpa aliquid a eum hic modi obcaecati deserunt ullam molestiae esse.
               </p>
               <a className="primary-btn !mt-8 items-center gap-4 inline-flex group">
                  Subcribe now <FaBell className={`group-hover:text-lg duration-200 
                  group-hover:-rotate-45`}/>
               </a>
            </motion.div>
         </div>
      </div>
    </section>
  )
}

export default Subcribe 