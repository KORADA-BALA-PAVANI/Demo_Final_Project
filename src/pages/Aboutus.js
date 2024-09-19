// src/pages/Aboutus.js
import React from 'react';
import Card from './Aboutus_Components/Card';
import './assets/style.css'; // Correct path to style.css
import MissionImg from './assets/mission.jpeg'; // Correct path to image.png
import VisionImg from './assets/vision.jpeg'; // Correct path to VisionImg
import ValuesImg from './assets/values.jpeg'; // Correct path to ValuesImg
import Footer from './Nav_Foot/Footer';
import HowItWorks from './Aboutus_Components/HowItWorks';
import WhyItMatters from './Aboutus_Components/WhyItMatters';
import GetInvolved from './Aboutus_Components/GetInvolved';

const Aboutus = () => {
  return (
    <>

      <div className="container mt-5">
        <h1 className="text-center mb-5">About Us</h1>
        <div className="row">
        <Card 
  imgSrc={MissionImg}
  imgAlt="Our Mission"
  text={
    <>
      <div className="text-center display-4 px-3 mb-4 fw-bold py-2"> {/* Centered and styled title */}
        Mission
      </div>
      <p>
        We are dedicated to tackling the issues of food waste and hunger simultaneously. 
        Our mission is to create a sustainable solution where surplus food can be donated to those in need. 
        We connect generous donors with orphanages and charitable homes, ensuring that no food goes to waste 
        and every meal counts. By reducing food waste and providing for the less fortunate, we strive to make 
        a meaningful impact on our community.
      </p>
    </>
  }
/>

<Card 
  imgSrc={VisionImg}
  imgAlt="Our Vision"
  text={
    <>
      <div className="text-center display-4 px-3 mb-4 fw-bold py-2"> {/* Centered and styled title */}
        Vision
      </div>
      <p>
        Our vision is to create a world where no one has to suffer from hunger, 
        and where food waste is a thing of the past. We aim to achieve this by building a 
        community of like-minded individuals and organizations who share our passion for 
        reducing food waste and feeding the hungry. Together, we can make a difference and 
        create a better future for all.
      </p>
    </>
  }
/>
<Card 
  imgSrc={ValuesImg}
  imgAlt="Our Values"
  text={
    <>
      <div className="text-center display-4 px-3 mb-4 fw-bold py-2"> 
        Our Values
      </div>
      <p>
        At Food Waste Management, we believe in the importance of 
        integrity, compassion, and sustainability. We are committed to operating with 
        transparency and accountability, and to always putting the needs of our 
        beneficiaries first. We strive to be environmentally responsible and to 
        minimize our own waste and carbon footprint.
      </p>
    </>
  }
/>
        </div>
      </div>
      <HowItWorks />
      <WhyItMatters />
      <GetInvolved />
      <Footer />
    </>
  );
};

export default Aboutus;
