import React from 'react';

const AboutMeContent = () => {
  return <div className="aboutMeContent">
      <h3 className="highlight">
        <img src={require("../images/bee.png")} alt="bee" height="16" width="16" />{' '}
        Where you can find me
      </h3>
      <p>
        I live & work in <span className="highlight"> Manchester city centre.</span>
        <br />Whilst not at work, I can usually be found in the Northern Quarter typing away on my laptop in one of the many, coffee shops scattered about the place.
      </p>
      <h3 className="highlight">
        <img src={require("../images/laptop.svg")} alt="laptop" height="16" width="16" />{' '}
        Languages
      </h3>
      <p>
        <strong>HTML<br />CSS<br />JavaScript<br />TypeScript</strong>
      </p>
      <h3 className="highlight">
        <img src={require("../images/cog.png")} alt="cog" height="16" width="16" />{' '}
        What I am doing now
      </h3>
      <p>Graduated as a Junior Full Stack Developer (April 12th 2019) from <span className="highlight">Northcoders MCR</span>. I am now working as a Junior Software Engineer at <span className="highlight">Ditto AI Ltd</span></p>
      <h3 className="highlight">
        <img src={require("../images/cloud.png")} alt="cog" height="16" width="16" />{' '}
        Favourite Quote
      </h3>
      <p>When once you have tasted flight, you will forever walk the earth with your eyes turned skyward, for there you have been, and there you will always long to return. <span className="highlight">-Leonardo Da Vinci</span></p>
  </div>
}

export default AboutMeContent;