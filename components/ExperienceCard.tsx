import React from 'react'
import { motion } from 'framer-motion' 

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-full md:w-[600px] xl:w-[700px] snap-center bg-[#292929] p-5 hover:opacity-100 opacity-40 cursor-pointer
    transition-opacity duration-200 overflow-hidden'>
        <motion.img
        initial={{
            y: -100,
            opacity: 0
        }}
        transition={{duration:1.2}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        className='w-20 h-20 rounded-full xl:w-[90px] xl:h-[90px] object-cover object-center'
        src='https://scontent.fsal1-1.fna.fbcdn.net/v/t1.18169-9/27752290_388650481561015_2527653618521475386_n.png?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0IneWZoU170AX_KVKdm&_nc_ht=scontent.fsal1-1.fna&oh=00_AfCOPp25Hl68gJzkdLOdLKoZKuHIbZIjh7VhzfyE4ArQpQ&oe=640BB241'
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-xl md:text-2xl font-light text-center'>Java Android Developer</h4>
            <p className='font-bold text-lg md:text-xl mt-1 text-center'>4 Apps</p>
            <div className='flex space-x-2 my-2 justify-center'>
                <img 
                className='h-5 md:h-7 w-5 md:w-7'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/1200px-Kotlin_Icon.svg.png" />
                <img 
                className='h-5 md:h-7 w-5 md:w-7'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/1200px-Kotlin_Icon.svg.png" />
                <img 
                className='h-5 md:h-7 w-5 md:w-7'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/1200px-Kotlin_Icon.svg.png" />
            </div>
            <p className='uppercase py-2 md:py-5 text-gray-300 text-center'>Sept 2019 - Sept 2020</p>

            <ul className='list-disc space-y-4 ml-5 text-base md:text-lg'>
                <li>Principal Android apps developer</li>
                <li>Occasionally UI/UX designer</li>
                <li>App publisher on google playstore</li>
            </ul>
        </div>
    </article>
  )
}