import React from "react";
import "./abs.css";

import { AiFillFacebook,  AiFillGoogleCircle, AiFillInstagram, AiFillMail, AiFillPhone, AiFillTwitterCircle,   AiFillYoutube,  AiOutlineWeiboCircle,  AiOutlineWhatsApp} from "react-icons/ai";

function About() {
    return(
        <div>
         <h1 style={{color:"red",textAlign:"left",fontSize:30,fontFamily:"bold",textTransform:"capitalize"}}>About</h1>
         <p style={{textAlign:"justify",fontSize:20}}>digital homes was started  the year of 2020.The sole objective was to satisfy the needs of consumers by selling good quality products at lowest prices and providing best after sales service and thereby earn customer satisfaction. We felt that we could reach more people not only in the urban cities of Tamil Nadu but also to the most rural areas too. We are in constant endeavour and pursuit of our objectives to bridge the customer needs & satisfaction. </p>
        <h1 style={{color:"red",textAlign:"left",fontSize:30,fontFamily:"bold",textTransform:"capitalize"}}>branches</h1>
       <p style={{textAlign:"-moz-initial",fontSize:20}}>chennai | chennai -porur |chennai -tambaram | chennai -t.nagar | coimbatore | madurai | dindigul |tirchy | tiruppur | karur | salem | erode</p>
      <div>
        <h1 style={{color:"red",textAlign:"left",fontSize:30,textTransform:"capitalize"}}>contact us</h1>
        <p style={{textTransform:"lowercase"}}>enquiry - <AiFillMail/> email:digitalhomes@gmail.com |<AiFillPhone/> mobile:9790546864 |<AiOutlineWhatsApp/> whatsapp:9790546864 | <AiOutlineWeiboCircle/> website:www.digitalhomes.com </p>
       <footer>
        <p style={{color:"red",textAlign:"left",fontSize:28,textTransform:"capitalize"}} >follow on</p>
        <AiFillFacebook  class="fb"/>
        <AiOutlineWhatsApp class="wp"/>
        <AiFillYoutube class="yt"/>
        <AiFillInstagram class="in"/>
        <AiFillTwitterCircle class="ci"/>
        <AiFillGoogleCircle class="go"/>
        </footer>
        <p class="cr" style={{textTransform:"capitalize"}}>copyright &copy;digitalhomes.all  rights reserved</p>
      </div>

        </div>
    );
}
export default About;