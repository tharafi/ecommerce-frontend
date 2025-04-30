import React from "react";
import "./footer.css"
const Footer = () => {
  return (
    <div className="footer mx-[100px] mt-[10px] mb-2.5 max-sm:mx[10px] max-md:mx[10px] max-lg:mx[10px]">  
      <div className="container">
        <div className="top flex max-md:flex-col max-md:text-center gap-[50px]">
          <div className="box max-md:flex-col max-md:gap-[20px]">
            <h1 className="text-[18px] font-medium text-gray-600">Categories</h1>
            <span>Women</span>
            <span>Men</span>  
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
          </div>
          <div className="box ">
            <h1  className="text-[18px] font-medium text-gray-600">Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>
          <div className="box flex max-md:hidden max-sm:hidden">
            <h1  className="text-[18px] font-medium text-gray-600 ]">About</h1>
            <span>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor
              sit amet conse ctetur adipisicing elit, seddo eiusmod tempor
              incididunt ut labore etdolore.
            </span>
          </div>
          <div className="box flex max-md:hidden max-sm:hidden">
            <h1  className="text-[18px] font-medium text-gray-600">Contact</h1>
            <span>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor
              sit amet conse ctetur adipisicing elit, seddo eiusmod tempor
              incididunt ut labore etdolore.
            </span>
          </div>
        </div>
        <div className="bottom flex items-center justify-between mt-[50px] max-lg:flex-col max-md:flex-col max-md:gap-[20px]">
          <div className="left flex items-center max-sm:flex-col">
            <span className="text-[24px] text-blue-600 font-bold mr-2">Lamastore</span>
            <span className="copyright text-gray-500 text-[12px]">
              © Copyright 2023. All Rights Reserved
            </span>
          </div>
          <div className="right h-[50px] max-md:hidden max-lg:hidden">
            <img src="/img/payment.png" className="h-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
