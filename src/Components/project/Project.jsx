import React from 'react'

const Project = () => {
  return (
    <div id='projects'>
      <div className='text-white text-center text-3xl mt-12'>Projects</div>
      <div>
      <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src="images/project-01.png"/>
            </div>
            <h2 className="text-xl font-medium title-font text-purple-500 mt-5">Coffee Shop</h2>
            <p className="text-base leading-relaxed mt-2">Technology used: HTML CSS <p>It's a Responsive Coffee Website where you can buy coffee and visit to gallery and Blogs.</p></p>
            <a href ="https://github.com/sonuwebdev07/Coffee_Shop.git" target='_blank' className="text-indigo-500 inline-flex items-center mt-3">GitHub Code
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src="images/project-02.png"/>
            </div>
            <h2 className="text-xl font-medium title-font text-purple-500 mt-5">Health Care Project</h2>
            <p className="text-base leading-relaxed mt-2">Technology used:
            <p>Front-end : Templates, Static</p>
            <p>Back-end : Models, Views, urls</p>
            <p>Database : Mysql </p>
            <p>It is a proper Working health care website where you can read about services, departments, doctors and book an appointent with specialist doctor from related department.</p></p>
            <a href='https://github.com/sonuwebdev07/health_care_project.git' target='_blank' className="text-indigo-500 inline-flex items-center mt-3">GitHub Code
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src="images/project-03.png"/>
            </div>
            <h2 className="text-xl font-medium title-font text-purple-500 mt-5">Redux Ecom Project</h2>
            <p className="text-base leading-relaxed mt-2">Technology used: JSX, CSS, BOOTSTRAP , Material UI, React + Vite, React Redux, Redux Toolkit
            <p>It's a proper Working ecom site where you can add, remove, increase qty, decrease qty of products in cart with the help of redux store.</p></p>
            <a href='https://github.com/sonuwebdev07/redux-app.git' target='_blank' className="text-indigo-500 inline-flex items-center mt-3">GitHub Code
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
      </div>
    </div>
    
  )
}

export default Project
