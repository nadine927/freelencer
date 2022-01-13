import React from 'react';
import image from '../Images/image 1.png'
import { FrontEndEnums } from '../utils/enum'

export default function Support()
{
    return(
        <>
        <div>
            <img src={image} alt="" className="w-full  h-screen absolute" />
        <div className="h-20 w-1/2 relative">
            <div className="flex justify-evenly h-20 w-full">
            <a className="pt-14 text-white text-xl" href={FrontEndEnums.Home} >HOME</a>
            <a className="pt-14 text-white text-xl" href={FrontEndEnums.About}>About</a>
            <a className="pt-14 text-white  text-xl" href={FrontEndEnums.Service}>Services</a>
            <a className="pt-14 text-gold font-bold text-xl" href={FrontEndEnums.Support }>Support</a>
            <a className="pt-14 text-gold font-bold text-xl" href={FrontEndEnums.JoinCommunity }>Join our Community</a>
            </div>
        </div>
            <div className="flex">
            <div className="relative grid grid-cols-2 gap-4 mt-64 mx-28">
                <div className="border-2 border-gold  w-80">
                    <span className="px-3 text-white font-bold">Rwanda-Kigali</span>
                    <span className="px-3 flex flex-row text-white mt-2">Kigali@freelancers.rw</span>
                    <span className="px-3 flex flex-row text-white "><span className="text-amber-300 px-1">(+250)</span>789 548 265</span>
                </div>
                <div className="border-2 border-gold w-80">
                    <span className="px-3 text-white font-bold">Tanzania-Dar es Salaam</span>
                    <span className="px-3 flex flex-row text-white mt-2">Darsalaam@freelancers.rw</span>
                    <span className="px-3 flex flex-row text-white "><span className="text-gold px-1">(+250)</span>789 548 265</span>
                </div>
                <div className="border-2 border-gold w-80">
                    <span className="px-3 text-white font-bold">Rdc-Goma</span>
                    <span className="px-3 flex flex-row text-white mt-2">Goma@freelancers.rw</span>
                    <span className="px-3 flex flex-row text-white "><span className="text-amber-300 px-1">(+250)</span>789 548 265</span>
                </div>
                <div className="border-2 border-gold w-80">
                    <span className="px-3 text-white font-bold">Burundi-Bujumbura</span>
                    <span className="px-3 flex flex-row text-white mt-2">Bujumbura@freelancers.rw</span>
                    <span className="px-3 flex flex-row text-white "><span className="text-gold px-1">(+250)</span>789 548 265</span>
                </div>
                <div className="border-2 border-gold w-80">
                    <span className="px-3 text-white font-bold">Zimbabwe-Harare</span>
                    <span className="px-3 flex flex-row text-white mt-2">Harare@freelancers.rw</span>
                    <span className="px-3 flex flex-row text-white "><span className="text-gold px-1">(+250)</span>789 548 265</span>
                </div>
                <div className="border-2 border-gold w-80">
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