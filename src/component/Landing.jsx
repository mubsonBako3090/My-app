import React from "react";

export default function LandingPage() {
  return (
    <section
      id="mainPage"
      className="mainPage min-hv-109 d-flex align-items-center"
    >
      <div className="container">
        <div className="row uper">
          <div className="col-lg-6 d-flex flex-column justify-content-center text-start  order-2 order-lg-1 ">
            <h1 data-aos="fade-up">ADAM</h1>
          <h1 data-aos="fade-up">MUBARAK</h1>
             <h1 data-aos="fade-up">BAKO</h1>

            <h2 data-aos="fade-up" data-aos-delay="400">
            Welcome to my tutorial concept, you`r highly welcome.
            We provide tech solutions by the best of our ability.  
            </h2>
<h2>
  
</h2>
            <b>What is the purpose of your visit?</b>
            <div data-aos="fade-up" data-aos-delay="600">
              <div className="text-center text-lg-start">
                <a
                 
                  href="#about"
                  className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <div className="card-body "></div>
                  <span>Explore/Get Started</span>
          
                  <i className="bi bi-arrow-down" ></i>
                 
            
                  <i className="bi bi-arrow-down"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 hero-img order-lg-1 order-1 "
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <h4 className=" d-lg-none img-head">Stainless CEO</h4>
            <img
              src="/abdull.jpg"
              className="img-fluid shadow"
              alt="imgd hhfj"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
