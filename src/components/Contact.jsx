import React from 'react';

const Contact = () => {
  return <div className="contact">
    <a href="https://www.linkedin.com/in/kay-vose-codefox/" target="_blank" rel="noopener noreferrer" className="contact-button">
      <img className="contactImages" src={require("../images/linkedin-logo.png")} alt="LinkedIn" height="30px" width="30px" />
      <h2 className="highlight">Kay Vose</h2>
      <p>Click me to connect on LinkedIn.</p>
    </a>
    <a href="https://github.com/theCodeFox" target="_blank" rel="noopener noreferrer" className="contact-button">
      <img className="contactImages" src={require("../images/github-logo.png")} alt="GitHub" height="30px" width="30px" />
      <h2 className="highlight">theCodeFox</h2>
      <p>I have a few public repos on GitHub, click here if you want to have a nosy.</p>
    </a>
  </div>
}

export default Contact;