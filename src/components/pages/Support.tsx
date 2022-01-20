import React from 'react';
import image from '../Images/image 1.png'
import { FrontEndEnums } from '../utils/enum'
import Background from './Background'
import Navbar from './Navbar'

export default function Support()
{
    return(
        <>
        <div className=" bg-mobile">
       <Background/>
       <Navbar/>
       </div>
       
            <div className="flex bg-mobile">
            <div className="relative w-full mt-64 md:mt-64 mx-10 ">
                <div className='w-full md:flex'>
                <div className="border-2 mt-3 md:border-2 border-gold md:w-80 md:mr-3 ">
                    <span className="px-3 text-white font-bold">Rwanda-Kigali</span>
                    <span className="px-3 flex flex-row text-white mt-2">Kigali@freelancers.rw</span>
                    <span className="px-3 flex flex-row text-white "><span className="text-amber-300 px-1">(+250)</span>789 548 265</span>
                </div>
                <div className="border-2 mt-3 md:border-2 border-gold w-full md:w-80 md:">
                    <span className="px-3 text-white font-bold">Tanzania-Dar es Salaam</span>
                    <span className="px-3 flex flex-row text-white mt-2">Darsalaam@freelancers.rw</span>
                    <span className="px-3 flex flex-row text-white "><span className="text-gold px-1">(+250)</span>789 548 265</span>
                </div>
                </div>
                <div className="w-full md:flex">
                <div className="border-2 mt-3 md:border-2 border-gold w-full md:w-80 md:mr-3">
                    <span className="px-3 text-white font-bold">Rdc-Goma</span>
                    <span className="px-3 flex flex-row text-white mt-2">Goma@freelancers.rw</span>
                    <span className="px-3 flex flex-row text-white "><span className="text-amber-300 px-1">(+250)</span>789 548 265</span>
                </div>
                <div className="border-2 mt-3 md:border-2  border-gold w-full md:w-80">
                    <span className="px-3 text-white font-bold">Burundi-Bujumbura</span>
                    <span className="px-3 flex flex-row text-white mt-2">Bujumbura@freelancers.rw</span>
                    <span className="px-3 flex flex-row text-white "><span className="text-gold px-1">(+250)</span>789 548 265</span>
                </div>
                </div>
                <div className="w-full md:flex">
                <div className="border-2 mt-3 md:border-2 border-gold w-full md:w-80 md:mr-3">
                    <span className="px-3 text-white font-bold">Zimbabwe-Harare</span>
                    <span className="px-3 flex flex-row text-white mt-2">Harare@freelancers.rw</span>
                    <span className="px-3 flex flex-row text-white "><span className="text-gold px-1">(+250)</span>789 548 265</span>
                </div>
                <div className="border-2 mt-3 md:border-2 border-gold w-full md:w-80">
                    <span className="px-3 text-white font-bold">central Africa-Bangul</span>
                    <span className="px-3 flex flex-row text-white mt-2">Bangul@freelancers.rw</span>
                    <span className="px-3 flex flex-row text-white "><span className="text-gold px-1">(+250)</span>789 548 265</span>
                </div>
                </div>
                </div>
            </div>


        </>
    )
}