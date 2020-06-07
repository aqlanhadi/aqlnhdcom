import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
    <footer>
        <div className="container">
            <div className="footer-wrapper">
                <div className="left">
                    {/* <div className="big">12</div> */}
                    <div className="small"></div>
                </div>
                <div className="socials">
                    <nav>

                        <Link to="/">Ig.</Link>
                        <Link to="/">Yt.</Link>
                    </nav>
                </div>
            </div>
        </div>
        
    </footer>
)

export default Footer