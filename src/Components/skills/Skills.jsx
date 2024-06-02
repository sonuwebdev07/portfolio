import React from 'react'

const Skills = () => {
  return (
    <div className='p-4' id='skills'>
      <div className='text-white text-center text-3xl mb-12'>Skills</div>

     <div className='flex gap-12 justify-center'>
     <div className='text-white w-96'>
     <div className='mb-3'>Front<span className='text-purple-500'>end</span></div>
     <div>HTML</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-purple-600 h-2.5 rounded-full" style={{width: "75%"}}></div>
      </div>
     <div>CSS</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-purple-600 h-2.5 rounded-full" style={{width: "80%"}}></div>
      </div>
     <div>Javascript</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-purple-600 h-2.5 rounded-full" style={{width: "65%"}}></div>
      </div>
     <div>Bootstrap</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-purple-600 h-2.5 rounded-full" style={{width: "90%"}}></div>
      </div>
     <div>React js with Redux Toolkit</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-purple-600 h-2.5 rounded-full" style={{width: "85%"}}></div>
      </div>
     </div>
     <div className='text-white w-96'>
     <div className='mb-3'>Back<span className='text-purple-500'>end</span></div>
     <div>Django</div>
     <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
       <div className="bg-purple-600 h-2.5 rounded-full" style={{width: "75%"}}></div>
     </div>
     </div>
     <div className='text-white w-96'>
     <div className='mb-3'>Data<span className='text-purple-500'>bases</span></div>
     <div>MySQL</div>
     <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
       <div className="bg-purple-600 h-2.5 rounded-full" style={{width: "75%"}}></div>
     </div>
     <div>Mongo DB</div>
     <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
       <div className="bg-purple-600 h-2.5 rounded-full" style={{width: "70%"}}></div>
     </div>
     </div>
     </div>
    </div>
  )
}

export default Skills
