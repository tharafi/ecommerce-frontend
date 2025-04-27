import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({item}) => {
  const imageUrl = `${import.meta.env.VITE_UPLOAD_URL}${item?.img?.url}`; 
  const image2Url = `${import.meta.env.VITE_UPLOAD_URL}${item?.img2?.url}`;  
  return (
    <Link to={`/product/${item.id}`}>
      <div className="card  flex flex-col gap-[10px] mb-[50px]">
        <div className="image w-[250px] h-[400px] overflow-hidden relative items-center ">
          {item?.isNew && <span className='absolute px-[5px] py-[3px] text-teal-600 bg-white left-[5px] top-1.5 z-[3] rounded-sm font-medium text-[12px]'>
          New Season</span>}
          <img src={imageUrl} alt="" className='main-img w-full h-full object-cover z-[1] absolute hover:z-[-1] transition-opacity duration-300'/>
          <img src={image2Url} alt="" className='sec-img w-full h-full object-cover absolute hover:z-[2] transition-opacity duration-300' />
        </div>
        <h2 className='text-[16px] font-normal'>{item.title}</h2>
        <div className="prices flex gap-4 text-lg">
          <h3 className='line-through text-gray-600 font-medium'>${item.oldPrice || item.price+ 20}</h3>
          <h3 >${item.price}</h3>
          <h3></h3>
        </div>
      </div>
    </Link>
  )
}

export default Card