import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='flex flex-col justify-center sm:flex-row sm:gap-96 mt-12 '>
        <div className='text-white ml-12 py-24 text-3xl text-center'>
          Hi, I am <span className='text-purple-500'>Sonu</span> <br />and I am a Passionate <br /><span className='text-purple-500'>Full Stack Web Developer</span>
        </div>
        <div className='flex justify-center'>
          <img className='w-72' src="images/bg-img.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
