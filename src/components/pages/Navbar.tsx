import React, {useState} from 'react'
import { FrontEndEnums } from '../utils/enum'
import { FaBars } from 'react-icons/fa';
export default function Navbar(){
    const[toggle, setToggle]=useState(false)
    const toggleMe=()=>{
        setToggle(!toggle)
        console.log(toggle)
    }
    return(<>
       <div className="md:h-20 w-2/4 relative">
            <div className="hidden md:block">
                <div className="flex justify-around h-20 w-full ml-20">
                <a className="pt-14 text-gold font-bold text-2xl font-serif " href={FrontEndEnums.Home} >HOME</a>
                <a className="pt-14 text-white text-2xl font-serif" href={FrontEndEnums.About}>About</a>
                <a className="pt-14 text-white  text-2xl font-serif" href={FrontEndEnums.Service}>Services</a>
                <a className="pt-14  text-white text-2xl font-serif" href={FrontEndEnums.Support }>Support</a>
                <a className="pt-14 text-gold font-bold text-2xl font-serif" href={FrontEndEnums.JoinCommunity }>Join our Community</a>
                </div>
            </div>
            <div onClick={toggleMe} className="md:hidden " >
                <  FaBars size={45} style={{color:'white'}} className='ml-10 pt-2' />
            </div>
           {toggle?
            <div className=" md:ml-0 ml-10 w-full mt-2 ">
            <div className='h-10 w-full border-t-2 border-b-2 border-gray-400'><a className="pt-14 md:text-gold text-white font-bold text-xl" href={FrontEndEnums.Home} >HOME</a></div>
            <div className='h-10 w-full border-b-2 border-gray-400'><a className="pt-14 text-white text-xl" href={FrontEndEnums.About}>About</a></div>
            <div className='h-10 w-full border-b-2 border-gray-400'><a className="pt-14 text-white  text-xl" href={FrontEndEnums.Service}>Services</a></div>
            <div className='h-10 w-full border-b-2 border-gray-400'><a className="pt-14  text-white text-xl" href={FrontEndEnums.Support }>Support</a></div>
            <div className='h-10 w-full border-b-2 border-gray-400'><a className="pt-14 md:text-gold text-white font-bold text-xl" href={FrontEndEnums.JoinCommunity }>Join our Community</a></div>

            </div>:
            <span></span>
        }
        </div>
    </>)
}