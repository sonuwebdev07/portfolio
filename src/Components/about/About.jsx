import React from 'react'

const About = () => {
  return (
    <div id='about'>
      <div className="text-white text-3xl text-center my-12">About <span className='text-purple-500'>Me</span></div>
      <div>
        <div className="flex flex-col items-center sm:flex-row sm:gap-32 p-4">
          <div>
            <img className="max-w-80 rounded-[50%]" src="images/about-img.jpg" alt="about" />
          </div>
          <div className='flex content-center'>
          <div className="text-white my-14 sm:flex-col">Hello! I'm Sonu, a Web Developer. With a passion for Web Developing, I am seeking for experience and a commitment to be perfect.<br />In my journey, I've had the privilege of gainining knowledge with best teachers These experiences have shaped my skills in Python Full Stack.I believe in <span className='text-purple-500'>Hardwork always pay back</span>. My goal is to be a sr. web developer, and I am dedicated to make a unique position in our field.</div>
          </div>
        </div>
        <button className="">Contact me</button>
      </div>
    </div>
  )
}

export default About
