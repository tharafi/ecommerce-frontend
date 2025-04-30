import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const data = [
    "https://images.pexels.com/photos/31398576/pexels-photo-31398576/free-photo-of-young-man-gazing-at-sea-on-cloudy-beach-day.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/31452107/pexels-photo-31452107/free-photo-of-man-in-dramatic-lighting-against-brick-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/6109827/pexels-photo-6109827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];
  return (
    <div className="categories flex h-[80vh] gap-2.5 m-[10px]">
      <div className="col flex-[1] flex flex-col gap-2.5">
        <div className="row overflow-hidden relative flex gap-2.5 flex-1">
          <img className="w-full h-full object-cover" src={data[0]} alt="" />
          <button className="absolute min-w-[60px]  h-[40px] p-2 top-0 left-0  bottom-0 right-0 m-auto cursor-pointer border-none uppercase bg-white font-medium hover:bg-blue-600 hover:text-white max-md: text-wrap">
            <Link className="link text-[12px]" to="/products/2">
            Sweatshirts
            </Link>
          </button>
        </div>
        <div className="row overflow-hidden relative flex gap-2.5 flex-1">
          <img className="w-full h-full object-cover" src={data[1]} alt="" />
          <button className="absolute min-w-[60px] w-fit h-[40px] p-2 top-0 left-0  bottom-0 right-0 m-auto cursor-pointer border-none uppercase bg-white font-medium hover:bg-blue-600 hover:text-white">
            <Link className="link text-[12px]" to="/products/2">
            Shirts
            </Link>
          </button>
        </div>
      </div>
      <div className="col flex-[1] flex flex-col gap-2.5">
        <div className="row overflow-hidden relative flex gap-2.5 flex-1">
          <img className="w-full h-full object-cover" src={data[4]} alt="" />
          <button className="absolute min-w-[60px] w-fit h-[40px] p-2 top-0 left-0  bottom-0 right-0 m-auto cursor-pointer border-none uppercase bg-white font-medium hover:bg-blue-600 hover:text-white">
            <Link className="link text-[12px]" to="/products/2">
              New season
            </Link>
          </button>
        </div>
      </div>
      <div className="col flex-[2] flex flex-col gap-2.5">
        <div className="row overflow-hidden relative flex gap-2.5 flex-1">
          <div className="col flex flex-col gap-2.5">
            <div className="row overflow-hidden relative flex gap-2.5 flex-1">
              <img
                className="w-full h-full object-cover"
                src={data[3]}
                alt=""
              />
              <button className="absolute min-w-[60px] w-fit h-[40px] p-2 top-0 left-0  bottom-0 right-0 m-auto cursor-pointer border-none uppercase bg-white font-medium hover:bg-blue-600 hover:text-white">
                <Link className="link text-[12px]" to="/products/2">
                Jeans
                </Link>
              </button>
            </div>
          </div>
          <div className="col flex flex-col gap-2.5">
            <div className="row overflow-hidden relative flex gap-2.5 flex-1">
              <img
                className="w-full h-full object-cover"
                src={data[5]}
                alt=""
              />
              <button className="absolute min-w-[60px] w-fit h-[40px] p-2 top-0 left-0  bottom-0 right-0 m-auto cursor-pointer border-none uppercase bg-white font-medium hover:bg-blue-600 hover:text-white">
                <Link className="link text-[12px]" to="/products/2">
                  Men
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row overflow-hidden relative flex gap-2.5 flex-1">
          <img className="w-full h-full object-cover" src={data[2]} alt="" />
          <button className="absolute min-w-[60px] w-fit h-[40px] p-2 top-0 left-0  bottom-0 right-0 m-auto cursor-pointer border-none uppercase bg-white font-medium hover:bg-blue-600 hover:text-white">
            <Link className="link text-[12px]" to="/products/2">
              Accessories
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;

//    + Denim Hoodies + Sweatshirts  Swimwear
