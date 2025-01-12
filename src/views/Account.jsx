const Account = () => {
    return (
        <div className="account-page">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <img src="images/image1.png" width="100%"/>
                    </div>
                    <div className="col-2">
                        <div className="form-container">
                            <div className="form-btn">
                                <span onClick={() => alert("Login")/*login()*/}>Login</span>
                                <span onClick={() => alert ("Register")/*register()*/}>Register</span>
                                <hr id="Indicator"/>
                            </div>
                            <form id="LoginForm">
                                <input type="text" placeholder="Username"/>
                                <input type="password" placeholder="Password"/>
                                <button type="submit" className="btn">Login</button>
                                <a href="">Forget Password</a>
                            </form>

                            <form id="RegForm">
                                <input type="text" placeholder="Username"/>
                                <input type="email" placeholder="Email"/>
                                <input type="password" placeholder="Password"/>
                                <button type="submit" className="btn">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Account
