import React from 'react';
import ProjectScrollBanner from './ProjectScrollBanner';

// image imports
import portfolioImage from '../images/portfolioImage1.png';

const Portfolio = ({ theme }) => {
  return <div className={`home-${theme}`}>
    <ProjectScrollBanner
      prev={{label: "Hive News", route: "hivenews"}}
      curr="Portfolio"
      next={{label: "Pocket GP", route: "pocketgp"}}
      theme={theme}
    />
    <div>
    <div className="project-container">
      <div className="project-projectInfo2">
        <p><span className={`highlight highlight-${theme}`}>CodeFox Portfolio</span> is where you are now! It has been designed to display any personal projects I am working on and give you some more information on myself.</p>
        <p>I originally designed it primarily in <span className={`highlight highlight-${theme}`}>HTML</span> and <span className={`highlight highlight-${theme}`}>CSS</span> as it was mainly static. However, I decided to convert it into <span className={`highlight highlight-${theme}`}>React</span> to make it more scaleable and user friendly. I have worked with React and Reach Router previously and found it to be effective for <span className={`highlight highlight-${theme}`}>responsive design</span> and <span className={`highlight highlight-${theme}`}>clean code.</span></p>
        <p>This is a solo project in <span className={`highlight highlight-${theme}`}>JavaScript, HTML and CSS.</span> It has been created in <span className={`highlight highlight-${theme}`}>React</span> with <span className={`highlight highlight-${theme}`}>Reach Router.</span> The ASCII fox (aka, CodeFox) was created in Visual Studio Code using the entension Rainbow Brackets and then edited using basic image editing software.</p>
        <p>When creating this portfolio I was determined to make it using <span className={`highlight highlight-${theme}`}>responsive design</span> as most people (myself included) use their mobile devices for their primary internet usage. I was aiming at a design that retains my playful edge while being easy for a user to navigate.</p>
      </div>
      <img src={portfolioImage} alt="home page in browser" className="project-images project-image2" />
    </div>
    <ProjectScrollBanner
      prev={{label: "Hive News", route: "hivenews"}}
      curr="Portfolio"
      next={{label: "Pocket GP", route: "pocketgp"}}
      theme={theme}
    />
  </div>
  </div>
}

export default Portfolio;