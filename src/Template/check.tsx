import React from 'react'
import BackgroundImage from '../../src/Template/pictures/lion.png'
export default function check(){
    return(
        <>
        <div className="h-screen w-full">
        <img src={BackgroundImage} className="w-full h-screen absolute" />
        <div className="h-20 w-3/4 relative">
            <div className="flex justify-evenly h-20 ml-2">
            <a className="pt-14 text-amber-300 font-bold text-xl " href="" >HOME</a>
            <a className="pt-14 text-white text-xl " href="">About</a>
            <a className="pt-14 text-white text-xl" href="">Services</a>
            <a className="pt-14 text-white text-xl" href="">Support</a>
            <a className="pt-14 text-white text-xl" href="">Find job</a>
            <a className="pt-14 text-amber-300 font-bold text-xl" href="">Join our Community</a>
            </div>
        </div>
        <div className='relative z-20 mt-72 px-12' >
        <p className='text-white font-bold text-2xl'><span className='text-amber-300 px-2'>WE ARE</span>NIGHT DEVELOPERS</p>
        <p className='text-white mt-2 px-2'> Hire affordable professinal individual or a team of freelancers</p>
        <p className='text-white px-2'>We are here to faster your work, and deadlines to help your stay the best</p>
        <div className="grid grid-cols-2 ">

            <div   className='w-3/4 h-22 flex' >
            <div className="flex grid-cols-2 mx-3 mt-5 border-2 w-80 h-12">
                    <button className="px-2 py-2 text-white font-bold">Hire a pro a freelancer</button>
                </div>

                <div className="flex border-2 border-white-300 w-40 h-12 mt-5 mx-3 bg-amber-400">
            <div className="px-2 py-2">
                    <button className=" text-white font-bold ">Hire a team</button>
                </div>
                </div>
    </div>
   </div>
   </div>
        </div>
        
        </>
    )
}