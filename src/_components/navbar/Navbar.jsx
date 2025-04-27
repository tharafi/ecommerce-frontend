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
    <div className="nav h-[80px] flex items-center justify-center xl:justify-center">
      <div className="container px-8 py-2.5 flex justify-between items-center xl:justify-between">
        <div className="left flex items-center gap-6">
          <div className="item">
            <img src="/img/alg.png" className="w-[30px] h-[18px]" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>ALG</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link to={"/products/7"}>Men</Link>
          </div>
          <div className="item">
            <Link to={"/products/7"}>women</Link>
          </div>
        </div>
        <div className="center text-3xl tracking-wider">
          <Link to={"/"}>PHILSTORE</Link>
        </div>
        <div className="right flex items-center gap-6">
          <div className="item">
            <Link to={"/about"}>About</Link>
          </div>
          <div className="item">
            <Link to={"/contact"}>Contact</Link>
          </div>

          <div className="icons flex items-center gap-3.5 text-[#777] cursor-pointer">
            <PersonOutlineIcon />
            <SearchIcon />
            <FavoriteBorderIcon />  
            <div className="cartIcon  relative" onClick={()=> setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span className="w-5 h-5 bg-blue-600 text-white absolute rounded-full flex justify-center items-center text-[12px] right-[-10px] top-[-10px]">{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
