import React from 'react'
import { SocialIcon } from "react-social-icons"

type Props = {}

export default function Header({}: Props) {
  return (
    <header>
        <div className='flex flex-row items-center'>
            {/* Social Icons */}
            <SocialIcon url='https://github.com/MauArguDev' 
            fgColor='gray' 
            bgColor='transparent'/>

            <SocialIcon url='https://www.linkedin.com/in/mauricio-argumedo-1942801ab/'
            fgColor='gray'
            bgColor='transparent'/>
            <SocialIcon url='https://wa.me/50361585806' 
            network="whatsapp"
            fgColor='gray'
            bgColor='transparent'/>
            <SocialIcon url='mailto:mauro66arg@gmail.com' 
            fgColor='gray'
            bgColor='transparent'/>
        </div>
    </header>
  )
}