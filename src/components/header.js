import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="container">
      <div className="header-wrapper">
        <div className="logo">
          <Link to="/">AQLNHD</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/about">About.</Link>
            <Link to="/work">Work.</Link>
            <Link to="/contact">Contact.</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header