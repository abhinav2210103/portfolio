import React, { useState, useEffect } from 'react';
import './App.css';
import b2 from './assets/b2.gif';
import hero from './assets/hero.png'
import hero4 from './assets/hero3.png'
import Navbar from './Components/Navbar';
import { Typewriter } from 'react-simple-typewriter'
import cpp from './assets/Cpp2.png'
import { FaInstagram, FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa';
import { FaHtml5, FaCss3, FaReact, FaJs, FaCuttlefish , FaCode } from 'react-icons/fa';
const activities = [' Web Development',' Competitive Coding'];
const initialDelay = 2000;
const letterDelay = 150;

function Home() {
  const [isHero2, setIsHero2] = useState(false);
  const handleImageClick = () => {
    setIsHero2((prev) => !prev);
  };
  return (
    <>
      <Navbar/>
      {/* Home Section */}
      <div className='bg-cover h-screen' style={{ backgroundImage: `url(${b2})` }}>
      <div className='pt-10 md:hidden flex justify-center' onClick={handleImageClick}>
         <img
          src={isHero2 ? hero4 : hero}
          className='rounded-full'
          style={{height:200 , width:200}}
          />
         </div>

        <div className='flex md:ml-5'>
        <div className='md:pl-20 md:pt-28 pt-5 pl-5 flex-col md:w-[65%]'>
          <div className='md:text-[3rem] text-[2rem] text-[#000066] font-semibold font-mono'>Hi There,</div>
          <div className='flex md:gap-3 gap-2  flex-wrap'>
            <div className='text-[2rem] md:text-[3rem] text-[#000066] font-semibold font-mono'>
              I'm Abhinav
            </div>
            <div className='md:text-[3rem] text-[2rem] text-[#ff9900] font-semibold font-mono'>
              Mishra
            </div>
          </div>
          <div className='md:flex flex-wrap '>
            <div className='text-[2rem] md:text-[3rem] text-[#000066] font-semibold font-mono mr-10 md:mr-0'>
              I Am Into
            </div>
            <span className='w-50 overflow-hidden'>
            <span className='md:pl-4 text-[#ff9900] md:text-[3rem] text-[2rem] font-semibold font-mono'>
            <Typewriter
             words={['Web Development','Competitive Coding']}
             loop={0}
             cursor
             cursorStyle='|'
             typeSpeed={130}
             deleteSpeed={100}
             delaySpeed={1000}
            />
              </span>
            </span>
          </div>
          <div className=''><button className='border-2 bg-[#000066] text-white px-5 py-3 text-[1.5rem] font-medium rounded-3xl font-mono' > About Me</button></div>
          <div className='gap-4 mt-4 flex'>
            <div>  <a href="https://www.linkedin.com/in/abhinav-mishra-b95301258/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={42} />
                    </a>
            </div>
            <div>  <a href=" https://www.instagram.com/abhinav_mishra29" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={42} /> 
                    </a>
            </div>
            <div>  <a href="https://github.com/abhinav2210103" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={42} /> 
                    </a>
            </div>
            <div>  <a href="https://twitter.com/abhinavetw" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={42} /> 
                    </a>
            </div>
          </div>
          {/*<div className='md:text-[2rem] text-[2rem] text-[#000066] font-semibold font-mono'>Skills - </div>
          <div className='flex gap-4'>
           <div className='pt-2'><FaHtml5 size={42} /></div>
           <div className='pt-2'><FaCss3 size={42} /></div>
           <div className='pt-2'><FaJs size={42} /></div>
           <div className='pt-2'><FaReact size={42} /></div>
           <div><img src={cpp}  style={{ width: 55, height: 55 }}/></div>
           </div>*/}
        </div>
         <div> 
         <div className='flex-col pt-10 md:flex hidden' onClick={handleImageClick}>
        <img
          src={isHero2 ? hero4 : hero}
          className='rounded-full'
          style={{height:500}}
        />
      </div>
         </div>
         </div>
      </div>
     {/* Home Section Ends */}
    </>
  );
}
export default Home;

