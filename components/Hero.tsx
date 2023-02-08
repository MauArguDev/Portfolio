import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

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
    <div>
        <h1>
            <span>{text}</span>
            <Cursor cursorColor='#b00000'/>
        </h1>
    </div>
  )
}