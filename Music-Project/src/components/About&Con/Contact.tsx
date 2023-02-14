import { Fragment } from "react";
import "./Al.css";

// Here we have used react-icons package for the icons

const Contact = () => {
  return (
    <>
    
    <div className="header">
   
    <img src="https://img.freepik.com/free-photo/trumpet-sheet-music_23-2147781318.jpg?w=1060&t=st=1676196487~exp=1676197087~hmac=fd0f1b1feded2a5dbbe107ba253669c8b816a554d94ac9b7a40c69c923829f82"  style={{"width" : "60vw"}}></img>
  
     <form className="form">  
     <h1>Contact Us</h1>  
  <input name="name" type="text" className="feedback-input" placeholder="Name" />   
  <input name="email" type="text" className="feedback-input" placeholder="Email" />
  <textarea name="text" className="feedback-input" placeholder="Comment"></textarea>
  <div className="btn">
  <input type="submit" value="SUBMIT"/>
  </div>
</form>
</div>
    </>
  );
};

export default Contact;