import React from "react";
import { Link } from "react-router-dom";
import Services from "../components/UI/Services";
import Techstack from "../components/UI/Techstack";

const Home = () => {
  return (
    <>
      <section className="home-banner-area" style={{paddingTop:"205px"}}>
        <div className="container">
          <div className="row justify-content-center fullscreen align-items-center">
            <div className="col-lg-5 col-md-8 home-banner-left">
              <h1 className="text-white">
                EduLearn
              </h1>
              <p className="mx-auto text-white  mt-20 mb-40">
                Let Education be more than books and refer to overall knowledge of a kid 
              </p>
            </div>
            <div className="offset-lg-2 col-lg-5 col-md-12 home-banner-right">
              <img className="img-fluid" src="img/header-img.png" alt="" />
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                className="white-button first-button scroll-to-section"
                style={{
                  borderStyle: "solid",
                  borderColor: "white",
                  borderRadius: "20px",
                }}
              >
                <Link to="/coding">
                  Coding <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
              <div
                className="white-button scroll-to-section"
                style={{
                  borderStyle: "solid",
                  borderColor: "white",
                  borderRadius: "20px",
                }}
              >
                <Link to="/maths" className="gradient-button">
                  Maths <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <Techstack />
    </>
  );
};

export default Home;
