import React from 'react';
import './App.css';


const Navbar = (props) => {
  const {repos} = props;
    return(
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a href="/"><li>Home</li></a>
            {repos.map((scp) => {
                return(
                    <a href={'#'+scp.item}><li>{scp.item}</li></a>
                  );
              })}
          </ul>
        </div>
      </nav>
        
    )
}

export default Navbar;