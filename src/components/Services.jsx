import React from 'react'

import image1 from '../assets/image1.svg'
import image3 from '../assets/image3.svg'
import image5 from '../assets/image5.svg'
import image6 from '../assets/image6.svg'

const servicesData = [
  { image: image3, text: 'We provide you with fresh and healthy food. We ensure that the food you eat is as fresh as possible. We also provide you with a way to connect with nearby fruit sellers and get fresh fruits delivered to your doorstep.', side: 0 },
  { image: image6, text: 'Why we should not eat fast foods? Fast foods typically contain multiple chemicals and synthetic ingredients which are not good for the health. They can cause many health issues like obesity, heart diseases, etc. ', side: 1 },
  { image: image1, text: 'Instead of eating fast foods, you can eat healthy foods which are good for your health. Fruits and vegetables are the best source of vitamins and minerals. They are also rich in fiber and antioxidants, and are also low in calories and fat.', side: 0 },
  { image: image5, text: 'In the process, the local fruit sellers also get more visibility and get chance to increase their overall reach, which in a way promotes vocal for local', side: 1 },
]

const Services = () => {
  return (
    <div className='py-[100px] bg-orange-500' id="services">
        <h1 className="text-center text-4xl font-semibold mb-20">What we offer and why</h1>
      <div className="bottom flex flex-col gap-5 w-max m-auto">
        {servicesData.map((item, index) => (
          <div key={index} className="flex items-center gap-5 bg-white justify-around py-10 rounded-md px-10">
            {item.side === 0 && (
              <>
                <div className="left w-[500px]">
                  <img className='w-[100%]' src={item.image} alt="" />
                </div>
                <div className="right w-[600px]">
                  <p className="text-xl font-medium">{item.text}</p>
                </div>
              </>
            )}
            {item.side === 1 && (
              <>
              <div className="right w-[600px]">
                  <p className="text-xl font-medium">{item.text}</p>
                </div>
                <div className="left w-[500px]">
                  <img className='w-[100%]' src={item.image} alt="" />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services