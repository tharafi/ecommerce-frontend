import React, { useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(
    `/products?[filters][id][$eq]=${id}&populate=*`
  );

  const product = data?.[0]; // أول منتج من نتيجة الفلترة
  const imageUrl = `${import.meta.env.VITE_UPLOAD_URL}${product?.img?.url}`;
  const image2Url = `${import.meta.env.VITE_UPLOAD_URL}${product?.img2?.url}`;

  useEffect(() => {
    if (product?.img) {
      setSelectedImg(`${import.meta.env.VITE_UPLOAD_URL}${product.img.url}`);
    }
  }, [product]);

  return (
    <div className="product py-[20px] px-[50px] flex">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left flex gap-[10px] flex-[1]">
            <div className="images flex-1/5">
              <img
                className="w-full h-[150px] object-cover cursor-pointer mb-[10px]"
                src={imageUrl}
                alt=""
                onClick={() =>
                  setSelectedImg(
                    `${import.meta.env.VITE_UPLOAD_URL}${product?.img?.url}`
                  )
                }
              />
              <img
                className="w-full h-[150px] object-cover cursor-pointer"
                src={image2Url}
                alt=""
                onClick={() =>
                  setSelectedImg(
                    `${import.meta.env.VITE_UPLOAD_URL}${product?.img2?.url}`
                  )
                }
              />
            </div>
            <div className="mainImg flex-4/5">
              <img
                className="w-full max-h-[500px]  object-cover"
                src={selectedImg}
                alt=""
              />
            </div>
          </div>
          <div className="right flex-[1] flex flex-col gap-3.5 px-10">
            <h1 className="font-normal text-2xl">
              {product?.title}
            </h1>
            <div className="price text-blue-400 font-normal text-3xl">
              ${product?.price}
            </div>
            <p className="text-gray-600 text-[16px] flex space-x-2">
              {product?.desc}
            </p>
            <div className="quantity">
              <button
                className="px-5 py-3 mr-3 bg-gray-300 cursor-pointer"
                onClick={() =>
                  setQuantity((prev) => (prev == 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button
                className="px-5 py-3 ml-3 bg-gray-300 cursor-pointer"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <button onClick={()=> (dispatch(addToCart(
              {
                id: product.id,
                title: product.title,
                desc: product.desc,
                price: product.price,
                img: imageUrl,
                quantity: quantity,
              }
            )))} className="add font-medium my-2 p-2.5 bg-blue-500 text-white w-[250px] cursor-pointer flex items-center justify-center gap-2.5">
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="link flex gap-10 text-blue-400 cursor-pointer">
              <div className="itm flex items-center gap-2">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="itm flex items-center gap-2">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info text-gray-400 my-2">
              <span className="my-1">Vendor: Polo</span>
              <br />
              <span className="my-1">Product Type: T-Shirt</span>
              <br />
              <span className="my-1">Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info text-gray-400 my-2 text-[14px]">
              <span>DESCRIPTION</span>
              <hr className="w-[200px] my-1" />
              <span>ADDITIONAL INFORMATION</span>
              <hr className="w-[200px] my-1" />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
