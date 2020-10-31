import React from 'react';

// image imports
import loveMCR from '../images/love-mcr.jpg';
import coffee from '../images/coffee.jpg';
import MCRSkyline from '../images/manchester-skyline.jpg';
import kayInKyoto from '../images/kay-in-kyoto.jpg';

const AboutMeImages = () => {
  return <div className="aboutMe-image-container">
  <img src={loveMCR} alt="We love MCR graffiti" className="imgResize aboutMe-image1" />

  <img src={coffee} alt="coffee cup on laptop" className="imgResize aboutMe-image3" />

  <img src={MCRSkyline} alt="Manchester skyline"  className="imgResize aboutMe-image4" />

  <img src={kayInKyoto} alt="Kay in Kyoto"  className="imgResize aboutMe-image2" />
</div>
}

export default AboutMeImages;