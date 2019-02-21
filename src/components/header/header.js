import { Link } from "gatsby"
import React from "react"
import "./header.css"

const Header = () => (
  <header className="header-display">
    <div className="header-main-content">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
         
        </Link>
      </h1>
    </div>
  </header>
);


export default Header
