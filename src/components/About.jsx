import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                About
            </p>
            </div>
        

        <p className='text-xl mt-20'>
            Hi! My name is Josh. I am 17 years old and I am a self-taught programmer. I am in my second last year of
            high school and plan to travel abroad to study Computer Science and Game Development.
            I've been coding for around 4 years, ever since the age of 12, beginning with Scratch, moving
            to Python, where I spent a year coding Discord bots in the Discord.py framework.
            Through my constant love of Minecraft, I began dabbling into the area of Plugin
            development using the Spigot API, which most of my projects are 
            currently made in.
        </p>

        <br/>
        <br/>
        <br/>

        <p className='text-xl'>
            The dog you can see in the picture above is my lovely dog Ruby! She is 3 as of February 2023, and
            has been at my side ever since she joined the family!
            Although I am German, I live in the rainy land of Ireland.
            I have to admit, it's quite boring here, and the weather is awful all days
            of the year.
            I spent most of my time coding or watching anime, and searching for a job.
            So far I've been unsuccessful in finding a job, but I'm not giving up hope.
            You can find a list of my favorite animes in the navigation bar above.
        </p>
        </div>
    </div>
  )
}

export default About