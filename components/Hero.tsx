import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, The Name's Mauricio Argumedo",
            "LoveCoffee.swift",
            "let loveCodeMore = true",
    ],
    loop: true,
    delaySpeed: 2000
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <img 
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src='https://ca.slack-edge.com/T029A0L8Y-U01UBQM7X6W-aab125c549f3-512' alt=''/>
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 - pb-2 tracking-[15px]'>Mobile developer</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='text-base md:text-4xl'>{text}</span>
                <Cursor cursorColor='#b00000'/>
            </h1>

            <div className='pt-5 grid grid-cols-2 md:grid-cols-4'>
                <Link href='#about'>
                <button className='heroButton col-span-1'>About</button>
                </Link>
                <Link href='#experience'>
                <button className='heroButton col-span-1'>Experience</button>
                </Link>
                <Link href='#skills'>
                <button className='heroButton col-span-1'>Skills</button>
                </Link>
                <Link href='#projects'>
                <button className='heroButton col-span-1'>Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}