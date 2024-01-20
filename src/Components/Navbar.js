import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

function Navbar() {
    const [nav, setNav] = useState(false);

    const handleNav = () =>{
        setNav(!nav);
    }
  return (
    <div className='text-white flex justify-between items-center h-24 mx-auto max-w-[1240px] '>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Optimal Audit</h1>
        <ul className='flex hidden'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Servises</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div>
            <AiOutlineMenu size={20} />
        </div>
        <div className='fixed left-0 top-0 w-[20%] h-full border-r border-r-gray-900 bg-[#000300]'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Optimal Audit</h1>
            <ul className='p-4'>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>Company</li>
                <li className='p-4 border-b border-gray-600'>About</li>
                <li className='p-4 border-b border-gray-600'>Servises</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar