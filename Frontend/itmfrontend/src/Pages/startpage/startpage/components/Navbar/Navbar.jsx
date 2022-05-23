import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
 
import { Container, makeStyles, Typography,Button } from "@material-ui/core";
import { Link}   from "react-router-dom";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Andrew</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            
            <Button component={Link} to='/loginpage'>  Login</Button>
              
            
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
