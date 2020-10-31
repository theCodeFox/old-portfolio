import React from 'react';

// image imports
import lightNextIcon from '../images/next-light.png';
import lightBeeIcon from '../images/bee-light.png';
import lightCogIcon from '../images/cog-light.png';
import lightCloudIcon from '../images/cloud-light.png';
import darkNextIcon from '../images/next-dark.png';
import darkBeeIcon from '../images/bee-dark.png';
import darkCogIcon from '../images/cog-dark.png';
import darkCloudIcon from '../images/cloud-dark.png';

const AboutMeContent = ({ theme }) => {
  return <div className="aboutMeContent">
      <h3 className={`highlight highlight-${theme}`}>
      <img src={theme === "light" ? lightNextIcon : darkNextIcon} alt="pointing hand" height="16" width="16" />{' '}
        Where you can find me
      </h3>
      <p>
        I live & work in <span className={`highlight highlight-${theme}`}> Manchester city centre.</span>
        <br />During these unusual times, I spend most of my time working remotely from my home office and my daily escape walks around the Northern Quarter. I am very work focused but make sure I mentor at Code and Stuff every Thursday between 17:30 and 20:30. We are currently on Discord and you can book your free place on Eventbrite as either a mentee or mentor.
        <br />
          <a href="https://codeandstuff-manchester.github.io/" target="_blank" rel="noopener noreferrer" className={`highlight-${theme}`}> 
          For more info, please visit us at codeandstuff-manchester.github.io!
          </a>
      </p>
      <h3 className={`highlight highlight-${theme}`}>
        <img src={theme === "light" ? lightBeeIcon : darkBeeIcon} alt="bee" height="16" width="16" />{' '}
        Core Technical Skills
      </h3>
      <p>
        <strong>
                Agile
          <br />Scrum
          <br />TDD
          <br />Continuous Integration
          <br />Azure
          <br />SQL Server Mgmt Studio
          <br />Power BI
          <br />Data Warehouse Construction
          <br />SSRS
          <br />SSIS
          <br />
          <br />Python
          <br />SQL (various)
          <br />DAX
          <br />Power M Query
          <br />JavaScript
          <br />HTML
          <br />CSS
          <br />
          <br />Problem Solving
          <br />Mentoring
          <br />Public Speaking
        </strong>
      </p>
      <h3 className={`highlight highlight-${theme}`}>
        <img src={theme === "light" ? lightCogIcon : darkCogIcon} alt="cog" height="16" width="16" />{' '}
        What I am doing now
      </h3>
      <p>Graduated as a Junior Full Stack Developer (April 12th 2019) from <span className={`highlight highlight-${theme}`}>Northcoders MCR</span>. I am now working as a Junior BI at <span className={`highlight highlight-${theme}`}>Foreign Currency Direct</span></p>
      <h3 className={`highlight highlight-${theme}`}>
        <img src={theme === "light" ? lightCloudIcon : darkCloudIcon} alt="cloud" height="16" width="16" />{' '}
        Favourite Quote
      </h3>
      <p>When once you have tasted flight, you will forever walk the earth with your eyes turned skyward, for there you have been, and there you will always long to return. <span className={`highlight highlight-${theme}`}>-Leonardo Da Vinci</span></p>
  </div>
}

export default AboutMeContent;