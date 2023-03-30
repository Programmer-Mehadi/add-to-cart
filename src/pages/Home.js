import React from "react";
import Banner from "../components/Home/Banner";
import Cart from "../components/Home/Cart";
import ExploreByCategory from "../components/Home/ExploreByCategory";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ExploreByCategory></ExploreByCategory>
      <Cart></Cart>
    </div>
  );
};

export default Home;
