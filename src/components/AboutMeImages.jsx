import React from 'react';

const AboutMeImages = () => {
  return <div className="aboutMe-image-container">
  <img src={require("../images/love-mcr.jpg")} alt="We love MCR graffiti" className="imgResize aboutMe-image1" />

  <img src={require("../images/coffee.jpg")} alt="coffee cup on laptop" className="imgResize aboutMe-image3" />

  <img src={require("../images/manchester-skyline.jpg")} alt="Manchester skyline"  className="imgResize aboutMe-image4" />

  <img src={require("../images/kay-in-kyoto.jpg")} alt="Kay in Kyoto"  className="imgResize aboutMe-image2" />
</div>
}

export default AboutMeImages;