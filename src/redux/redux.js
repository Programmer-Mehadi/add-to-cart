const { createStore } = require("redux");

const initialData = {
  products: [],
  categoryList: [],
  carts: [],
  selectedCategory: "",
  product: {},
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
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
