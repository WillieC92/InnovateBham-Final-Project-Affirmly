import React from 'react';
import { Link } from "react-router-dom";


const Navbar = () => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-120px";
        }
        prevScrollpos = currentScrollPos;
    }

    return (
        <>
            <nav className="navbar sticky-top" id="navbar">
                <Link to="/home">
                    <img className="footer-logo" src="../images/newaffirmlylogo.svg" alt="Affirmly Logo" width="115" height="115" />
                </Link>
                <div>
                    <Link to="/accomplishedtasks" className="nav-link text-decoration-none">
                        Accomplished Task
                    </Link>
                </div>
                <div>
                    <Link to="/newtask" className="nav-link text-decoration-none">
                        New Task
                    </Link>
                </div>
                <div>
                    <Link to="/trophycase" className="nav-link text-decoration-none">
                        Trophy Case
                    </Link>
                </div>
                <div>
                    <Link to="/" className="nav-link text-decoration-none">
                        Logout
                    </Link>
                </div>
                <div className="streak-text">
                    8 Day Streak
                    <img src="../images/megaphone.gif" alt="megaphone" width="120" height="120" />
                </div>
            </nav>


        </>
    )

}

export default Navbar;