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
        <div onClick={toggleMe} className="md:hidden bg-mobile h-14 w-full " >
                <  FaBars size={45} style={{color:'white'}} className='ml-3 pt-3' />
        </div>
       <div className="md:h-20 w-full relative bg-mobile">
            <div className="hidden md:block">
                <div className="flex justify-around h-20 w-full ml-20">
                <a className="pt-14 text-gold font-bold text-2xl font-serif " href={FrontEndEnums.Home} >Home</a>
                <a className="pt-14 text-white text-2xl font-serif" href={FrontEndEnums.About}>About</a>
                <a className="pt-14 text-white  text-2xl font-serif" href={FrontEndEnums.Service}>Services</a>
                <a className="pt-14  text-white text-2xl font-serif" href={FrontEndEnums.Support }>Support</a>
                <a className="pt-14 text-gold font-bold text-2xl font-serif" href={FrontEndEnums.JoinCommunity }>Join our Community</a>
                </div>
            </div>

           {toggle?
            <div className="md:ml-0 ml-6 pt-1 h-56">
            <div className='h-10 w-5/6 border-t-2 border-b-2 border-gray-400'><a className="pt-14 md:text-gold text-white font-bold text-xl" href={FrontEndEnums.Home} >Home</a></div>
            <div className='h-10 w-5/6 border-b-2 border-gray-400'><a className="pt-14 text-white text-xl" href={FrontEndEnums.About}>About</a></div>
            <div className='h-10 w-5/6 border-b-2 border-gray-400'><a className="pt-14 text-white  text-xl" href={FrontEndEnums.Service}>Services</a></div>
            <div className='h-10 w-5/6 border-b-2 border-gray-400'><a className="pt-14  text-white text-xl" href={FrontEndEnums.Support }>Support</a></div>
            <div className='h-10 w-5/6 border-b-2 border-gray-400'><a className="pt-14 md:text-gold text-white text-xl" href={FrontEndEnums.JoinCommunity }>Join our Community</a></div>

            </div>:
            <span></span>
        }
        </div>
    </>)
}