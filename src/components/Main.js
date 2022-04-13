import React from 'react';
import reactLogo from '../logo.svg';

export default function Main() {
  return (
    <main>
      <h1 className="main--title">Fun facts about React</h1>
      <ul className="main--list">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walk</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <img className="main--icon" src={reactLogo} alt="react logo"/>
    </main>
  )
}
