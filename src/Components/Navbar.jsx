 import React from "react";
 import { useState } from "react";
 import { FaBars } from "react-icons/fa";
 import Symbol from '../assets/Symbol.png';
 import { Link } from "react-router-dom";
 function Navbar () {
  const [showMenu, setShowMenu] = useState(false);
    
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
return(
    <div className='flex justify-between md:p-5 md:pb-2 p-3 pb-1 bg-[#f7f7f7] md:border-b-4 border-b-2'>
    <div className='flex md:ml-20 justify-center'>
      <img src={Symbol} alt='Logo' />
    </div>
    <ul className='md:flex hidden gap-6  text-[1.5rem] font-semibold justify-center items-center'>
       
      <Link to='/'><li className='hover:underline hover:text-sky-600 cursor-pointer hover:underline-offset-8 font-mono'>Home</li></Link>
      <li className='hover:underline hover:text-sky-600 cursor-pointer hover:underline-offset-8 font-mono'>About</li>
      <li className='hover:underline hover:text-sky-600 cursor-pointer hover:underline-offset-8 font-mono'>Skills</li>
      <li className='hover:underline hover:text-sky-600 cursor-pointer hover:underline-offset-8 font-mono'>Projects</li>
      <li className='hover:underline hover:text-sky-600 cursor-pointer hover:underline-offset-8 font-mono'>Contact</li>
    </ul>
    <div className="md:hidden flex items-center" onClick={toggleMenu}>
      <FaBars size="1.5em" />
    </div>
    <ul className={`lg:hidden ${showMenu ? "flex-col" : "hidden"} flex-col justify-center items-center absolute w-full top-20 right-0 bg-white border-2 border-sky-600`}>
      <Link to='/'><li className='flex justify-center text-[1.5rem] hover:text-sky-600 font-mono'>Home</li></Link>
      <li className='flex justify-center text-[1.5rem] hover:text-sky-600 font-mono'>About</li>
      <li className='flex justify-center text-[1.5rem] hover:text-sky-600 font-mono'>Skills</li>
      <li className='flex justify-center text-[1.5rem] hover:text-sky-600 font-mono'>Projects</li>
      <li className='flex justify-center text-[1.5rem] hover:text-sky-600 font-mono'>Contact</li>
    </ul>
  </div>
)
 }
 export default Navbar