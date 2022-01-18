/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Navbar from './Navbar'
import Background from './Background'
export default function Home(){


    return(
        <>
        <div className="h-screen w-full">
        <Background/>
        <Navbar/>

        <div className='relative z-20 mt-72 px-12 ml-12' >
        <p className='text-white font-bold text-3xl'><span className='text-gold px-2'>WE ARE</span>NIGHT DEVELOPERS</p>
        <p className='text-white text-lg mt-2 px-2'> Hire affordable professinal individual or a team of freelancers</p>
        <p className='text-white text-lg px-2'>We are here to faster your work, and deadlines to help your stay the best</p>
        <div className="grid md:grid-cols-2 ">

            <div   className='w-full md:w-3/4 h-22 flex' >
            <div className=" w-1/2 flex grid-cols-2  mt-5 border-2 border-gold md:w-80 h-12">
                <button className="px-2 py-2 mx-6 text-white text-lg md:text-md font-bold">Hire a pro freelancer</button>
            </div>

                <div className="flex w-1/2 md:w-40 h-12 mt-5 mx-3 bg-gold">
                <div className="px-2 py-2">
                    <button className=" text-white text-lg font-bold ml-7 mt-1 ">Hire a team</button>
                </div>
                </div>
         </div>
   </div>
   </div>
        </div>

        </>
    )
}