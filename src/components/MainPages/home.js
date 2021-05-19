import React from "react";
import { Link } from "react-router-dom";
import Home from '../../images/home.png';

const home = () => {
  return (
    <div className="home">
      <div className="part-left">
        <h1>Landing page UI kit</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer.
        </p>
        <Link to="#" className="btn">
          Button
        </Link>
      </div>
      <div className="part-rigth">
        <div className="circle">
          <img className="home-img" src={Home} alt="" />
        </div>
      </div>
    </div>
  );
};

export default home;
