import React from 'react'

import image4 from '../assets/image4.svg'

const About = () => {
  return (
    <div>
      <div className="top mt-[150px] min-h-screen px-10" id="about">
        <h1 className="text-center text-4xl font-semibold">CP Restaurant - Started as a Capstone Project</h1>
        <h2 className="text-center text-2xl font-semibold mt-3">Now aiming to provide people healthy and fresh meals.</h2>
        <div className="bottom flex items-center">
          <div className="left w-1/2">
            <img src={image4} alt="" className='w-[90%]' />
          </div>
          <div className="right w-[600px]">
            <h1 className="text-3xl font-semibold">How we do it.</h1>
            <p className="text-xl font-medium mt-3">  We partner with nearby Fruit sellers and provide them a way to connect with more people to sell their fruits. We also provide them a way to sell their fruits online and get more customers. In the process, we ensure the eatables reaching to the common people stays as fresh as possible.</p>
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  )
}

export default About