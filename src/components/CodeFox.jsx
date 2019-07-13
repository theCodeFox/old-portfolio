import React from 'react';
import { navigate } from '@reach/router';

const CodeFox = ({ activePage, togglePage }) => {
  return <div className="home">
      <span onClick={() => {
        togglePage('AboutMe');
        navigate('/about-me', { state: { msg: 'redirect to about-me' } })
      }}>
      <img className="avatar" src={require("../images/theCodeFox.png")} alt="CodeFox" height="300" width="300" />
    </span>
    <h1>CodeFox</h1>
    <h2>Junior Software Engineer</h2>
  </div>
}

export default CodeFox;