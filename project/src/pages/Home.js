import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          
          <h1>Nature's Nurturers</h1>
          <p>Best Equipments for Plants</p>
          <Link to="/Menu">
            <button>BUY NOW</button>
          </Link>

          
        </div>
      </div>
    </Layout>
  );
};

export default Home;