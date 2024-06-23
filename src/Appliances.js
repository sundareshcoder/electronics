import React from "react";
// import { useState } from "react";
import{Navigate}from"react-router-dom";
function Appliances() {
    const [goToProduct,setGoToProduct]=React.useState(false);
    if(goToProduct){
        return <Navigate to="/products"/>;
    }

    return(
        <div>
           <h5 style={{color:"red",textAlign:"justify",fontSize:30,fontFamily:"bold",textTransform:"capitalize"}}>appliances</h5>
           <p style={{textAlign:"justify",fontSize:20,width:1000}}>Home Appliances-Air Conditioner|Washing Machine|Refrigerator|Water Heaters|Stabilizer|Air Cooler|Vacuum Cleaners|Water Purifiers|Iron Box|
Fan|
Air Purifiers|
Sewing Machine|
Water Dispenser|
UPS|
Water Softener|
Emergency Light <button onClick={()=> {
    setGoToProduct(true);}}>view all</button></p>
<p style={{textAlign:"justify",fontSize:20,width:1000}}> 
Home Entertainment -
Televisions|
Headphones|
Home Theatre|
Mobiles|
Speaker|
DTH|
DVD Player|
Fire Tv Stick|
Laptops|
Smart Watch <br></br><button onClick={()=> {
    setGoToProduct(true);}}>view all</button></p>
<p style={{textAlign:"justify",fontSize:20,width:1000}}>Kitchen Appliances -
Chappathi Maker|
Chopper|
Gas Stove|
Microwave Oven|
Chimney|
Dishwasher|
Pressure Cooker|
Sandwich Makers|
Oven Toaster Grill|
Flask|
Egg Boiler|
Coffee Maker|
Hand Mixer|
Idly Cooker|
Lunch Boxes|
Casserole|
Water Bottle|
Hot Box|
Dinner |
Air Fryer|
Rice Cooker|
Mixer Grinder|
Wet grinder<br></br>
<button onClick={()=> {
    setGoToProduct(true);}}>view all</button></p>
        </div>
    );}
export default Appliances;