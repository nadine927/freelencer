import React from 'react';
import image from '../../image/image.png'

export default function Support()
{
    return(
        <>
        <div>
            <img src={image} alt="" className="w-full  h-screen absolute" />
        
            <div className="flex">
            <div className="relative grid grid-cols-2 gap-4 mt-64 mx-28">
                <div className="border-2 border-amber-300  w-80">
                    <span className="px-3 text-white font-bold">Rwanda-Kigali</span>
                    <span className="px-3 flex flex-row text-white mt-2">Kigali@freelancers.rw</span>
                    <span className="px-3 flex flex-row text-white "><span className="text-amber-300 px-1">(+250)</span>789 548 265</span>
                </div>
                <div className="border-2 border-amber-300 w-80">
                    <span className="px-3 text-white font-bold">Tanzania-Dar es Salaam</span>
                    <span className="px-3 flex flex-row text-white mt-2">Darsalaam@freelancers.rw</span>
                    <span className="px-3 flex flex-row text-white "><span className="text-amber-300 px-1">(+250)</span>789 548 265</span>
                </div>
                <div className="border-2 border-amber-300 w-80">
                    <span className="px-3 text-white font-bold">Rdc-Goma</span>
                    <span className="px-3 flex flex-row text-white mt-2">Goma@freelancers.rw</span>
                    <span className="px-3 flex flex-row text-white "><span className="text-amber-300 px-1">(+250)</span>789 548 265</span>
                </div>
                <div className="border-2 border-amber-300 w-80">
                    <span className="px-3 text-white font-bold">Burundi-Bujumbura</span>
                    <span className="px-3 flex flex-row text-white mt-2">Bujumbura@freelancers.rw</span>
                    <span className="px-3 flex flex-row text-white "><span className="text-amber-300 px-1">(+250)</span>789 548 265</span>
                </div>
                <div className="border-2 border-amber-300 w-80">
                    <span className="px-3 text-white font-bold">Zimbabwe-Harare</span>
                    <span className="px-3 flex flex-row text-white mt-2">Harare@freelancers.rw</span>
                    <span className="px-3 flex flex-row text-white "><span className="text-amber-300 px-1">(+250)</span>789 548 265</span>
                </div>
                <div className="border-2 border-amber-300 w-80">
                    <span className="px-3 text-white font-bold">central Africa-Bangul</span>
                    <span className="px-3 flex flex-row text-white mt-2">Bangul@freelancers.rw</span>
                    <span className="px-3 flex flex-row text-white "><span className="text-amber-300 px-1">(+250)</span>789 548 265</span>
                </div>
                </div>
            </div>
            </div>
        
        </>
    )
}