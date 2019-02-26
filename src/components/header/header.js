import { Link } from "gatsby"
import React from "react"
import "./header.css"
import logo from "../../images/logo.svg"

const Header = () => (
  <header className="header-display">
    <div className="header-main-content">
     <img src={logo} className="main-logo" alt="gurunanakdwara logo"/> <span className="logo-text">Guru Nanak Dwara</span>
     <span className="secure-info">🔒 SECURE RESPONSE</span>
     </div>
  </header>
);


export default Header
