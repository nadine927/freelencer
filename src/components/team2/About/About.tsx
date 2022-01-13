/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import image from '../../Images/image 1.png'
import { FrontEndEnums } from '../../utils/enum'

export default function About (){

    return(
        <>
       <div className="">
          <div className='w-full h-full absolute'>
                <img src={image} className='w-full h-full'/>
          </div>
          <div className="h-20 w-1/2 relative">
            <div className="flex justify-evenly h-20 w-full">
            <a className="pt-14 text-white text-xl" href={FrontEndEnums.Home} >HOME</a>
            <a className="pt-14 text-gold font-bold text-xl" href={FrontEndEnums.About}>About</a>
            <a className="pt-14 text-white  text-xl" href={FrontEndEnums.Service}>Services</a>
            <a className="pt-14  text-white text-xl" href={FrontEndEnums.Support }>Support</a>
            <a className="pt-14 text-gold font-bold text-xl" href={FrontEndEnums.JoinCommunity }>Join our Community</a>
            </div>
        </div>

            <div className="relative z-20 mt-48 pl-16 text- text-white">
               <p>We enable companies, individual and privates to successfully work together in a<br></br>
                   professional virtual colaboration, with trusted environment.
               </p><br></br>
               <p>We focus exculsively in high quality and cost-effective and implementation of<br></br> services.
                   we are advancing on a tremendous pace and with involvemrnt of skilled<br></br> and experienced people working
                   in the organization
               </p>
             </div>

            <div className='flex justify-content grid-grid-col-3 gap-4 text-2xl relative z-20 mt-12 pl-12'>
                <div className="h-12 py-2 w-26 border-2 border-gold text-xl px-8 text-white"><p><b>Web Based App Dev</b></p></div>
                <div className="h-12 py-2 w-26 border-2 border-gold text-xl border-border-4 px-8 text-white"><p><b>Mobil App Dev</b></p></div>
                <div className="h-12 py-2 w-26 border-2 border-gold text-xl border-border-4 px-8 text-white"><p><b>USSD Dev</b></p></div>

            </div>

        </div>

        </>
    )
}