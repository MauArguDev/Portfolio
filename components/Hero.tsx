import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, The Name's Mauricio Argumedo",
            "GuyWhoLovesCoffee.swift",
            "let butLovesToCodeMore = true",
    ],
    loop: true,
    delaySpeed: 2000
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <img src='' alt=''/>
        <h1>
            <span>{text}</span>
            <Cursor cursorColor='#b00000'/>
        </h1>
    </div>
  )
}