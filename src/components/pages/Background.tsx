/* eslint-disable jsx-a11y/alt-text */
import BackgroundImage from '../Images/image 1.png'

export default function Background (){
    return(
        <>
         <img src={BackgroundImage} className="w-full hidden md:block h-screen absolute " />
        </>
    )
}