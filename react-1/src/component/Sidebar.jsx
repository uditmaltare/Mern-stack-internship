import React from 'react'

export default function Sidebar() {
  return (
    <div className='text-xl text-white bg-gray-700 w-[300px] h-[530px]   left-0  p-5'>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  )
}
