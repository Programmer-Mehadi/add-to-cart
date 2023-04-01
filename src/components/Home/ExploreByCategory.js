import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch";

const ExploreByCategory = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);
  const selectCategory = useSelector((state) => state.selectedCategory);
  const products = useSelector((state) => state.products);
  const product = useSelector((state) => state.product);
  const bookedmarkProduct = useSelector((state) => state.bookedmarkProduct);

  const [reFetch, setReFetch] = useState(false);
  const [showImage, setShowImage] = useState(product?.thumbnail);

  useEffect(() => {
    if (!categoryList.length) {
      fetch("https://dummyjson.com/products/categories")
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: "SET_CATEGORY_LIST", payload: data });
        });
    }
  }, []);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${selectCategory}`)
      .then((response) => response.json())
      .then((data) => {
        if (data?.products?.length) {
          dispatch({ type: "SET_PRODUCTS_LIST", payload: data.products });
          setReFetch(false);
        }
      });
  }, [selectCategory]);

  const fetchProductData = (id) => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        {
          dispatch({ type: "SET_PRODUCT_DATA", payload: data });
          setReFetch(false);
        }
        setShowImage(data?.thumbnail);
      });
  };

  return (
    <div className="py-20 px-6">
      <h2 className="text-[#07484A] font-bold text-[1rem] md:text-[2.8rem] lg:text-[3.5rem] text-center pb-16">
        Explore by Category
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* sidebar */}
        <div className="flex flex-col gap-28 w-full md:w-[fit-content] min-w-[280px] ">
          <div className="relative pb-18">
            <input
              type="text"
              className="input bg-[#F0F0F0] absolute top-0 left-0 pl-10 w-full"
              placeholder="Search"
            />
            <i class="fa-solid fa-magnifying-glass absolute top-[18px] left-3 opacity-60"></i>
          </div>
          <div id="category_list" className="max-h-[700px] overflow-auto">
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
                      setReFetch(true);
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
          {reFetch ? (
            <h2 className="text-center text-[40px] font-bold text-sky-600">
              Loading...
            </h2>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              {products.map((product) => {
                const { id, title, price, thumbnail, description } = product;
                return (
                  <div className="card rounded-[16px] shadow-sm  border border-slate-200 hover:shadow-md flex flex-col justify-between">
                    <img
                      src={thumbnail}
                      alt=""
                      className="w-full h-[300px]   mb-[20px] mx-auto rounded-t-[16px] border-b"
                    />
                    <div className="px-[30px] py-[10px] ">
                      <h2 className="font-bold text-[18px]">
                        {title.length > 25 ? title.slice(0, 25) + "..." : title}
                      </h2>
                      <p className="my-3 text-[16px]">
                        {description.length > 30
                          ? description.slice(0, 30) + "..."
                          : description}
                      </p>
                      <div className="flex justify-between gap-8 items-center">
                        <h2 className="font-bold text-[24px]">${price}</h2>
                        {bookedmarkProduct.includes(id) ? (
                          <i
                            className="fa-solid fa-bookmark text-red-700 cursor-pointer"
                            onClick={() =>
                              dispatch({
                                type: "PRODUCT_REMOVE_TO_BOOKMARK",
                                payload: { id: id },
                              })
                            }
                          ></i>
                        ) : (
                          <i
                            className="fa-regular fa-bookmark cursor-pointer"
                            onClick={() =>
                              dispatch({
                                type: "PRODUCT_ADD_TO_BOOKMARK",
                                payload: { id: id },
                              })
                            }
                          ></i>
                        )}
                      </div>
                    </div>
                    <div className="flex mt-6">
                      <button className="flex-1 btn btn-primary rounded-t-none rounded-r-none bg-opacity-80">
                        <label
                          htmlFor="my-modal-3"
                          className="d-block w-full h-full flex justify-center items-center"
                          onClick={() => {
                            fetchProductData(id);
                          }}
                        >
                          View product
                        </label>
                      </button>
                      <button
                        className="w-[50px] bg-lime-600 rounded-r-lg rounded-t-[0px] flex justify-center items-center"
                        style={{ borderTopRightRadius: 0 }}
                        onClick={() => {
                          dispatch({
                            type: "SET_CART_DATA",
                            payload: { ...product, Qty: 1 },
                          });
                        }}
                      >
                        <i class="fa-solid fa-cart-shopping text-[#ffffff]  text-[20px]"></i>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      {/*  modal  */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box w-11/12 max-w-5xl relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
            <div>
              <img
                src={showImage}
                alt="image"
                className="w-full max-w-[600px] h-[450px]"
              />

              <div className="flex flex-row gap-4 flex-wrap my-10">
                {product?.images?.map((img) => {
                  return (
                    <img
                      onClick={() => {
                        setShowImage(img);
                      }}
                      src={img}
                      className={
                        showImage === img
                          ? "border-2 border-blue-600 w-[70px] cursor-pointer p-1 rounded-md"
                          : "w-[70px] cursor-pointer"
                      }
                      alt=""
                    />
                  );
                })}
              </div>
            </div>
            <div>
              <p className="text-[16px] text-slate-600">{product?.category}</p>
              <h3 className="text-lg font-bold text-[30px]">
                {product?.title}
              </h3>
              <p className="py-4">{product?.description}</p>
              <p className="py-4 font-bold text-[28px]">$ {product?.price}</p>
              <button
                className="btn btn-success px-16"
                onClick={() => {
                  dispatch({
                    type: "SET_CART_DATA",
                    payload: { ...product, Qty: 1 },
                  });
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreByCategory;
