import React from 'react'
import demon from "../assets/demonslayer.jpg";
import spyxfamily from "../assets/spyxfamily.jpg";
import csm from "../assets/csm.png";
import Portfolio from './Portfolio';



const Anime = () => {
    const animes = [
        {
            id: 1,
            src: spyxfamily,
            crunchy: "https://www.crunchyroll.com/series/G4PH0WXVJ/spy-x-family",
            animedao: "https://animedao.to/anime/spy-x-family/",
        },
        {
            id: 2,
            src: csm,
            crunchy: "https://www.crunchyroll.com/series/GVDHX8QNW/chainsaw-man",
            animedao: "https://animedao.to/anime/chainsaw-man/",
        },
        {
            id: 3,
            src: demon,
            crunchy: "https://www.crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba",
            animedao: "https://animedao.to/anime/demon-slayer-kimetsu-no-yaiba/",
        },
    ]


  return (
    <div name='anime' className='bg-gradient-to-b from-black to-gray-900 w-full text-white
    md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 '>
                <p className='text-4xl inline font-bold border-b-2 border-gray-500'>Anime List</p>
                <p className='py-6'>Here's a list of some of the anime I watch.</p>

            </div>

            

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

            {
                animes.map(({id, src, crunchy, animedao}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    
                    <img src={src} alt='csm' className='rounded-md duration-200 hover:scale-110'></img>

                    <div className='flex items-center justify-center'>
                        <a href={crunchy}>
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110">Crunchyroll</button>
                        </a>
                        <a href={animedao}>
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110">Animedao</button>

                        </a>
                    </div>
                </div>
                ))
            }
               
            </div>
        </div>
    </div>
  )
}

export default Anime