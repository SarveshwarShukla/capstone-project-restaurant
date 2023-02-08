import React from 'react'

import image2 from '../assets/image2.svg'

const Header = () => {
  return (
    <div className="min-h-screen flex px-10 items-center mt-[20px]">
      <div className="left w-1/2">
        <img src={image2} alt="" className='w-[90%]' />
      </div>
      <div className="right flex gap-4 text-start flex-col items-start justify-center w-auto ml-10">
        <h1 className='text-5xl font-bold'>Welcome to CP Restaurant</h1>
        <h3 className='text-2xl font-medium w-[500px]'>The Restaurant which takes care of your health as well along with the taste. Happy Eating.</h3>
        <button className='bg-orange-500 px-8 py-4 text-xl rounded-md mt-10'>
        <a href="#about">Welcoming you inside &rarr;</a>
         </button>
      </div>
    </div>
  )
}

export default Header