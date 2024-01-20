import React from 'react'

function Navbar() {
  return (
    <div className='text-white flex justify-between items-center h-24 mx-auto max-w-[1240px] '>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Optimal Audit</h1>
        <ul className='flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Servises</li>
            <li className='p-4'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar