/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Navbar from './Navbar'
import Background from './Background'
export default function Home(){


    return(
        <>
        <div className="h-screen w-full ">
        <Background/>
        <Navbar/>

        <div className='relative pt-40 h-screen md:px-12  bg-mobile' >
        <p className='text-white font-bold text-2xl md:text-3xl ml-3'><span className='text-gold px-2'>WE ARE</span><span className='text-gold md:text-white'>NIGHT </span> <span>DEVELOPERS</span></p>
        <p className='text-white text-lg mt-2 px-2 ml-3'> Hire affordable professinal individual or a team of freelancers</p>
        <p className='text-white text-lg px-2 ml-3'>We are here to faster your work, and deadlines to help your stay the best</p>
        <div className="grid md:grid-cols-2 ml-3 ">


   </div>
   <div className='h-14 w-full mt-2  flex '>
       <div className='h-14 w-3/6 border-2 border-gold ml-4'>
            <h4 className='text-center text-white text-xl font-bold pt-2'>Hire a pro freelancer</h4>
       </div>
       <div className='h-14 w-1/3 bg-gold ml-3'>
       <h4 className='text-center text-white text-xl font-bold pt-3'>Hire a team</h4>
       </div>
    </div>
   </div>
        </div>

        </>
    )
}