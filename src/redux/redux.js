import { toast } from "react-toastify";

const { createStore } = require("redux");

const initialData = {
  products: [],
  categoryList: [],
  cart: [],
  selectedCategory: "",
  product: {},
  bookedmarkProduct: [],
};

const reducer = (state = initialData, action) => {
  switch (action.type) {
    case "SET_CATEGORY_LIST":
      return {
        ...state,
        categoryList: action.payload,
        selectedCategory: action.payload[0],
      };
    case "SET_SELECTED_CATEGORY":
      return { ...state, selectedCategory: action.payload };
    case "SET_PRODUCTS_LIST":
      return { ...state, products: action.payload };
    case "SET_PRODUCT_DATA":
      return { ...state, product: action.payload };
    case "SET_CART_DATA":
      if (state.cart.find((p) => p.id === action.payload.id)) {
        toast.error("Product already inserted.");
        return { ...state };
      } else {
        toast.success("Product inserted successfully.");
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
    case "INCREASE_QUANTIRY_DATA":
      let newData = [];
      for (let i = 0; i < state.cart.length; i++) {
        let p = state.cart[i];
        if (state.cart[i].id === action.payload.productId) {
          p.Qty += 1;
          newData.push(p);
        } else {
          newData.push(p);
        }
      }
      return { ...state, cart: [...newData] };
    case "DECREASE_QUANTIRY_DATA":
      let newDecData = [];
      for (let i = 0; i < state.cart.length; i++) {
        let p = state.cart[i];
        if (state.cart[i].id === action.payload.productId) {
          p.Qty -= 1;
          newDecData.push(p);
        } else {
          newDecData.push(p);
        }
      }
      return { ...state, cart: [...newDecData] };
    case "REPLACE_QUANTIRY_DATA":
      let newRecData = [];
      for (let i = 0; i < state.cart.length; i++) {
        let p = state.cart[i];
        if (state.cart[i].id === action.payload.productId) {
          p.Qty = action.payload.Qty;
          newRecData.push(p);
        } else {
          newRecData.push(p);
        }
      }
      return { ...state, cart: [...newRecData] };
    case "DELETE_CART_DATA":
      let newDelData = state.cart.filter(
        (p) => p.id !== action.payload.productId
      );
      return { ...state, cart: [...newDelData] };
    case "PRODUCT_ADD_TO_BOOKMARK":
      if (state.bookedmarkProduct.find((i) => i == action.payload.id)) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          bookedmarkProduct: [...state.bookedmarkProduct, action.payload.id],
        };
      }
    case "PRODUCT_REMOVE_TO_BOOKMARK":
      const newArray = state.bookedmarkProduct.filter(
        (id) => id !== action.payload.id
      );
      return {
        ...state,
        bookedmarkProduct: [...newArray],
      };

    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
