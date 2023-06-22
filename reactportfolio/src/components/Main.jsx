import React from 'react';
import miladheader from '../assets/miladheader.jpg'
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedinIn} from 'react-icons/fa'
import WeatherFetch from './Weatherapp';


const Main = () => {
    return (
        <div id='main'>
            <img 
            className='w-full h-screen object-cover object-left' 
            src={miladheader} alt="header" /> 
            <div className='w-full h-screen absolute top-0 left-0 bg-white/10'> 
            <div className='font-light text-gray-800 flex flex-col justify-center items-center'>
                <WeatherFetch  />
              </div>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center'>
            
                <h1 className='sm:text-7xl text-4xl font-bold text-gray-800 mt-[-300px]'>Hi, Im Milad</h1>
                <h2 className='flex sm:text-1xl text-1xl pt-4 text-gray-800'>
                <TypeAnimation
      sequence={[
        'A UX/UI designer', // Types 'One'
        1000, // Waits 1s
        '& frontend developer', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
      
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', paddingLeft: '5px' }}
    /> 
                </h2>
                <div className= 'mt-5'>
                  
                <a href="https://github.com/Millebae">
                      <FaGithub className='cursor-pointer' size={20} /> 
                 </a>   
                 <div className='mt-5'>
                 <a href="https://www.linkedin.com/in/milad-r-3a208a157">
                      < FaLinkedinIn className='cursor-pointer' size={20} /> 
                 </a>   
                 </div>

                </div>

            </div>
            </div>
         </div>

    );
}

export default Main;






