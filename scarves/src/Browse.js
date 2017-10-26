import React, { Component } from 'react';
import './App.css';
import menu from './images/menu.png';
import pent from './images/pent.png';
import hero from './images/hero.png';

class Browse extends Component {
  constructor(props) 
  {
    super(props);
    
    
   
  }

  goBrowse(p)
 {
  localStorage.setItem("n",p);
  localStorage.setItem("pg",1);
  return window.location.reload();
 }

render()
  {
    return (
      <span>
        <img src={hero} className="hero" alt="hero"/>
        <img src={pent} className="pent" alt="pent"/>
        
        <div className="menuitems">
          <div onClick={(ev) => this.goBrowse(0)}> Wollen scarf</div>
          <div onClick={(ev) => this.goBrowse(1)}> Silk scarf</div>
          <div onClick={(ev) => this.goBrowse(2)}> Cotton scarf</div>
        </div>


      </span>
    );
  }

}

export default Browse;







