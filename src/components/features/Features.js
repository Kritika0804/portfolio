import React from 'react'
import Title from '../Layouts/Title'
import Card from './Card'
import { AiFillAppstore } from "react-icons/ai";
import {  FaBars } from "react-icons/fa";
import { SiProgress } from "react-icons/si";

function Features() {
  return (
    <section id='features' className='w-full h-[800px]  py-20 border-b-[1px] border-b-black'> 
        <Title title="Features" des="What I do"/>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Business Stratagy"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaBars/>}
        />
        <Card
          title="App Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<SiProgress />}
        />
        
      </div>
    </section>
  )
}

export default Features
