import React, { Component } from 'react';
import './App.css';
import redKnit from './images/redKnit.png';
import blueKnit from './images/blueKnit.png';
import greenKnit from './images/greenKnit.png';
import yellowKnit from './images/yellowKnit.png';
import redPrint from './images/redPrint.png';
import bluePrint from './images/bluePrint.png';
import greenPrint from './images/greenPrint.png';
import yellowPrint from './images/yellowPrint.png';
import redHead from './images/redHead.png';
import blueHead from './images/blueHead.png';
import greenHead from './images/greenHead.png';
import yellowHead from './images/yellowHead.png';
import red from './images/red.png';
import blue from './images/blue.png';
import green from './images/green.png';
import yellow from './images/yellow.png';
import menu from './images/menu.png';
import cart from './images/cart.png';
import inter from './images/inter.png';

 
var db= '{ "id":[' + 
                       '{"title" : "Hand-knit infinity scarf" , "subt" : "Made with the finest wool, enjoy the comfort and warmth this scarf can give you. Perfect for lifting up your spirit on a snowy day." , "price" : "10" , "avColors" : ["red","blue","green"] },' +
                       '{"title" : "Printed silk scarf" , "subt" : "Pure silk made for true sophistication. Spice up any plain outfit with this beauty!" , "price" : "20" , "avColors" : ["red","blue","green","yellow"] },' +
                       '{  "title" : "The Head Scarf" ,"subt" : "Styled with our special knot, this cotton scarf has been our best-seller! Once you feel how soft it is, you cannot go back." ,"price" : "45" , "avColors" : ["red","blue","green"]} ] }'; 

var history;
var c=Number(localStorage.getItem("cnt"));
var no=Number(localStorage.getItem("n"));

 class ProductD extends Component {
  constructor(props) {
    super(props);
    
    this.state = {pic: "red"};
    this.state = {qty: 1};
    this.state = {count: c};
    this.state = {page : Number(localStorage.getItem("pg"))};
  
  }

goHome()
 {
  localStorage.setItem("pg",0);
  return window.location.reload();
 }

 displayMenu()
{
  if(this.state.page === 3)
    localStorage.setItem("pg",1);
  if(this.state.page === 1)
    localStorage.setItem("pg",3);
  return window.location.reload();

}

 changeColor()
 {
     if (no === 0)
      {
        if(this.state.pic === "red")
      return <img src={redKnit} className="prodimg" alt="product"/>
    if(this.state.pic === "blue")
      return <img src={blueKnit} className="prodimg" alt="product"/>
    if(this.state.pic === "green")
      return <img src={greenKnit} className="prodimg" alt="product"/>
    if(this.state.pic === "yellow")
      return <img src={yellowKnit} className="prodimg" alt="product"/>
      }
     if (no === 1)
       {
          if(this.state.pic === "red")
      return <img src={redPrint} className="prodimg" alt="product"/>
    if(this.state.pic === "blue")
      return <img src={bluePrint} className="prodimg" alt="product"/>
    if(this.state.pic === "green")
      return <img src={greenPrint} className="prodimg" alt="product"/>
    if(this.state.pic === "yellow")
      return <img src={yellowPrint} className="prodimg" alt="product"/>

       }
     if (no === 2)
       {
        if(this.state.pic === "red")
      return <img src={redHead} className="prodimg" alt="product"/>
    if(this.state.pic === "blue")
      return <img src={blueHead} className="prodimg" alt="product"/>
    if(this.state.pic === "green")
      return <img src={greenHead} className="prodimg" alt="product"/>
    if(this.state.pic === "yellow")
      return <img src={yellowHead} className="prodimg" alt="product"/>
      }
     
 }

updateCart(event)
{
  history = JSON.parse(localStorage.getItem("cartArray")) || [];
  

  history.push( {"idn" :  no , "qty" :  this.state.qty , "color" : this.state.pic } );
  localStorage.setItem("cartArray",JSON.stringify(history));

  localStorage.setItem("cnt",history.length);
  this.setState({count: history.length});

  return window.location.reload();
                       
}

showCart()
{
  localStorage.setItem("pg",2);
  return window.location.reload();
}


  render()
  {
    
    var getD= JSON.parse(db);
    var title=getD.id[no].title;
    var desc=getD.id[no].subt;
    var price=getD.id[no].price;
    localStorage.setItem("count","0");
    

    return (
      <span>
      
 <div className="blu"/>
 <div className = {"logop" + (this.state.page === 0 ? " active" : "")} onClick={(ev) => this.goHome()}>
<p className="logo">Scarves</p>
<p className="logo2">to your beautiful</p>
</div>
<img src={cart} className="cart" alt="cart" onClick={(ev) => this.showCart(ev)}/>
<div className = {(c === 0 ? "displayNone" : "count")} >{Number(localStorage.getItem("cnt"))}</div>
<img src={menu} className = "menu" onClick={(ev) => this.displayMenu()} alt="menu"/>
 
 <img src={inter} className="prodimg" alt="product"/> 
{this.changeColor()}

<div className="title">{title}</div>

<div className="desc">
  {desc}
</div>

<div className="price">
  Price: ${price}
</div>

<div className="color">
  Pick your color : </div>
<div className="choice">
  <img src={red} alt="red" className={"red" + (this.state.pic === "red" ? " active" : "")} onClick={(ev) => this.setState({pic: "red"})}/>
  <img src={blue} alt="blue" className={"blue" + (this.state.pic === "blue" ? " active" : "")} onClick={(ev) => this.setState({pic: "blue"})}/>
  <img src={green} alt="green" className={"green" + (this.state.pic === "green" ? " active" : "")} onClick={(ev) => this.setState({pic: "green"})}/>
  <img src={yellow} alt="yellow" className={"yellow" + (this.state.pic === "yellow" ? " active" : "")} onClick={(ev) => this.setState({pic: "yellow"})}/>
</div>

<div className="qty">Quantity :</div>




<input type="number" name="qty" value={this.state.qty} className="opt" onChange={(ev) => this.setState({qty: ev.target.value}) }     />



<button className="add" onClick= {(ev) => this.updateCart(ev)}> Add to cart</button>
</span>
    );
  }

}

export default ProductD;







