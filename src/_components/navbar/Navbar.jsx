import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./navbar.css"
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products)
  const [open, setOpen] = useState(false)

  return (
    <div className="nav h-[80px] flex items-center justify-center max-lg:m-auto ">
      <div className="container px-8 py-2.5 flex justify-between items-center max-xl:justify-between max-lg:p-1 max-sm:px-8">
        <div className="left flex justify-center items-center gap-6">
          <div className="item flex justify-center items-center">
            <img src="/img/alg.png" className="w-[30px] h-[18px]" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item flex  items-center max-md:hidden">
            <span>ALG</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item flex items-center max-md:hidden">
            <Link to={"/products/7"}>Men</Link>
          </div>
          <div className="item flex items-center max-md:hidden">
            <Link to={"/products/7"}>women</Link>
          </div>
        </div>
        <div className="center text-3xl tracking-wider">
          <Link to={"/"}>PHILSTORE</Link>
        </div>
        <div className="right flex items-center gap-6">
          <div className="item flex items-center max-md:hidden">
            <Link to={"/about"}>About</Link>
          </div>
          <div className="item flex items-center max-md:hidden">
            <Link to={"/contact"}>Contact</Link>
          </div>

          <div className="icons flex items-center gap-3.5 text-[#777] cursor-pointer max-sm:hidden">
            <PersonOutlineIcon className="flex "/>
            <SearchIcon />
            <FavoriteBorderIcon />  
          </div>
            <div className="cartIcon  relative" onClick={()=> setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span className="w-5 h-5 bg-blue-600 text-white absolute rounded-full flex justify-center items-center text-[12px] right-[-10px] top-[-10px]">{products.length}</span>
            </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
