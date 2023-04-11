import React from 'react'
import Title from '../Layouts/Title'

import {img} from '../../assets/index'
import ProjectCard from './ProjectCard'

function Project() {
  return (
    <section id='projects' className='w-full h-[800px]  py-20 border-b-[1px] border-b-black'> 
        <div className='flex justify-center'>
        <Title 
        title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
        des="My Projects"
        />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={img}
        />
        <ProjectCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={img}
        />
        <ProjectCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={img}
        />

      </div>
      
    </section>
  )
}

export default Project
