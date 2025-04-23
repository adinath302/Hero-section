import React from 'react'
import HeroImg from '../../assets/img1.gif';
import { motion } from "framer-motion";
import { slideUp } from '../../utility/animation';

const Hero = () => {
  return (
    <div className='flex justify-center'>
      <div className='container pbp'>
        <div className='grid grid-cols-1 md:grid-cols-2 min-h-[600px]'>
          {/* Text Content Section */}
          <div className='!space-y-5 flex flex-col justify-center item-center text-center md:text-left py-20 px-10 md:pr-24 md:py-0 md:px-0 md:items-start'>
            <motion.h1
              variants={slideUp(0.2)}
              initial="initial"
              animate="animate"
              className='text-4xl xl:text-5xl font-bold'>Unlock a Passion, Slide Hustle, or New
              <span className='text-gray-400 underline'> Profession</span>
            </motion.h1>
            <motion.p
              variants={slideUp(0.4)}
              initial="initial"
              animate="animate"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores impedit molestias libero, dignissimos iure repellendus magnam hic accusantium rem alias, eaque aperiam? Quod, voluptate.</motion.p>
            <motion.button
              variants={slideUp(0.6)}
              initial="initial"
              animate="animate"
              className=' primary-btn bg-gray-900 hover:bg-[#fdcd2d] duration-300'>More News</motion.button>
          </div>
          {/* Hero Image Section */}
          <div className='flex justify-center items-center'>
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              src={HeroImg} alt="" className='w-[80%] md:w-[550px] xl:w-[600px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero