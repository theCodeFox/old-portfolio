import React from 'react';
import ProjectScrollBanner from './ProjectScrollBanner';

const HiveNews = () => {
  return <div>
    <ProjectScrollBanner
      prev={{label: "Pocket GP", route: "pocketgp"}}
      curr="Hive News"
      next={{label: "Portfolio", route: "portfolio"}}
    />
    <div className="project-container">
      <div className="project-projectInfo1">
        <p><span className="highlight">Hive News</span> is an informal site that allows users to add, remove, view articles and topics that they are interested in. It is designed to be <span className="highlight">responsive</span> and therefore be <span className="highlight">accessable by anyone on any device.</span></p>
        <p>This is a study project piece created in <span className="highlight">React</span> using <span className="highlight">Reach Router, JavaScript, HTML</span> and <span className="highlight">CSS</span> on the front end. <span className="italics">(Tested using <span className="highlight">Cypress</span> and <span className="highlight">Jest.</span>)</span> The back end consists of <span className="highlight">Express, JavaScript</span> and <span className="highlight">Knex.</span> <span className="italics">(Tested in <span className="highlight">Mocha, Chai, Nodemon</span> and <span className="highlight">Supertest</span> with Nyan Cat as my reporter to keep me company)</span>.</p>
      </div>
      <div className="project-projectInfo2">
        <p><span className="highlight">Anonymous (non member)</span> can only view topics, articles and comments, or sign-up to become a member.</p>
        <p><span className="highlight">Member (after sign up or logging in as member)</span> can view topics, articles and comments. They can add new topics, articles and comments as well as up or down vote articles and comments. They can also delete any article or comment that they have created.</p>
        <p><span className="highlight">Admin</span> can view topics, articles, comments and users. They can add new topics, articles, comments and users as well as up or down vote articles and comments. They can delete any article and comment and to make it more scaleable they can view all articles and comments created by a user on the admin only user page.</p>
      </div>
      <div className="project-projectInfo3">
        <p>The back end is hosted on <span className="highlight">Heroku</span> using RESTful endpoints</p>
        <p>The front end is hosted on <span className="highlight">Netlify</span></p>
        <p>Git was used for version control and code is stored in a public repo on my <span className="highlight">GitHub</span></p>
      </div>
      <img
        src={require("../images/hiveNewsTablet.png")}
        alt="user page on iPad"
        className="project-images project-image1"
      />
      <img
        src={require("../images/hiveNewsMobile.png")}
        alt="article page on mobile"
        className="project-images project-image2"
      />
      <img
        src={require("../images/hiveNewsBrowser.png")}
        alt="topics page on browser"
        className="project-images project-image3"
      />

    </div>
    <ProjectScrollBanner
      prev={{label: "Pocket GP", route: "pocketgp"}}
      curr="Hive News"
      next={{label: "Portfolio", route: "portfolio"}}
    />
  </div>
}

export default HiveNews;