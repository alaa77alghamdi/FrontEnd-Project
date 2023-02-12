import React from "react";
import "./Al.css";
export default function Profile() {
  return (<>
    <h1 className="text">User Profile</h1>
    <div className="Continer">
     
      <div className="column1">
        <div className="Card1">
        <h3>User Info</h3>
          <p>Name: alaa abdu</p>
          <p>Email: lolo@gmail.com</p>
        </div>
      </div>

      <div className="column2">
        <div className="Card2">
        <h3>Tickt Info</h3>
          <p>Tickt:</p>
        </div>
      </div>
    </div>

    </>
  );
}
