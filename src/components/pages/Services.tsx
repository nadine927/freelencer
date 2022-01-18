/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import BackgroundImage from '../Images/image 1.png'
import { FrontEndEnums } from '../utils/enum'
import Navbar from './Navbar'
import Background from './Background'


export default function Services (){

    return(
        <>
        <div className="h-full w-full bg-mobile">
       <Background/>
       <Navbar/>
       <div className='w-full h-full bg-mobile flex'>
       <div className='h-20 md:w-1/5 w-6 flex ml-1 md:ml-36 relative mt-52 md:mt-28'>

        </div>
        <div className="h-20 md:bg-black bg-mobile md:w-1/4 w-full flex md:ml-2 relative mt-52 md:mt-28">
            <div className="h-10 md:w-2/3 w-3/6 bg-white ml-0 mt-6">
            <input type="text" placeholder="" className="h-10 w-full"  />
            </div>
            <div className="h-10 w-1/3 bg-gold mt-6">
                <button className="btn text-xl ml-10 mt-1  text-white">Search</button>
            </div>
        </div>
        </div>

        </div>
        <div className='h-96 md:relative md:bg-black bg-mobile md:w-1/2 md:mt-28 mt-0 md:ml-20'>
            <div className='flex mt-0 md:mt-2 mr-2 md:mr-0 ml-2 md:ml-0'>
            <div className='h-10 w-2/3 border-2 border-gold'>
                <h5 className='text-center text-white pt-1 text-sm md:text-base font-bold'>Web App Dev</h5>
            </div>
            <div className='h-10 w-2/3 border-2 border-gold ml-2'>
            <h5 className='text-center text-white pt-1 text-sm md:text-base font-bold'>Mobile App Dev</h5>
            </div>
            <div className='h-10 w-2/3 border-2 border-gold ml-2'>
            <h5 className='text-center text-white pt-1 text-sm md:text-base font-bold'>Ussd App Dev</h5>

            </div>
            </div>
            <div className='flex mt-2 mr-2 md:mr-0 ml-2 md:ml-0'>
            <div className='h-10 w-2/3 border-2 border-gold'>
            <h5 className='text-center text-white pt-1 text-sm md:text-base font-bold'>Graphic Design</h5>
            </div>
            <div className='h-10 w-2/3 border-2 border-gold ml-2'>
            <h5 className='text-center text-white pt-1 text-sm md:text-base font-bold'>Audio Producer</h5>

            </div>
            <div className='h-10 w-2/3 border-2 border-gold ml-2'>
            <h5 className='text-center text-white pt-1 text-sm md:text-base font-bold'>Data Science</h5>

            </div>
            </div>
            <div className='flex mt-2  mr-2 md:mr-0 ml-2 md:ml-0'>
            <div className='h-10 w-2/3 border-2 border-gold'>
            <h5 className='text-center text-white pt-1 text-sm md:text-base font-bold'>Script Writer</h5>

            </div>
            <div className='h-10 w-2/3 border-2 border-gold ml-2'>
            <h5 className='text-center text-white pt-1 text-sm md:text-base font-bold'>AI</h5>

            </div>
            <div className='h-10 w-2/3 border-2 border-gold ml-2'>
            <h5 className='text-center text-white pt-1 text-sm md:text-base font-bold'>Lawyer</h5>

            </div>
            </div>
            <div className='flex mt-2  mr-2 md:mr-0 ml-2 md:ml-0'>
            <div className='h-10 w-2/3 border-2 border-gold'>
            <h5 className='text-center text-white pt-1 text-sm md:text-base font-bold'>Marketing</h5>

            </div>
            <div className='h-10 w-2/3 border-2 border-gold ml-2'>
            <h5 className='text-center text-white pt-1 text-sm md:text-base font-bold'>Data Collection</h5>

            </div>
            <div className='h-10 w-2/3 border-2 border-gold ml-2'>
            <h5 className='text-center text-white pt-1 text-sm md:text-base font-bold'>Sales</h5>

            </div>
            </div>
            <div className='flex mt-2  mr-2 md:mr-0 ml-2 md:ml-0'>
            <div className='h-10 w-2/3 border-2 border-gold'>
            <h5 className='text-center text-white pt-1 text-sm md:text-base font-bold'>Audio Producer</h5>
            </div>
            <div className='h-10 w-2/3 border-2 border-gold ml-2'>
            <h5 className='text-center text-white pt-1 text-sm md:text-base font-bold'>Typing</h5>

            </div>
            <div className='h-10 w-2/3 border-2 border-gold ml-2'>
            <h5 className='text-center text-white pt-1 text-sm md:text-base font-bold'>UI/UX</h5>

            </div>
            </div>
            <div className='flex mt-2  mr-2 md:mr-0 ml-2 md:ml-0'>
            <div className='h-10 w-2/3 border-2 border-gold'>
            <h5 className='text-center text-white pt-1 text-sm md:text-base font-bold'>Front end</h5>
            </div>
            <div className='h-10 w-2/3 border-2 border-gold ml-2'>
            <h5 className='text-center text-white pt-1 text-sm md:text-base font-bold'>Back end</h5>

            </div>
            <div className='h-10 w-2/3 border-2 border-gold ml-2'>
            <h5 className='text-center text-white pt-1 text-sm md:text-base font-bold'>Database Admin</h5>

            </div>
            </div>
            <div className='flex mt-2  mr-2 md:mr-0 ml-2 md:ml-0'>
            <div className='h-10 w-2/3 border-2 border-gold'>
            <h5 className='text-center text-white pt-1 text-sm md:text-base font-bold'>Data Entry</h5>

            </div>
            <div className='h-10 w-2/3 border-2 border-gold ml-2'>
            <h5 className='text-center text-white pt-1 text-sm md:text-base font-bold'>Machine Learning</h5>

            </div>
            <div className='h-10 w-2/3 border-2 border-gold ml-2'>
            <h5 className='text-center text-white pt-1 text-sm md:text-base font-bold'>Full stack</h5>

            </div>
            </div>
            <div className='flex mt-2 mr-2 md:mr-0 ml-2 md:ml-0 '>
            <div className='h-10 w-2/3 border-2 border-gold'>
            <h5 className='text-center text-white pt-1 text-sm md:text-base font-bold'>Video Editor</h5>

            </div>
            <div className='h-10 w-2/3 border-2 border-gold ml-2'>
            <h5 className='text-center text-white pt-1 text-sm md:text-base font-bold'>Image Edito</h5>

            </div>
            <div className='h-10 w-2/3 border-2 border-gold ml-2'>
            <h5 className='text-center text-white pt-1 text-sm md:text-base font-bold'>Audio Producer</h5>

            </div>
            </div>



        </div>
        </>
    )
}