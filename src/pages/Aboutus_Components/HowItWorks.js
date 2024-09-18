// src/pages/HowItWorks.js
import React from 'react';
import whatMatter from '../assets/KMC.jpeg'; // Correct the image path

const HowItWorks = () => {
  return (
    <section className="py-3 py-md-5 p-1 ">
      <div className="container p-3 borderr">
        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6 col-xl-5">
            <img src={whatMatter} alt="WhatMatters" className="img-fluid" />
          </div>
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-center">
              <div className="col-12 col-xl-11">
                <h1 className="mb-3 text-center">How It Works</h1>
                <div className="row gy-4 gy-md-0 gx-xxl-5">
                  <div className="col-12 col-md-6">
                    <div className="d-flex">
                      <div className="me-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-activity" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"/>
                        </svg>
                      </div>
                      <div className="align-self-center" style={{ textAlign: 'justify', fontSize: '18px' }}>
                        <h5 className="fw-semibold">&nbsp; For Donors</h5>
                        <p className="mb-0">If you have extra food, whether it's from a restaurant, an event, or even your 
                          home, you can easily donate it through our platform. Simply register, list the details of the food you have available, 
                          and we will handle the rest.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="d-flex">
                      <div className="me-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-houses-fill" viewBox="0 0 16 16">
                          <path d="M7.207 1a1 1 0 0 0-1.414 0L.146 6.646a.5.5 0 0 0 .708.708L1 7.207V12.5A1.5 1.5 0 0 0 2.5 14h.55a2.5 2.5 0 0 1-.05-.5V9.415a1.5 1.5 0 0 1-.56-2.475l5.353-5.354z"/>
                          <path d="M8.793 2a1 1 0 0 1 1.414 0L12 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l1.854 1.853a.5.5 0 0 1-.708.708L15 8.207V13.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 13.5V8.207l-.146.147a.5.5 0 1 1-.708-.708z"/>
                        </svg>
                      </div>
                      <div className="align-self-center" style={{ textAlign: 'justify', fontSize: '18px' }}>
                        <h5 className="fw-semibold">&nbsp; For Charitable Homes</h5>
                        <p className="mb-0">We partner with various organizations to ensure that they receive the 
                          donations they need. Our platform allows them to browse available donations and claim what they need, ensuring a seamless 
                          and efficient process.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
