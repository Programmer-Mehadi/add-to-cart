import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch";

const ExploreByCategory = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);
  const selectCategory = useSelector((state) => state.selectedCategory);

  useEffect(() => {
    if (!categoryList.length) {
      fetch("https://dummyjson.com/products/categories")
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: "SET_CATEGORY_LIST", payload: data });
        });
    }
  }, []);

  return (
    <div className="py-20 px-6">
      <h2 className="text-[#07484A] font-bold text-[1rem] md:text-[2.8rem] lg:text-[3.5rem] text-center pb-16">
        Explore by Category
      </h2>
      <div className="flex gap-8">
        {/* sidebar */}
        <div className="flex flex-col gap-28 w-[fit-content] min-w-[280px] ">
          <div className="relative pb-18">
            <input
              type="text"
              className="input bg-[#F0F0F0] absolute top-0 left-0 pl-10 w-full"
              placeholder="Search"
            />
            <i class="fa-solid fa-magnifying-glass absolute top-[18px] left-3 opacity-60"></i>
          </div>
          <div id="category_list" className="max-h-[500px] overflow-auto">
            <ul className="flex flex-col gap-1 pr-2">
              {categoryList?.map((category) => {
                return (
                  <li
                    className={
                      category === selectCategory
                        ? "bg-[#07484A] " +
                          "p-3 rounded-md text-[24px] text-white shadow-sm cursor-pointer"
                        : "hover:bg-slate-200 hover:text-[#07484A] p-3 rounded-md text-[24px] text-[#07484A] shadow-sm cursor-pointer"
                    }
                    onClick={() => {
                      dispatch({
                        type: "SET_SELECTED_CATEGORY",
                        payload: category,
                      });
                    }}
                  >
                    {category
                      .split("-")
                      .map(
                        (a) => a[0].toUpperCase() + a.slice(1, a.length) + " "
                      )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* product list */}
        <div className="flex-1">
          <div>
            <div className="card px-[30px] py-[20px] rounded-[16px] w-fit shadow-sm text-center border border-slate-200">
              <img
                src="https://priyoshop.com/content/images/thumbs/0194978_perfect-chair-2-pieces.jpeg"
                alt=""
                className="h-auto w-[204px] mb-[20px]"
              />
              <h2 className="font-bold text-[24px]">Armchair</h2>
              <p className="my-3">Light single chair</p>
              <h2 className="font-bold text-[24px]">$145</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreByCategory;
