// src/pages/Aboutus_Components/Card.js
import React from 'react';
import PropTypes from 'prop-types';
import '../assets/style.css'; // Import CSS for styling

const Card = ({ imgSrc, imgAlt, text }) => {
  return (
    <div className="card mb-4">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={imgSrc} className="card-img" alt={imgAlt} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <p className="card-text mx-3 fs-sm-1 text-monoscope">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
