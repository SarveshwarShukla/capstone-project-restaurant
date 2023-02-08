import React from 'react'
import logo from '../assets/logo.svg'

const navbarItems = [
  { name: 'Home', link: '#' },
  { name: 'About', link: '#about' },
  { name: 'Services', link: '#services' },
  { name: 'FAQs', link: '#faq' },
]

const Navbar = () => {
  return (
    <div className='flex justify-between bg-orange-500 p-5 px-10'>
      <div className="left font-bold flex justify-center items-center">
        <img className='h-5' src={logo} alt="" />
      </div>
      <div className="middle flex items-center">
        <ul className='flex gap-5 font-medium cursor-pointer'>
          {navbarItems.map((item, index) => (
            <li key={index} className="px-3 py-2 hover:bg-white hover:text-black rounded-md transition-all">
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="right">
        <button className='bg-white px-8 py-2 rounded-md' >Sign In</button>
      </div>
    </div>
  )
}

export default Navbar