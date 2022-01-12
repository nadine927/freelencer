
   
import React from 'react';
import lion from './pictures/lion.png'
export default function home(){
    return(
    <> 

    <div className='w-full h-screen'>
    <img src={lion} className='w-full h-screen absolute' /> 

    <div className='relative z-20 mt-80 px-12' >
        <p className='text-white font-bold text-2xl'><span className='text-amber-300 px-2'>WE ARE</span>NIGHT DEVELOPERS</p>
        <p className='text-white mt-2 px-2'> Hire affordable professinal individual or a team of freelancers</p>
        <p className='text-white px-2'>We are here to faster your work, and deadlines to help your stay the best</p>
        <div className="grid grid-cols-2 ">

            <div   className='w-3/4 h-44 bg-green-500 flex' >
            <div className="flex grid-cols-2 mx-3 mt-5 border-2 border-amber-300 w-80">
                    <span className="px-3 text-white font-bold">Hire a pro a freelancer</span>
                </div>

                <div className="flex bg-amber-400 border-2 border-white-300 w-50">
        <div className="">
                    <span className="px-2 text-white font-bold">Hire a team</span>
                </div>
                </div>
    </div>
   </div>
   
   {/* <div className="relative grid grid-cols-4 gap-4">
  <div className="relative" >01</div>
  <div className="relative">09</div>
</div> */}
    
    {/* </div>





    {/* <div className='w-1/2 h-screen bg-lime-500 relative ml-14'>
       <div className='w-3/4 h-44 bg-green-500 flex'>
            <div className='h-24 w-3/4 bg-yellow-300'>

            </div>
            <div className='h-24 w-1/3 bg-red-300'>

            </div>
       </div>
   </div>
    
    </div> */}

</div>
</div>
</>
  

       
  );
}