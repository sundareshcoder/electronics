import React from "react";
import {Link,Route,Routes} from "react-router-dom";
import Home from "./Home.js";
import Products from "./Products.js";
import Appliances from "./Appliances.js";
import Brands from "./Brands.js";
import Signup from "./Signup.js";
import About from "./About.js";
// import logo from './logo.svg';
import './App.css';
import {   AiOutlineSearch, AiOutlineShoppingCart,} from "react-icons/ai";
// import { AiFillShopping, AiOutlineSearch } from "react-icons/ai";

// function App() {
//   return (
//     <div className="App">y
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
function App() {
  alert("welcome to the digital home");
  return(
    <div>
      <nav>
        <ul>
         <b><li style={{color:"red",border:"1px solid black",padding:"10px",}}>digital homes</li></b>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Products">products</Link></li>
          <li><Link to="/Brands">Brands</Link></li>
          <li><Link to="/Appliances">Appliances</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Signup">Sign up</Link></li>
          <AiOutlineSearch />
         <input type="search" class="sh"  name="search" placeholder="type here to search"  size={20} id="s"></input>
         <AiOutlineShoppingCart  class="cart" style={{color:"red",fontSize:35,alignItems:"center"}} />
        </ul>
      </nav>
    <Routes>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/Products" element={<Products/>}></Route>
      <Route path="/Brands" element={<Brands/>}></Route>
      <Route path="/Appliances" element={<Appliances/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>

    </Routes>
    </div>
  )
  
}

export default App;
