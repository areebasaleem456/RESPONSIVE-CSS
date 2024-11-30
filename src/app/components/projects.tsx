import React from 'react'
import Heading from './heading'
import "../style/projects.css"
import Card from './card'

const data=[
  {
    id:0,
    title:"ATM Machine",
    desc:"Developed an advanced ATM Machine Project, simulating real-world banking experiences",
    img:"/atm.jpg",
    tags:["Typescript"],
  },
  {
    id:1,
    title:"Single Page Website",
    desc:"A cutting-edge single-page mobile website where simplicity meets innovation.. ",
    img:"/mobile.jpg",
    tags:["HTML","Tailwind CSS","Next.js"],
  },
  {
    id:2,
    title:"Furniture Website",
    desc:"Welcome to Funiro, your premier online destination for stylish, high-quality furniture and home decor ",
    img:"/funiro.png",
    tags:["HTML","Tailwind CSS","Next.js"],
  },
  {
    id:3,
    title:"Portfolio Website",
    desc:"Explore Areeba's digital footprint: a portfolio of innovative projects, designs, and code",
    img:"/portfolio.jpg",
    tags:["HTML","Tailwind CSS","Next.js"],
  },
  {
    id:4,
    title:"Static Interactive Resume",
    desc:"Areeba's interactive resume: Where technology meets talent ",
    img:"/project1.jpeg",
    tags:["HTML","CSS","JavaScript"],
  },
  {
    id:5,
    title:"Shareable Resume Builder",
    desc:"Craft and share your professional story with my shareable resume, a seamless resume builder for today's job market.",
    img:"/shareable.png",
    tags:["HTML","CSS","JavaScript"],
  },
]


const Projects = () => {
  return (
    <div id='projects' className='projects-container'>
    <Heading title="My Projects"/>
    <div className='projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-center'>
      {data.map((el)=>(
        <Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />
      ))}
    </div>
    </div>
  )
}

export default Projects