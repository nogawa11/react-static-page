import React from 'react';
import reactLogo from '../logo.svg';

export default function Navbar(props) {
  return (
    <nav className={props.lightMode ? "light" : ""}>
      <img className="nav--icon" src={reactLogo} alt="react logo"/>
      <h3 className="nav--logo_text">ReactFacts</h3>
      <div className="toggler">
        <p className="toggle--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleLightMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggle--dark">Dark</p>
      </div>
    </nav>
  )
}
