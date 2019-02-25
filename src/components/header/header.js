import { Link } from "gatsby"
import React from "react"
import "./header.css"
import logo from "../../images/logo.svg"

const Header = () => (
  <header className="header-display">
    <div className="header-main-content">
     <img src={logo} className="main-logo" alt="gurunanakdwara logo"/>
     <span className="secure-info">🔒 Secure Response</span>
     </div>
  </header>
);


export default Header
