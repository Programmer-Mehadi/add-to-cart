import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cartProduct = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cartProduct);
  return (
    <div
      id="card_container"
      className="drawer drawer-end w-fit min-w-[800px] h-auto max-h-[500px] overflow-auto"
    >
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <div className="p-8">
          <div className="">
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
                {/* head */}
                <thead className="">
                  <tr className="">
                    <th></th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProduct?.length ? (
                    <>
                      {cartProduct?.map((product, index) => {
                        const { id, thumbnail, title, price, Qty, stock } =
                          product;
                        return (
                          <tr>
                            <td>{index + 1}</td>
                            <td>
                              <img
                                src={thumbnail}
                                alt=""
                                className="w-[80px]"
                              />
                            </td>
                            <td>{title}</td>
                            <td className="font-semibold">${price}</td>
                            <td>
                              <div className="flex gap-4">
                                <button
                                  className="btn btn-sm bg-slate-800"
                                  onClick={() => {
                                    dispatch({
                                      type: "DECREASE_QUANTIRY_DATA",
                                      payload: { productId: id },
                                    });
                                  }}
                                  disabled={Qty === 1 ? true : false}
                                >
                                  -
                                </button>

                                <p className="">
                                  {" "}
                                  <input
                                    type="text"
                                    value={Qty}
                                    onChange={(e) => {
                                      let Qty;
                                      if (
                                        e.target.value === "" ||
                                        parseInt(e.target.value) < 1
                                      ) {
                                        Qty = 1;
                                      } else if (e.target.value === stock - 1) {
                                        Qty = stock;
                                      } else {
                                        Qty = e.target.value;
                                      }
                                      dispatch({
                                        type: "REPLACE_QUANTIRY_DATA",
                                        payload: {
                                          productId: id,
                                          Qty: Qty,
                                        },
                                      });
                                    }}
                                    className="min-w-[40px] max-w-[40px] text-center bg-transparent"
                                  />
                                </p>
                                <button
                                  className="btn btn-sm btn-success"
                                  onClick={() => {
                                    dispatch({
                                      type: "INCREASE_QUANTIRY_DATA",
                                      payload: { productId: id },
                                    });
                                  }}
                                  disabled={Qty === stock ? true : false}
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td>
                              <button
                                className="btn btn-sm bg-red-800"
                                onClick={() => {
                                  dispatch({
                                    type: "DELETE_CART_DATA",
                                    payload: { productId: id },
                                  });
                                }}
                              >
                                del
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </>
                  ) : (
                    <tr>
                      <td colspan="6" className="text-center">
                        No products found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
