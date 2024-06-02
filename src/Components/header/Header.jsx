import React from 'react'

const Header = () => {
  return (
    <header className="text-white  body-font bg-purple-900">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <span className="ml-3 text-xl">Sonu's Portfolio</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:cursor-pointer" href='#'>Home</a>
      <a className="mr-5 hover:cursor-pointer" href='#about'>About</a>
      <a className="mr-5 hover:cursor-pointer" href='#skills'>Skills</a>
      <a className="mr-5 hover:cursor-pointer" href='#projects'>Projects</a>
      <a className="mr-5 hover:cursor-pointer" href='#contact'>Contact Me</a>
    </nav>
  </div>
</header>
  )
}

export default Header
