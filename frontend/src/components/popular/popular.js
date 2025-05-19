import React from "react";
import "./popular.css";
import women from "../assets/women.jpeg";
import mens from "../assets/mens.jpeg";
import kids from "../assets/kids.jpeg";
import shopall from "../assets/girl.jpg";
import { Link } from "react-router-dom";

const Popular = () => {
  return (
    <div className="popular">
      <h1>TRENDING NOW</h1>
      <hr />
      <div className="popular-items">
        <div className="popular-item">
          <Link className="nav-link" to="/womens">
            <img src={women} alt="" />
          </Link>
          <p>women's wear</p>
        </div>
        <div className="popular-item">
          <Link className="nav-link" to="/mens">
            <img src={mens} alt="" />
          </Link>
          <p>men's wear</p>
        </div>
        <div className="popular-item">
          <Link className="nav-link" to="/kids">
            <img src={kids} alt="" />
          </Link>
          <p>kid's wear</p>
        </div>
        <div className="popular-item">
          <Link className="nav-link" to="/products">
            <img src={shopall} alt="" />
          </Link>
          <p>shop all</p>
        </div>
      </div>
    </div>
  );
};

export default Popular;
