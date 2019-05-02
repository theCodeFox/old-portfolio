import React from 'react';
import { navigate } from '@reach/router';

const ProjectList = ({ pocketGP, hiveNews, portfolio, toggleHoverPocketGP, toggleHoverHiveNews, toggleHoverPortfolio }) => {

  return <div className="projectLinks">
    <span>Below is a list of all my personal projects. Please click for more information:</span>
    <div className="projects">
      {pocketGP
      ? <img className="project-button-image" src={require("../images/pocketGP.png")} alt="pocket GP mobile app" onMouseEnter={toggleHoverPocketGP} onMouseLeave={toggleHoverPocketGP} onClick={() => {
        navigate('/projects/pocketgp', { state: { msg: 'project requested' } })
      }}/>
      : <span onClick={() => {
        navigate('/projects/pocketgp', { state: { msg: 'project requested' } })
      }} className="project-button" onMouseEnter={toggleHoverPocketGP} onMouseLeave={toggleHoverPocketGP}>
        <p><span className="highlight">PocketGP:</span> Cross platform mobile app supporting GPs and patients use their appointment times as efficiently as possible. Users can keep track of their ailments (including pictures and notes), with notifications and direct messaging between GP and patient.</p>
      </span>}
      {hiveNews
      ? <img className="project-button-image" src={require("../images/hiveNews.png")} alt="hive news screen shot" onMouseEnter={toggleHoverHiveNews} onMouseLeave={toggleHoverHiveNews} onClick={() => {
        navigate('/projects/hivenews', { state: { msg: 'project requested' } })
      }}/>
      : <span onClick={() => {
        navigate('/projects/hivenews', { state: { msg: 'project requested' } })
      }} className="project-button" onMouseEnter={toggleHoverHiveNews} onMouseLeave={toggleHoverHiveNews}>
        <p><span className="highlight">Hive News:</span> Allows user to create their own articles or read other users articles and comments. They can comment and vote on what they like or dislike and make changes to their articles or comments, including deleting what is no longer needed.</p>
      </span>}
      {portfolio
      ? <img className="project-button-image" src={require("../images/portfolioScreenshot.png")} alt="portfolio screen shot" onMouseEnter={toggleHoverPortfolio} onMouseLeave={toggleHoverPortfolio} onClick={() => {
        navigate('/projects/portfolio', { state: { msg: 'project requested' } })
      }}/>
      : <span onClick={() => {
        navigate('/projects/portfolio', { state: { msg: 'project requested' } })
      }} className="project-button" onMouseEnter={toggleHoverPortfolio} onMouseLeave={toggleHoverPortfolio}>
        <p><span className="highlight">Portfolio:</span> User can find out a little about me, Kay Vose (aka CodeFox), including what projects I have completed and how to contact me.</p>
      </span>}
    </div>
  </div>
}

export default ProjectList;