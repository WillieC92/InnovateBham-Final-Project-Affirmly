import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const handleAboutPopup = () => {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
};

const LogIn = () => {

    const [username, setUsername] = useState("");
    // const [password, getPassword] = useState("");
    


    return (
        <>
            {/* <Link to="/">home</Link> */}
            <div className="d-flex row m-5 flex-wrap justify-content-center text-center">
                <div className="card" style={{ width: 400}}>
                    <img src="../images/affirmlytransparentlogo.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <form>
                            <div className="row mb-3">
                                <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">
                                    <span>
                                        <img src="../images/icon.png" alt="icon" width="40" height="30" />
                                    </span>
                                </label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputName3" placeholder="Username"/>
                                </div>
                            </div>
                            <div className="row mb-2 d-flex flex-wrap">
                                <label htmlFor="inputPassword3" className="col-sm-3 col-form-label">
                                    <img src="../images/lock.png" alt="icon" width="40" height="30" />
                                </label>
                                <div className="col-sm-8">
                                    <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                                </div>
                            </div>

                            <div className="text-center d-flex flex-wrap row justify-content-center">
                                <Link to="/home">
                                    <button type="submit" className="btn login-btn mx-2 col-4">
                                        Log In
                                    </button>
                                </Link>
                            </div>
                        </form>
                        <div className=" d-flex flex-wrap row justify-content-center">
                            <Link to="/signup">
                                <button type="submit" className="btn login-btn col-4">
                                    Sign Up
                                </button>
                            </Link>
                        </div>
                        <div className="popup mt-2" onClick={handleAboutPopup}>
                            <img src="../images/question_mark.png" alt="icon" width="40" height="40" />
                            <span className="popuptext" id="myPopup">
                                Affirmly is your own to-do list that rewards your efforts with positivity and encourages forming healthy habits.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LogIn;
