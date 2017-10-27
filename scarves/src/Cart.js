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
import line from './images/line.png';
import checkout from './images/checkout.png';
import shopButton from './images/shopButton.png';

 
var db= '{ "id":[' + 
                       '{"title" : "Hand-knit infinity scarf" , "subt" : "Made with the finest wool, enjoy the comfort and warmth this scarf can give you. Perfect for lifting up your spirit on a snowy day." , "price" : "10" , "avColors" : ["red","blue","green"] },' +
                       '{"title" : "Printed silk scarf" , "subt" : "Pure silk made for true sophistication. Spice up any plain outfit with this beauty!" , "price" : "20" , "avColors" : ["red","blue","green","yellow"] },' +
                       '{  "title" : "The Head Scarf" ,"subt" : "Styled with our special knot, this cotton scarf has been our best-seller! Once you feel how soft it is, you cannot go back." ,"price" : "45" , "avColors" : ["red","blue","green"]} ] }'; 

var history= '{ "scarf":[';
var c=Number(localStorage.getItem("cnt"));
var no=Number(localStorage.getItem("n"));
var subtotal=0,ship=0,del=0;

 class Cart extends Component {
  constructor(props) {
    super(props);
    
    this.state = {pic: "red"};
    this.state = {qty: 1};
    this.state = {count: c};
  
  }
 
displayMenu()
{
  
    localStorage.setItem("pg",3);
   
  return window.location.reload();

}

changeColor(strin)
 {
     if(strin === "red")
      return <img src={red} className="kuler" alt="color"/>
    if(strin === "blue")
      return <img src={blue} className="kuler" alt="color"/>
    if(strin === "green")
      return <img src={green} className="kuler" alt="color"/>
    if(strin === "yellow")
      return <img src={yellow} className="kuler" alt="color"/>
 }

 changeImage(idd,colorr)
 {
   if (idd === 0)
      {
        if(colorr === "red")
      return <img src={redKnit} className="imm" alt="product"/>
    if(colorr === "blue")
      return <img src={blueKnit} className="imm" alt="product"/>
    if(colorr === "green")
      return <img src={greenKnit} className="imm" alt="product"/>
    if(colorr === "yellow")
      return <img src={yellowKnit} className="imm" alt="product"/>
      }
     if (idd === 1)
       {
          if(colorr === "red")
      return <img src={redPrint} className="imm" alt="product"/>
    if(colorr === "blue")
      return <img src={bluePrint} className="imm" alt="product"/>
    if(colorr === "green")
      return <img src={greenPrint} className="imm" alt="product"/>
    if(colorr === "yellow")
      return <img src={yellowPrint} className="imm" alt="product"/>

       }
     if (idd === 2)
       {
        if(colorr === "red")
      return <img src={redHead} className="imm" alt="product"/>
    if(colorr === "blue")
      return <img src={blueHead} className="imm" alt="product"/>
    if(colorr === "green")
      return <img src={greenHead} className="imm" alt="product"/>
    if(colorr === "yellow")
      return <img src={yellowHead} className="imm" alt="product"/>
      }
 }


updateCart(event)
{
  this.setState({count: this.state.count+1});
  localStorage.setItem("cnt",this.state.count+1);
  var newitem = {idn: no, qty: this.state.qty, color: this.state.pic};
  history.push(newitem);
  localStorage.setItem("cartArray",history);
                       
}

goHome()
 {
  localStorage.setItem("pg",0);
  return window.location.reload();
 }



displayCount()
{
  if(this.state.count > 0)
    return "Your cart (" + this.state.count + " item" + (this.state.count > 1 ? "s)" : ")");
  if(this.state.count ===0)
    return "Your cart is empty";
}

delete(x)
{
  //need to remove the parent of this item
  if (del === 0)
  {  
    var list = localStorage.getItem("cartArray");
    list = JSON.parse(list);
    list.splice(x,1);
  
  
    localStorage.setItem("cartArray",JSON.stringify(list));
     this.setState({count: list.length});
     localStorage.setItem("cnt",list.length);
    del=1;
     return window.location.reload();
   }
}


placeItem()
{
  var c,q,price,title, a=[],m, item;
  var list = JSON.parse(localStorage.getItem("cartArray"));
  if(list == null)
    m=0;
  else
    m=list.length;
  for(var i =0;i < m; i++)
  {
    item = list[i];
    var x=Number(item.idn);
    var getd= JSON.parse(db);
    title= String(getd.id[x].title);
    price=String(getd.id[x].price);
    
    if(this.state.qty)
    q=item.qty;
    if(isNaN(price+q))
      q=1;
    subtotal+=(Number(getd.id[x].price)*q);
    

    c = item.color;
    a.push (<div className="item">

         {this.changeImage(x,c)}
         <div className="itemTitle">{title}</div> 
         <div className="pricey">${price}</div>  
         <div className="quant">{q}</div> 
         <div className="tprice">${price*q}</div>
         <div className="colorChoice">Color: {this.changeColor(c)} </div>
         <div className="remove" value={i} onClick= {(ev) => this.delete(ev.target.value)}>x Remove</div>
    
    </div>);

    

  }
  
 return a;

}

  render()
  {
    
    var getD= JSON.parse(db);
    localStorage.setItem("count","0");
    

    return (
      <span>
      
 <div className="blu"/>
 <div className = {"logop" + (this.state.page === 0 ? " active" : "")} onClick={(ev) => this.goHome()}>
<p className="logo">Scarves</p>
<p className="logo2">to your beautiful</p>
</div>
<img src={cart} className="cart" alt="cart"/>
<div className = {(this.state.count === 0 ? "displayNone" : "count")} >{this.state.count}</div>
<img src={menu} className = "menu" onClick={(ev) => this.displayMenu(ev)} alt="menu"/>

<div className="itemShow"> {this.displayCount()}
<div className={this.state.count === 0? "displayNone": ""}>
<pre >Item                                     Price          Quantity         Total</pre>
<img src={line} className="linepos" alt="line"/>
{this.placeItem()}

</div>
</div>

<div className={this.state.count === 0? "displayNone": "blueBox"}>
   <div className="one">Subtotal: ${subtotal}</div>
   <div className="one">Shipping: ${ship}</div>
   <img src={line} className="line1" alt="line"/>
   <div className="onet">   Total: ${subtotal+ship}</div>
   <img src={checkout} className="checkout" alt="checkout"/>
</div>

<img src={shopButton} className={this.state.count === 0? "shopp": "displayNone"} onClick={(ev) => this.displayMenu()} alt="shopButton"/>

</span>
    );
  }

}

export default Cart;






