import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import HomeDetail from "../HomeDetail/HomeDetail";
import img from "../../images/home-img.jpg";
// Importing css file
import "./Home.css";
import SearchBox from "../SearchBox/SearchBox";
import Review from "../Review/Review";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://morning-waters-22506.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="home-header">
        <h1 className="greeting">Planning To Buy a Car? We are Here !!</h1>
        <div className="home-container">
          <button type="button" className="btn btn-primary">
            LET'S MAKE A PLAN
          </button>
          <img className="img-fluid" src={img} alt="" />
        </div>
        <br />
        <h4>
          Car-Hub invented car search. Our site and innovative solutions connect
          buyers and sellers to match people with their perfect car
        </h4>
      </div>
      <Banner></Banner>
      <SearchBox></SearchBox>
      <Review></Review>
      <h3 className="mt-5">All Our Services </h3>
      <div className="product-container">
        {products.slice(0, 6).map((product) => (
          <HomeDetail key={product.id} product={product}></HomeDetail>
        ))}
      </div>
    </div>
  );
};

export default Home;
