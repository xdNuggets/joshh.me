import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='bg-gradient-to-b from-black to-gray-900 w-full text-white
    md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl inline font-bold border-b-2 border-gray-500'>Contact</p>
                <p className='py-6'>If you wish to contact me at all, please don't hesitate to send me
                    a direct message on Discord at Joshh#4071.
                    Otherwise, if it is something more serious where
                    you wouldn't like to risk others seeing your reason to contact me,
                    please shoot a DM over to jdogs2005@gmail.com.</p>
            
            </div>
        </div>
    </div>
  )
}

export default Contact