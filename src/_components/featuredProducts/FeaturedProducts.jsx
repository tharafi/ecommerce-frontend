import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import axios from "axios";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {

  const {data, loading, error} = useFetch(`/products?populate=*&[filters][type]=${type}`)
  
  return (
    <div className="featured my-[200px] mx-[100px]">
      <div className="top flex items-center  justify-between mb-[50px] font-bold max-sm:flex-col max-sm:gap-2.5 max-sm:text-center">
        <h1 className="flex-[2] capitalize text-2xl">{type} products</h1>
        <p className="flex-[3] text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          provident eligendi ad, eos cupiditate molestiae animi quis laboriosam
          iusto doloremque dolorum rerum! Nam alias harum, dolore magni commodi
          asperiores veniam.
        </p>
      </div>
      <div className="bottom flex items-center justify-center gap-[50px]">
        {loading ? "loading" : error ? "something went wrong! " : data?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
