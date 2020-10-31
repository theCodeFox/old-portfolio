import React from 'react';
import { navigate } from '@reach/router';

// image imports
import lightAvatar from '../images/theCodeFox-light.png';
import darkAvatar from '../images/theCodeFox-dark.png';

const CodeFox = ({ activePage, togglePage, theme }) => {
  return <div className={`home-${theme} codeFox-content`}>
      <span onClick={() => {
        togglePage('AboutMe');
        navigate('/about-me', { state: { msg: 'redirect to about-me' } })
      }}>
      <img className={`avatar avatar-${theme}`} src={theme === "light" ? lightAvatar : darkAvatar} alt="CodeFox" height="300" width="300" />
    </span>
    <h1>CodeFox</h1>
    <h2>Business Intelligence Developer</h2>
  </div>
}

export default CodeFox;