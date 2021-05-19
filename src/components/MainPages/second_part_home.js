import React from "react";
import { Link } from "react-router-dom";
import Monitor from "../../images/monitor.png";
import Comments from "../../images/comments.png";
import Internet from "../../images/internet.png";

const second_part_home = () => {
  return (
      <div>
        <div className="home-two">
        <div className="how-it-works">
            <h1>How it works</h1>
            <div className="pictures">
            <div className="picture-one">
                <img src={Monitor} alt="" />
                <h4>Create your site</h4>
                <p>Create an account to get started</p>
            </div>
            <div className="picture-two">
                <img src={Comments} alt="" />
                <h4>Add Contents</h4>
                <p>Add contents and pages to your site</p>
            </div>
            <div className="picture-three">
                <img src={Internet} alt="" />
                <h4>Publish</h4>
                <p>Now publish to make your site live!</p>
            </div>
            </div>
        </div>
        </div>
        <div className="cta">
            <h1>Fasten your website creation process with Landify UI Kit</h1>
            <Link to="#" className="btn">
            Download Now
            </Link>
        </div>
      </div>
  );
};

export default second_part_home;
