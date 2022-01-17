import React, {useState} from 'react'
import { FrontEndEnums } from '../utils/enum'
export default function Navbar(){
    const[toggle, setToggle]=useState(false)
    const toggleMe=()=>{
        setToggle(!toggle)
        console.log(toggle)
    }
    return(<>
       <div className="md:h-20 w-1/2 relative">
            <div className="hidden md:block">
                <div className="flex justify-evenly h-20 w-full">
                <a className="pt-14 text-gold font-bold text-xl" href={FrontEndEnums.Home} >HOME</a>
                <a className="pt-14 text-white text-xl" href={FrontEndEnums.About}>About</a>
                <a className="pt-14 text-white  text-xl" href={FrontEndEnums.Service}>Services</a>
                <a className="pt-14  text-white text-xl" href={FrontEndEnums.Support }>Support</a>
                <a className="pt-14 text-gold font-bold text-xl" href={FrontEndEnums.JoinCommunity }>Join our Community</a>
                
                </div>
            </div>
            <p className="md:hidden text-gray-100" onClick={toggleMe}>Menu</p>
           {toggle?
            <div className="bg-gray-100 shadow  w-full">
            <p><a className="pt-14 text-gold font-bold text-xl" href={FrontEndEnums.Home} >HOME</a></p>
            <p><a className="pt-14 text-white text-xl" href={FrontEndEnums.About}>About</a></p>
            <p><a className="pt-14 text-white  text-xl" href={FrontEndEnums.Service}>Services</a></p>
            <a className="pt-14  text-white text-xl" href={FrontEndEnums.Support }>Support</a>
            <a className="pt-14 text-gold font-bold text-xl" href={FrontEndEnums.JoinCommunity }>Join our Community</a>
            
            </div>:
            <span></span>
        }
        </div>
    </>)
}