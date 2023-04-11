import React from 'react'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import {FaFacebookF,FaTwitter,FaLinkedinIn} from "react-icons/fa"


function Bannerleft() {

    const[text]=useTypewriter({
        words:["Professional Coder.","Full Stack Developer.", "UI Designer"],
        loop:true,
        typeSpeed:60,
        deleteSpeed:10,
        delaySpeed:2000,
    });

  return (

      <div className='w-1/2 flex flex-col gap-10'>
            <div className='flex flex-col gap-5'>
                <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
                <h1 className='text-5xl font-bold text-white'>
                    Hi, I'm{" "}
                    <span className='text-red-600 capitalize'>Kritika Choudhary</span>
                </h1>
                <h2 className='text-3xl font-bold text-white'>
                a <span>{text}</span>
                <Cursor
                    cursorStyle="|"
                    cursorBlinking="false"
                    cursorColor='#ff014f'
                />
                </h2>
                <p className='text-base leading-6 tracking-wide'>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                </p>
            </div>
            <div >
                <button className='btn primary-btn'>{" "}Hire me{" "}</button>
                <a href='KritikaChoudhary_resume.pdf' download='Kritika Choudhary.pdf'>
                    <button className='btn highlighted-btn'>Get Resume</button>
                </a>
            </div>
            <div>
            <h2 className='text-base uppercase
             font-titleFont mb-4'>Find me in</h2>
             <div className='flex gap-4'>
             <span className='bannerIcon'>
                    <FaFacebookF/>
                </span>
                <span className='bannerIcon'>
                    <FaTwitter/>
                </span>
                <span className='bannerIcon'>
                    <FaLinkedinIn/>
                </span>
                
             </div>

            </div>
        </div>

  
  )
}

export default Bannerleft
