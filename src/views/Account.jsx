import React, { useState } from "react";

const Account = () => {
    const [isLoginForm, setIsLoginForm] = useState(false); // State to toggle between forms

    const showLoginForm = () => {
        setIsLoginForm(true);
        moveIndicator("Login"); // Move the indicator to the login position
    };

    const showRegisterForm = () => {
        setIsLoginForm(false);
        moveIndicator("Register"); // Move the indicator to the register position
    };

    const moveIndicator = (type) => {
        const indicator = document.getElementById("Indicator");
        if (type === "Login") {
            indicator.style.transform = "translateX(0)";
        } else if (type === "Register") {
            indicator.style.transform = "translateX(100px)"; // Adjust based on button spacing
        }
    };

    return (
        <div className="account-page">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <img src="images/image1.png" width="100%" alt="Account Page" />
                    </div>
                    <div className="col-2">
                        <div className="form-container">
                            <div className="form-btn">
                                <span onClick={showLoginForm}>Login</span>
                                <span onClick={showRegisterForm}>Register</span>
                                <hr id="Indicator" />
                            </div>
                            {isLoginForm ? (
                                <form >
                                    <input type="text" placeholder="Username" />
                                    <input type="password" placeholder="Password" />
                                    <button type="submit" className="btn">Login</button>
                                    <a href="#">Forget Password</a>
                                </form>
                            ) : (
                                <form>
                                    <input type="text" placeholder="Username" />
                                    <input type="email" placeholder="Email" />
                                    <input type="password" placeholder="Password" />
                                    <button type="submit" className="btn">Register</button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
