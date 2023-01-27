import React from "react";
import logo from '../photos/logo.png'
// import logo from "./99photos/logo.png";

const Header = () =>{
    return (
        <>
            
            <div className="header">
                <img src={logo} alt="Logo" width="70" height="70"></img>
                <h1>Ram Dehariya</h1>
            </div>
        </>
    )
}

export default Header;