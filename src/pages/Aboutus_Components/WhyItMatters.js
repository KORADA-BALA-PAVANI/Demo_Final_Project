import React from 'react';
import '../assets/WhyItMattersCSS.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export const WhyItMatters = () => {
  return (
    <>
      <div className="text-center mb-4">
        <br/><h1>Why It Matters</h1>
      </div>
      <section className="py-3 py-md-5 p-3 ">
        <div className="container p-3 ">
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {/* First Slide */}
              <div className="carousel-item active" key="slide1">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="card wim-card__card">
                      <h5 className="card-title text-center wim-card__title">Reducing Food Waste</h5>
                      <hr className="wim-card__hr" />
                      <div className="card-body">
                        <p className="card-text wim-card__text">
                          Every year, tons of food go to waste while many people go hungry. Donating surplus food helps reduce waste and make a positive environmental impact.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="card wim-card__card">
                      <h5 className="card-title text-center wim-card__title">Supporting Communities</h5>
                      <hr className="wim-card__hr" />
                      <div className="card-body">
                        <p className="card-text wim-card__text">
                          Your donations provide nutritious meals to orphanages and charitable homes, supporting communities in need.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="card wim-card__card">
                      <h5 className="card-title text-center wim-card__title">Creating Connections</h5>
                      <hr className="wim-card__hr" />
                      <div className="card-body">
                        <p className="card-text wim-card__text">
                          Our platform connects those with surplus food to those in need, fostering generosity and a sense of community.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Slide */}
              <div className="carousel-item" key="slide2">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="card wim-card__card">
                      <h5 className="card-title text-center wim-card__title">Promoting Sustainability</h5>
                      <hr className="wim-card__hr" />
                      <div className="card-body">
                        <p className="card-text wim-card__text">
                          By donating, you promote a sustainable cycle that minimizes waste and benefits both the environment and people.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="card wim-card__card">
                      <h5 className="card-title text-center wim-card__title">Encouraging Generosity</h5>
                      <hr className="wim-card__hr" />
                      <div className="card-body">
                        <p className="card-text wim-card__text">
                          Your actions inspire others to participate in giving, creating a ripple effect of kindness and generosity.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="card wim-card__card">
                      <h5 className="card-title text-center wim-card__title">Another Important Reason</h5>
                      <hr className="wim-card__hr" />
                      <div className="card-body">
                        <p className="card-text wim-card__text">
                          This is another important reason why this platform makes a difference, encouraging a more equitable and caring society.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <button className="carousel-control-prev wim-carousel__control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon wim-carousel__control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next wim-carousel__control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon wim-carousel__control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyItMatters;
