import React, { Component } from 'react';
import { Router, Link } from "@reach/router";
import ls from 'local-storage';
import './App.css';
import CodeFox from './components/CodeFox';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Projects from './components/Projects';
import PocketGP from './components/PocketGP';
import HiveNews from './components/HiveNews';
import Portfolio from './components/Portfolio';

class App extends Component {
  state = {
    activePage: ls.get('activePage') || 'CodeFox'
  }

  render() {
    const { activePage } = this.state;
    return (
      <div>
        <nav>
          <header>
          
          {activePage === 'CodeFox'
          ? <Link to="/" className="active codeFox">CodeFox</Link>
          : <span className="hover"><Link to="/" className="headerLink codeFox" onClick={() => this.togglePage('CodeFox')}>CodeFox</Link></span>}

          {activePage === 'Contact'
          ? <Link to="/contact" className="active right">Let's Talk</Link>
          : <span className="hover"><Link to="/contact" className="headerLink right" onClick={() => this.togglePage('Contact')}>Let's Talk</Link></span>}

          {activePage === 'Projects'
          ? <Link to="/projects" className="active right">Projects</Link>
          : <span className="hover"><Link to="/projects" className="headerLink right" onClick={() => this.togglePage('Projects')}>Projects</Link></span>}

          {activePage === 'AboutMe'
          ? <Link to="/about-me" className="active right">About Me</Link>
          : <span className="hover"><Link to="/about-me" className="headerLink right" onClick={() => this.togglePage('AboutMe')}>About Me</Link></span>}

          </header>
          <Router tabIndex="">
            <CodeFox
              path="/"
              activePage={activePage}
              togglePage={this.togglePage}
              default
            />
            <AboutMe path="/about-me" />
            <Contact path="/contact" />
            <Projects path="/projects" />
            <PocketGP path="/projects/pocketgp" />
            <HiveNews path="/projects/hivenews" />
            <Portfolio path="/projects/portfolio" />
          </Router>
        </nav>

        <div className="footer">
          <a href="https://github.com/theCodeFox" target="_blank" rel="noopener noreferrer" className="footerLink">
            <img className="footerImages" src={require("./images/github-logo.png")} alt="GitHub" height="30px" width="30px" />
          </a>
          <a href="https://www.linkedin.com/in/kay-vose-codefox/" target="_blank" rel="noopener noreferrer" className="footerLink">
            <img className="footerImages" src={require("./images/linkedin-logo.png")} alt="LinkedIn" height="30px" width="30px" />
          </a>
        </div>

      </div>
    );
  }

  togglePage = (page) => {
    const { activePage } = this.state;
    if (activePage !== page) {
      this.setState({ activePage: page })
      ls.set('activePage', page)
    }
  }
}

export default App;
