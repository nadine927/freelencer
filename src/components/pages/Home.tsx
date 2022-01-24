/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import Background from './Background'
import Aos from "aos"
import "aos/dist/aos.css"
import { AiFillCaretDown } from "react-icons/ai";
import { FrontEndEnums } from '../utils/enum'



export default function Home(){

    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);

    const[show, setShow]=useState(false)
    const[wnd, setwnd]= useState(true)
    const showContent=()=>{
        setShow(true)
        setwnd(false)
    }

    const HideContent=()=>{
        setShow(false)
        setwnd(true)
    }

    return(
        <>
        <div className="h-screen w-full bg-mobile ">
        <Background/>
        <Navbar/>

        {show?
        <div data-aos="fade-down" className='h-full bg-mobile md:mt-32 mt-52 md:ml-16 md:w-2/5 font-Poppins relative'>
           <div  className='h-16 w-full md:ml-0 ml-5 md:w-full'>
               <p className='text-white md:text-md md:mb-5 text-base '>Work with an individual freelancer of your choice, schedure time share ideas and payment. You will thank us later.
               </p>
           </div>
           <div className='h-16 w-5/6 md:w-full  md:ml-0 ml-5 flex mt-3 md:mt-2'>

               <div className='h-8 w-1/2 rounded-sm '>
                   <label htmlFor="" className='text-white'>Firstname</label>
                   <input type="text" className='h-full w-full px-4 outline-none' />

               </div>
               <div className='h-8 w-1/2 ml-2 rounded-sm'>
               <label htmlFor="" className='text-white'>Lastname</label>
                   <input type="text" className='h-full w-full px-4 outline-none' />
               </div>
           </div>
           <div className='h-8 w-5/6 md:w-full md:ml-0 ml-5 mt-2 rounded-sm'>
           <label htmlFor="" className='text-white'>Email</label>
           <input type="text" className='h-full w-full px-4 outline-none' />
           </div>

           <div className='h-16 w-5/6 md:w-full md:ml-0 ml-5 mt-8 rounded-sm '>
            <label htmlFor="" className='text-white'>Choose service category</label>
           <div className='flex h-8 w-full'>
           <input type="text" className='h-full w-5/6 px-4 outline-none mt-0' placeholder='Choose category' />
           <div className='bg-white w-10 mt-0 h-8'>

           </div>
           <div className='h-8 w-14 bg-green-500 mt-0'>
            <AiFillCaretDown style={{color:'white'}} size={30} className='ml-3 mt-0.5' />
           </div>
           </div>
           </div>
           <div className='mt-2'>
           <label htmlFor="" className='text-white ml-5 md:ml-0'>How I am willing to pay</label>
           </div>

           <div className='mt-0 h-36 w-5/6 ml-5 md:ml-0 md:w-full  flex'>

            <div className='h-36 w-1/3'>

             <div className='h-8 w-full bg-white'>
             <input type="text" className='h-full w-full rounded-sm px-4 outline-none mt-0' placeholder='Fixed Prices'  />
             </div>
             <div className='h-8 w-full mt-4 bg-white'>
             <input type="text" className='h-full w-full rounded-sm px-4 outline-none mt-0' placeholder='Your Prices'  />

             </div>
            </div>
            <div className='h-32 md:mt-0 w-2/3 border-2 rounded-sm border-gray-400 ml-2'>

            </div>
           </div>
            <div className='flex ml-44 md:ml-60'>
                <div className=''>
                <button onClick={HideContent} className='h-8 rounded-sm w-24 md:w-28 md:ml-0 ml-2 bg-gold text-white'>Abort</button>

                </div>
                <div className='ml-2 mb-4'>
                <button onClick={HideContent} className='h-8 rounded-sm w-24 md:w-28 md:ml-0 ml-2 bg-green-500 text-white'>Submit</button>

                </div>
            </div>
        </div>:
        <span></span>
        }
        {wnd?
                <div className='relative md:mt-80 md:h-60 mt-56 md:px-12 md:w-1/2' >
                <p className='text-white font-extrabold text-2xl md:text-3xl ml-3 font-Poppins'><span className='text-gold px-2'>WE ARE</span><span className='text-gold md:text-white'>NIGHT </span> <span>DEVELOPERS</span></p>
                <p className='text-white text-md mt-2 px-2 ml-3 font-Poppins'> Hire affordable professinal individual or a team of freelancers</p>
                <p className='text-white text-md px-2 ml-3 font-Poppins'>We are here to faster your work, and deadlines to help your stay the best</p>

            <div className='h-14 w-full mt-2 flex '>

                <div className='h-14 w-3/6 border-2 border-gold ml-4'>
                    <a>
                    <button onClick={showContent} className='md:ml-14 ml-10 text-white pt-3 text-base md:text-md font-extrabold md:pt-4 font-Poppins'>Hire a pro freelancer</button>
                    </a>
                </div>


                <div className='h-14 w-1/3 bg-gold ml-3'>
                    <a href={FrontEndEnums.Service}>
                <h4 className='text-center text-white pt-4 text-base md:text-md font-extrabold md:pt-4 font-Poppins'>Hire a team</h4>
                </a>
                </div>
            </div>
            </div>:
            <span className=''>

            </span>
    }

    </div>


        </>
    )
}