import React, { useState } from "react";
import List from "../../_components/list/List";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats((prev) =>
      isChecked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  return (
    <div className="products px-[50px] py-[30px] flex gap-[20px]">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left flex-[1] sticky h-full top-[50px]">
            <div className="filterItem mb-[30px]">
              <h2 className="font-normal text-xl mb-[30px]">
                Products Categories
              </h2>
              {data?.map((item) => (
                <div key={item.id} className="inputItem mb-[10px]">
                  <input
                    type="checkbox"
                    id={item.id}
                    value={item.id}
                    onChange={handleChange}
                  />
                  <label className="ml-[10px]" htmlFor={item.id}>
                    {item.title}{" "}
                  </label>
                </div>
              ))}
            </div>
            <div className="filterItem">
              <h2 className="font-normal text-xl mb-[30px]">Filter By Price</h2>
              <div className="inputItem mb-[10px]">
                <span>0</span>
                <input
                  type="range"
                  min={0}
                  max={1000}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
                <span>{maxPrice}</span>
              </div>
            </div>
            <div className="filterItem mb-[10px]">
              <h2 className="font-normal text-xl mb-[30px]">Sort By</h2>
              <div className="inputItem mb-[10px]">
                <input
                  type="radio"
                  id="asc"
                  value="asc"
                  name="price"
                  onChange={(e) => setSort("asc")}
                />
                <label className="ml-[10px]" htmlFor="asc">
                  Price (Lowest First)
                </label>
              </div>
              <div className="inputItem mb-[10px]">
                <input
                  type="radio"
                  id="desc"
                  value="desc"
                  name="price"
                  onChange={(e) => setSort("desc")}
                />
                <label className="ml-[10px]" htmlFor="desc">
                  Price (Hightest First)
                </label>
              </div>
            </div>
          </div>
          <div className="right flex-[3]">
            <div className="imgItm h-[300px] mb-[50px]">
              <img
                className="h-full w-full object-cover"
                src="https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
            <List
              catId={catId}
              maxPrice={maxPrice}
              sort={sort}
              subCats={selectedSubCats}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
