import React from "react";
import "./index.css";
function Home() {
    const mystyle={
        backgroundImage:"url('https://img.freepik.com/free-photo/coffee-machine-kitchen-with-nobody-it-modern-dining-room-with-coffee-machine-cozy-interior-with-technology-furniture-decoration-architercture-comfortable-room_482257-14561.jpg?w=900&t=st=1699367707~exp=1699368307~hmac=7696b516cb9b692417c4fef6acf99b47bf79145018a5a04c1c2af9ba555430e0')",
        backgroundSize:'cover',
        bacckgroundReapeat:'no-repeat',
        height:'90vh',
        width:'300',
        marginTop:'-80px',
    };
    return(
        <div style={mystyle}>
    <h1>digital homes</h1>
    <p style={{color:"white"}}>electronics|home appliance|mobile phones|smart watches</p>
</div>
    );
    
}
export default Home;