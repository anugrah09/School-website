import React from 'react'
import logo from '../images/logo.png'
import './css/navbar.css'
function Navbar() {
    return (
        <nav className="navbar">
            <div className='container'>
                <a className="logo" ><img src={logo} alt="" width="80" height="70" />
                    <a href="#" className="hogwarts">HOGWARTS</a>
                </a>
                <ul className="lists">
                    <li className="navlinks dropdown"> Enrolment
                    <div class="dropdown-content">
                            <a href="tabs.html">How to apply</a>
                            <a href="slideshow.html">Scholarship</a>
                            <a href="slideshow2.html">Entrance Testing</a>
                            <a href="slideshow2.html">Visit Us</a>

                        </div>
                        {/* <span className="navlinks button"> Dropdown</span>
                        </div> */}
                    </li>
                    <li className="navlinks dropdown"> Student Life
                    <div class="dropdown-content">
                            <a href="tabs.html">Early Learning</a>
                            <a href="slideshow.html">Junior Year</a>
                            <a href="slideshow2.html">Middle Year</a>
                            <a href="slideshow2.html">Final Year</a>

                        </div>
                        {/* <span className="navlinks button"> Dropdown</span>
                        </div> */}
                    </li>
                  
                    <li className="navlinks">Community</li>
                    <li className="navlinks">Boarding</li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;