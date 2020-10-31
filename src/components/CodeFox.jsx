import React from 'react';
import { navigate } from '@reach/router';

const CodeFox = ({ activePage, togglePage, theme }) => {
  return <div className={`home-${theme} codeFox-content`}>
      <span onClick={() => {
        togglePage('AboutMe');
        navigate('/about-me', { state: { msg: 'redirect to about-me' } })
      }}>
      <img className={`avatar avatar-${theme}`} src={require(`../images/theCodeFox-${theme}.png`)} alt="CodeFox" height="300" width="300" />
    </span>
    <h1>CodeFox</h1>
    <h2>Business Intelligence Developer</h2>
  </div>
}

export default CodeFox;