import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

    return (

        <>
            <div className="footer d-flex position-fixed fixed-bottom py-3">
                <Link to="/home">
                    <img className="footer-logo"src="../images/newaffirmlylogo.svg" alt="Affirmly Logo" width="130" height="130" />
                </Link>
                <div>
                    <a target="_blank" href="https://icons8.com/icon/44019/linkedin">
                        <img className="linkedin" src="https://img.icons8.com/nolan/64/linkedin.png" />
                    </a>
                    {/* <Link to="/accomplishedtasks" className="link">
                        Accomplished Task
                    </Link> */}
                </div>
                <div>
                    <a target="_blank" href="https://icons8.com/icon/44003/facebook">
                        <img className="facebook" src="https://img.icons8.com/nolan/64/facebook.png" />
                    </a>
                    {/* <Link to="/newtask" className="link">
                        New Task
                    </Link> */}
                </div>
                <div>
                    <a target="_blank" href="https://icons8.com/icon/bYzsf9Bmocst/twitter">
                        <img className="twitter" src="https://img.icons8.com/nolan/64/twitter.png" />
                    </a>
                    {/* <Link to="/trophycase" className="link">
                        Trophy Case
                    </Link> */}
                </div>
                <div>
                    <a target="_blank" href="https://icons8.com/icon/43625/instagram-logo">
                        <img className="instagram" src="https://img.icons8.com/nolan/64/instagram-new.png" />
                    </a>
                    {/* <Link to="/" className="link">
                        Logout
                    </Link> */}
                </div>
                <div className="affirmly-div">
                    <a target="_blank" href="https://icons8.com/icon/Uehg4gyVyrUo/copyright">
                        <div className="copyright d-inline-flex p-1"><img src="https://img.icons8.com/nolan/18/copyright.png" className="align-self-start"/>
                        <span className="inc px-3" style={{fontSize: "38px"}}>Affirmly, Inc</span>
                        </div>
                    </a>
                </div>
            </div>

        </>


    )




}

// interface IFooter { };

export default Footer;