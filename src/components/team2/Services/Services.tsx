/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import BackgroundImage from '../../Images/image 1.png'
import { FrontEndEnums } from '../../utils/enum'


export default function Services (){

    return(
        <>
        <div className="h-screen w-full">
        <img src={BackgroundImage} className="w-full h-screen absolute" />
        <div className="h-20 w-1/2 relative">
            <div className="flex justify-evenly h-20 w-full">
            <a className="pt-14 text-white text-xl" href={FrontEndEnums.Home} >HOME</a>
            <a className="pt-14 text-white text-xl" href={FrontEndEnums.About}>About</a>
            <a className="pt-14 text-gold font-bold text-xl" href={FrontEndEnums.Service}>Services</a>
            <a className="pt-14 text-white text-xl" href={FrontEndEnums.Support }>Support</a>
            <a className="pt-14 text-gold font-bold text-xl" href={FrontEndEnums.JoinCommunity }>Join our Community</a>
            </div>
        </div>
        <div className="h-20 w-1/2  flex relative mt-6">
            <div className="h-10 w-1/2 ml-48 mt-6">
            <input type="text" placeholder=" Enter Key" className="h-10 w-full"  />
            </div>
            <div className="h-10 w-1/4 bg-gold mt-6">
                <button className="btn text-xl ml-16 mt-1  text-white">Search</button>
            </div>
        </div>
        <div className="h-40 w-1/2 relative mt-5">
        <div className="flex justify-evenly mt-1 ">
         <div className="h-10 w-44 border-solid border-2 border-gold ml-11 mt-2">
             <a href="">
            <h5 className="text-white text-center mt-1">Web Based App</h5>
            </a>
         </div>
         <div className="h-10 w-44  border-solid border-2 border-gold ml-11 mt-2">
            <a href="">
            <h5 className="text-white text-center mt-1">Mobile App Dev</h5>
            </a>
         </div>
         <div className="h-10 w-44 border-solid border-2 border-gold ml-11 mt-2">
            <a href="">
            <h5 className="text-white text-center mt-1">Ussd Dev</h5>
            </a>
         </div>
         <div className="h-10 w-44 border-solid border-2 border-gold ml-11 mt-2">
         <a href="">
            <h5 className="text-white text-center mt-1">UI/UX</h5>
            </a>
         </div>
         </div>

        </div>


        </div>
        </>
    )
}