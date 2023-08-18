import React from "react"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"

const Foter = () => {
  return (
    <>
      <footer className='boxItems'>
        <div className='container flex'>
          <p>Peynirci Bahçıvan - All right reserved - Design & Developed by Filiz Yücel ,Inc</p>
          <div className='social right-0 flex items-center'>
            <BsFacebook className='icon ' />
            <RiInstagramFill className='icon ' />
            <AiFillTwitterCircle className='icon ' />
            <AiFillLinkedin className='icon ' />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Foter ;