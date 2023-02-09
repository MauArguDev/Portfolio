import React, { Component } from 'react'
import { motion } from 'framer-motion' 

type Props = {}

type State = {}

export default class About extends Component<Props, State> {
  state = {}

  render() {
    return (
      <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:3}}
      viewport={{once: true}}
      className='flex flex-col relative h-screen text-center 
      md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
            </h3>

            <motion.img 
            initial={{
                x:-200,
                opacity:0
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{
                x:0,
                opacity: 1
            }}
            viewport={{
                once: true
            }}
            src='https://ca.slack-edge.com/T029A0L8Y-U01UBQM7X6W-aab125c549f3-512'
            className='mb-0 md:mb-0 mt-32 md:mt-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]'/>

            <div className='space-y-10 px-0 md:px-10 mt-2 md:mt-0 text-center'>
                <h4 className='text-xl md:text-4xl font-semibold'>
                    Here is a <span className='underline decoration-[#990303]'>litle</span> background
                </h4>
                <p className='text-sm md:text-base text-justify md:text-center'>
                I'm Mauricio. I am a programmer focused on mobile applications Android and iOS, 
                although honestly I like iOS more 🍎. I also have knowledge in other areas like React, Java with 
                SpringBoot, C# and a bit of Python 🐍. My biggest goal as a programmer is to be able to make world-class applications, 
                things that change the world and radically innovate. Hope to see you soon 😉.
                </p>
            </div>
        </motion.div>
    )
  }
}