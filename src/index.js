import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from "./App";

// import './index.css';
// import Display from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// class Add{
//   display(){
//     var a=40;
//     var b=50;
//     var c=a+b;
//     document.getElementById("root").innerHTML=c;
//   }
// }
// var d=new Add();
// d.display();
//functional component
// function Hello() {
//   return(
//     <div>
//       <img src=""></img>
//       <h1>hiii</h1>
//       <h2>heloo</h2>
//     </div>
//   );
// }
// const a=document.getElementById('root');
// const root=ReactDOM.createRoot(a);
// root.render(<Hello/>)
// ReactDOM.render(<Hello/>,document.getElementById("root").innerHTML);
//class component
//   class Li extends React.Component{
//     constructor(){
//       super()
//       this.state={a:"welcome",b:"students"};
//     }
//     componentWillUnmount(){
//       alert("hello");
//     }
//   render(){
//     return(
//       <div>
//         <h1>{this.state.a}</h1>
//         <h2>{this.state.b}</h2>
//       </div>
//     )
//   }
//   }
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Li/>)
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  </React.StrictMode>);
