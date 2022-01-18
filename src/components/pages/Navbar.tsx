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
        <div onMouseOver={toggleMe} className="md:hidden bg-mobile h-14  md:h-0 w-full  md:w-0" >
                <  FaBars size={45} style={{color:'white'}} className='ml-3 pt-3' />
        </div>
       <div className="h-0 md:h-0 w-full md:w-1/2 relative bg-mobile">
            <div className="hidden md:block">
                <div className="flex justify-between h-20 w-full ml-20 md:ml-8">
                <a className="pt-14 text-gold font-bold text-2xl font-serif" href={FrontEndEnums.Home} >Home</a>
                <a className="pt-14 text-white text-2xl font-serif hover:font-bold  hover:text-gold" href={FrontEndEnums.About}>About</a>
                <a className="pt-14 text-white  text-2xl font-serif hover:font-bold  hover:text-gold" href={FrontEndEnums.Service}>Services</a>
                <a className="pt-14  text-white text-2xl font-serif hover:font-bold  hover:text-gold" href={FrontEndEnums.Support }>Support</a>
                <a className="pt-14 text-gold font-bold text-2xl font-serif" href={FrontEndEnums.JoinCommunity }>Join our Community</a>
                </div>
            </div>

           {toggle?
            <div className="md:ml-0 ml-0  md:h-0 h-56">
            <div className='h-10  ml-6 w-5/6 md:border-0 md:border-t-0 md:border-b-0 border-t-2 border-b-2 border-gray-400'>
                <a className=" md:text-black text-white hover:font-bold  hover:text-gold text-xl" href={FrontEndEnums.Home} >Home</a>
            </div>
            <div className='h-10 ml-6 w-5/6 md:border-0 border-b-2 border-gray-400'><a className=" text-white md:text-black text-xl hover:font-bold  hover:text-gold" href={FrontEndEnums.About}>About</a></div>
            <div className='h-10 ml-6 w-5/6 md:border-0 border-b-2 border-gray-400'><a className=" text-white md:text-black  text-xl hover:font-bold  hover:text-gold" href={FrontEndEnums.Service}>Servicess</a></div>
            <div className='h-10 ml-6 w-5/6 md:border-0 border-b-2 border-gray-400'><a className="  text-white md:text-black text-xl hover:font-bold  hover:text-gold" href={FrontEndEnums.Support }>Support</a></div>
            <div className='h-10 ml-6 w-5/6 md:border-0 border-b-2 border-gray-400'><a className=" md:text-black  text-white text-xl hover:font-bold  hover:text-gold" href={FrontEndEnums.JoinCommunity }>Join our Community</a></div>

            </div>:
            <span></span>
        }
        </div>
    </>)
}

