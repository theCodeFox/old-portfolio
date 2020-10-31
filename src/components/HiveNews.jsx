import React from 'react';
import ProjectScrollBanner from './ProjectScrollBanner';

// image imports
import tabletImage from '../images/hiveNewsTablet.png';
import mobileImage from '../images/hiveNewsMobile.png';
import browserImage from '../images/hiveNewsBrowser.png';

const HiveNews = ({ theme }) => {
  return <div className={`home-${theme}`}>
    <ProjectScrollBanner
      prev={{label: "Pocket GP", route: "pocketgp"}}
      curr="Hive News"
      next={{label: "Portfolio", route: "portfolio"}}
      theme={theme}
    />
    <div className="project-container">

      <div className="project-projectInfo1">
        <p><span className={`highlight highlight-${theme}`}>Hive News</span> is an informal site that allows users to add, remove, view articles and topics that they are interested in. It is designed to be <span className={`highlight highlight-${theme}`}>responsive</span> and therefore be <span className={`highlight highlight-${theme}`}>accessable by anyone on any device.</span></p>
        <p>This is a study project piece created in <span className={`highlight highlight-${theme}`}>React</span> using <span className={`highlight highlight-${theme}`}>Reach Router, JavaScript, HTML</span> and <span className={`highlight highlight-${theme}`}>CSS</span> on the front end. <span className="italics">(Tested using <span className={`highlight highlight-${theme}`}>Cypress</span> and <span className={`highlight highlight-${theme}`}>Jest.</span>)</span> The back end consists of <span className={`highlight highlight-${theme}`}>Express, JavaScript</span> and <span className={`highlight highlight-${theme}`}>Knex.</span> <span className="italics">(Tested in <span className={`highlight highlight-${theme}`}>Mocha, Chai, Nodemon</span> and <span className={`highlight highlight-${theme}`}>Supertest</span> with Nyan Cat as my reporter to keep me company)</span>.</p>
      </div>

      <div className="project-projectInfo2">
        <p><span className={`highlight highlight-${theme}`}>Anonymous (non member)</span> can only view topics, articles and comments, or sign-up to become a member.</p>
        <p><span className={`highlight highlight-${theme}`}>Member (after sign up or logging in as member)</span> can view topics, articles and comments. They can add new topics, articles and comments as well as up or down vote articles and comments. They can also delete any article or comment that they have created.</p>
        <p><span className={`highlight highlight-${theme}`}>Admin</span> can view topics, articles, comments and users. They can add new topics, articles, comments and users as well as up or down vote articles and comments. They can delete any article and comment and to make it more scaleable they can view all articles and comments created by a user on the admin only user page.</p>
      </div>

      <div className="project-projectInfo3">
        <p>The back end is hosted on <span className={`highlight highlight-${theme}`}>Heroku</span> using RESTful endpoints</p>
        <p>The front end is hosted on <span className={`highlight highlight-${theme}`}>Netlify</span></p>
        <p>Git was used for version control and code is stored in a public repo on my <span className={`highlight highlight-${theme}`}>GitHub</span></p>
      </div>
      
      <img src={tabletImage} alt="user page on iPad" className="project-images project-image1" />

      <img src={mobileImage} alt="article page on mobile" className="project-images project-image2" />

      <img src={browserImage} alt="topics page on browser" className="project-images project-image3" />

    </div>
    <ProjectScrollBanner
      prev={{label: "Pocket GP", route: "pocketgp"}}
      curr="Hive News"
      next={{label: "Portfolio", route: "portfolio"}}
      theme={theme}
    />
  </div>
}

export default HiveNews;