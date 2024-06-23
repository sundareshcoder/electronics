import React from "react";
import "./sign.css";

function Signup() {
    return(
        <div>
                <div id="f">
                <form>
                 <h4 style={{color:"navy"}}>create account</h4>
                <lebel>name</lebel><br></br>
                <input type="text" id="te" name="name"  size={30} required></input><br></br>
                <br></br>
                <lebel>mobile number</lebel><br></br>
                <input type="tel" placeholder="+91" size={3}></input>
                <input type="number" id="nu" name="phone" size={30} required></input><br></br>
                <br></br>
                <lebel>email</lebel><br></br>
                <input type="email" id="em" name="email" size={30} required></input><br></br>
                <br></br>
                <lebel>password</lebel><br></br>
                <input type="text" id="pa" name="pass" size={30} required></input><br></br>
                <br></br>
                <lebel>conform password</lebel><br></br>
                <input type="text" id="conu" name="conform" size={30} required></input><br></br>
                <br></br>
                <button class="btn">register</button><br>
                </br>
                <br></br>
            </form>
                </div>  
            
        </div>
    );  

}
export default Signup ;