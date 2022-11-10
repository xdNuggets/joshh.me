import React from 'react';
import HeroImage from "../assets/heroImage.png";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";


const Home = () => {
  return (
    <div 
    name="home" 
    className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'
    >
        <div className='max-w-screen-lg mx-auto flex flex-col 
        items-center jusitfy-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-2xl sm:text-6xl font-bold text-white '>Calmest Irish Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I primarily use Java and struggle using
                    Arch Linux together with Hyprland.
                    I am currently working with the Spigot API
                    and learning JavaScript. 
                    <br/>i use arch btw :)
                </p>

                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md 
                    bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 cursor-pointer'>
                        Projects 
                        <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25} className="ml-1"  />
                        </span>
                    </button>
                </div>
            </div>

            <div>
                <img src={HeroImage} 
                alt="my profile" 
                className='rounded-3xl w-3/6 md:w-3/5 mx-32'/>
            </div>

            
        </div>
    </div>
  )
}

export default Home