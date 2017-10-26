import React, { Component } from 'react';
import './App.css';


import menu from './images/menu.png';
import hero from './images/hero.png';
import cta from './images/cta.png';


 class Home extends Component {
  constructor(props) {
    super(props);
    
    this.state = {page : 0};
   
  }

    

  
  
  render()
  {
    return (
      <span className="sendBack">
      <img src={hero} className="hero" alt="hero"/>
      


</span>
    );
  }

}

export default Home;







