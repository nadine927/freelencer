/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import BackgroundImage from '../Images/image 1.png'
import { FrontEndEnums } from '../utils/enum'
export default function check(){
    return(
        <>
        <div className="h-screen w-full">
        <img src={BackgroundImage} className="w-full h-screen absolute" />
        <div className="h-20 w-1/2 relative">
            <div className="flex justify-evenly h-20 w-full">
            <a className="pt-14 text-gold font-bold text-xl" href={FrontEndEnums.Home} >HOME</a>
            <a className="pt-14 text-white text-xl" href={FrontEndEnums.About}>About</a>
            <a className="pt-14 text-white  text-xl" href={FrontEndEnums.Service}>Services</a>
            <a className="pt-14  text-white text-xl" href={FrontEndEnums.Support }>Support</a>
            <a className="pt-14 text-gold font-bold text-xl" href={FrontEndEnums.JoinCommunity }>Join our Community</a>
            </div>
        </div>
        <div className='relative z-20 mt-72 px-12' >
        <p className='text-white font-bold text-2xl'><span className='text-gold px-2'>WE ARE</span>NIGHT DEVELOPERS</p>
        <p className='text-white mt-2 px-2'> Hire affordable professinal individual or a team of freelancers</p>
        <p className='text-white px-2'>We are here to faster your work, and deadlines to help your stay the best</p>
        <div className="grid grid-cols-2 ">

            <div   className='w-3/4 h-22 flex' >
            <div className="flex grid-cols-2 mx-3 mt-5 border-2 border-gold w-80 h-12">
                <button className="px-2 py-2 text-white ml-16 font-bold">Hire a pro a freelancer</button>
            </div>

                <div className="flex w-40 h-12 mt-5 mx-3 bg-gold">
                <div className="px-2 py-2">
                    <button className=" text-white font-bold ml-7 mt-1 ">Hire a team</button>
                </div>
                </div>
    </div>
   </div>
   </div>
        </div>

        </>
    )
}