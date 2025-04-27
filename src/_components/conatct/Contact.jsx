import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Button } from '@mui/material';
const Contact = () => {
  return (
    <div className='h-[80px] bg-blue-600 text-white flex items-center max-sm:flex-wrap min-md:px-[10px] xl:px-[250px] lg:px-[100px]  justify-around mb-[70px]'>
      <div className="l">
        <p className='capitalize font-semibold text-[18px]'>BE IN TOUCH WITH US :</p>
      </div>
      <div className="c flex">
        <input type="text" placeholder=' Enter your e-mail'  className='bg-white text-black p-[5px] border-black border-solid border-1 rounded-l-md'/>
        <button className='bg-gray-800 capitalize text-white px-[10px] py-[5px] cursor-pointer rounded-r-md'>JOIN US</button>
      </div>
      <div className="r flex gap-4 cursor-pointer">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <GoogleIcon />
        <PinterestIcon />
      </div>
    </div>
  )
}

export default Contact