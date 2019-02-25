// import { Link } from "gatsby"
import React from "react"
import "./footer.css"



const Footer = () => (
<footer className="footer-display">
<div className="footer-main-content">
© {new Date().getFullYear()}, Guru Nanak Dwara
{` `}
<p style={{margin:0}}> Guru Nanak Dwara is a tax-exempt 501c(3) non-profit charitable
        organization. <br/>Every generous donation is tax deductible in the USA.{" "}</p>
{/* <a href="https://www.gatsbyjs.org">Gatsby</a> */}
</div>
</footer>
);

export default Footer;