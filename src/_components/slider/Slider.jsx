import React, { useState } from 'react'
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./slider.css"

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // const data = [
  //   "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //   "https://images.unsplash.com/photo-1550995694-3f5f4a7e1bd2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // ]
  const data = [
    "https://images.unsplash.com/photo-1629019597573-9c149be022b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1629828367197-023c0839beba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1629828367134-690cd8bde95c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };


  return (
    <div className='slider h-[92.593vh] w-[100vw] relative overflow-hidden'>
      <div
        className="w-[300vw] h-full flex transition-all duration-1000"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((img) => (
          <img key={img} className='h-full w-[100vw] object-cover' src={img} alt="" />
        ))}
      </div>
      <div className="iconss absolute left-0 right-0 bottom-[100px] m-auto w-fit flex gap-3">
        <div onClick={prevSlide} className="icon w-[50px] h-[50px] border border-gray-600 flex items-center justify-center cursor-pointer">
          <WestOutlinedIcon />
        </div>
        <div onClick={nextSlide} className="icon w-[50px] h-[50px] border border-gray-600 flex items-center justify-center cursor-pointer">
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  )
}

export default Slider
