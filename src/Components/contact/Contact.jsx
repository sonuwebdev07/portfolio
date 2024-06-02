import React from 'react'

const Contact = () => {
  return (
    <div id='contact'>
    <div className='text-white text-3xl text-center my-10'>Contact <span className='text-purple-500'>Me</span></div>
    
    <div className="container px-5 py-2 mx-auto flex sm:flex-nowrap flex-wrap justify-center">
      <form>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-white">Name</label>
          <input type="text" id="name" name="name" className="w-full bg-white rounded border border-purple-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-white">Email</label>
          <input type="email" id="email" name="email" className="w-full bg-white rounded border border-purple-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-white">Message</label>
          <textarea id="message" name="message" className="w-full bg-white rounded border border-purple-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
        <button className="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-700 rounded text-lg">Send Message</button>
      </form>
    </div>
    </div>
  )
}

export default Contact
