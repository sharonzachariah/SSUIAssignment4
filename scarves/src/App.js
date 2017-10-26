import React, { Component } from 'react';
import './App.css';

import Home from './Home.js';
import Browse from './Browse.js';
import Cart from './Cart.js';
import ProductD from './ProductD.js';
import menu from './images/menu.png';
import hero from './images/hero.png';
import cta from './images/cta.png';
import cart from './images/cart.png';


var c=Number(localStorage.getItem("cnt"));
 class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {page : Number(localStorage.getItem("pg"))};
    

   
  }
 
 goHome()
 {
  localStorage.setItem("pg",0);
  return window.location.reload();
 }
 pageChange()
 {
   localStorage.setItem("pg",3);
   this.setState({flag: 1});
   return window.location.reload();
 }
 showCart()
{
  localStorage.setItem("pg",2);
  return window.location.reload();
}
displayMenu()
{
  if(this.state.page === 3)
    localStorage.setItem("pg",0);
  if(this.state.page === 0)
    localStorage.setItem("pg",3);
  return window.location.reload();

}

  renderPageView() {
    if(this.state.page === 0)
      return <Home/>
    if(this.state.page === 1)
      return <ProductD/>
    if(this.state.page === 2)
      return <Cart/>
    if(this.state.page === 3)
      return <Browse/>
  }
  
  render()
  {
    return (
      <span>
      <div className="banner"/>
 <div className = {"logop" + (this.state.page === 0 ? " active" : "")} onClick={(ev) => this.goHome()}>
<p className="logo">Scarves</p>
<p className="logo2">to your beautiful</p>
</div>


<img src={menu} className = "menu" onClick={(ev) => this.displayMenu()} alt="menu"/>
<img src={cta} className = {((this.state.page == 1)|| (this.state.page == 2) ? " displayNone" : "cta")} onClick={(ev) => this.pageChange() } alt="cta"/> 

{this.renderPageView()}

  
      </span>
    );
  }

}

export default App;







  