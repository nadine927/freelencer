/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import image from '../Images/image 1.png'
import { FrontEndEnums } from '../utils/enum'
import Navbar from './Navbar'
import Background from './Background'

export default function About (){

    return(
        <>
       <div className="h-full w-full bg-mobile ">
        <Background/>
         <Navbar/>

            <div className="relative mt-52 md:mt-80 md:w-1/2 w-5/6 ml-5 text-white">
               <p className='md:ml-11'>We enable companies, individual and privates to successfully
               work together in a<br></br>
                   professional virtual colaboration, with trusted environment.
               </p><br></br>
               <p className='md:ml-11'>We focus exculsively in high quality and cost-effective and implementation of<br></br> services.
                   we are advancing on a tremendous pace and with involvemrnt of skilled<br></br> and experienced people working
                   in the organization
               </p>
             </div>

            <div className='text-2xl md:ml-16 ml-6 md:flex h-44 w-5/6 md:w-1/2 relative mt-2'>
                <div className="md: mt-2 h-12 py-2 w-26 border-2 border-gold text-xl text-white px-8"><p><b>Web Based App Dev</b></p></div>
                <div className="mt-2 md:ml-2 h-12 py-2 w-26 border-2 border-gold text-xl border-border-4 px-8 text-white"><p><b>Mobil App Dev</b></p></div>
                <div className="mt-2 md:ml-2 h-12 py-2 w-26 border-2 border-gold text-xl border-border-4 px-8 text-white"><p><b>USSD Dev</b></p></div>

            </div>

        </div>

        </>
    )
}