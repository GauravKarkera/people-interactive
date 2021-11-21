import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { ILoginProps } from "../../types/Login"
import "./Login.css"
import { USER_NAME, PASSWORD } from "../../constants/constants"
export default function Login(props: ILoginProps) {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [isError, setError] = useState(false)
    const navigate = useNavigate();

    function handleLogin(e: any) {
        e.preventDefault()
        if (userName === USER_NAME && password === PASSWORD) {
            props.setAuthorization(true)
            setError(false)
            props.setCurrentUser(userName)
            navigate("/home")
        } else {
            setError(true)
        }
    }


    return (
        <div className="login-page contaner">
            <div className="row">
                <div className="col-sm-offset-4 col-xs-offset-1 col-sm-4 col-xs-10  login-form">
                    <form data-testid="form">
                        <h3>Sign In</h3>

                        <div className="form-group">
                            <label htmlFor="userName" >User Name</label>
                            <input name="userName" id="userName" type="text" className="form-control" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter user name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input name="password" id="password" type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
                        </div>

                        <button id="submitButton" onClick={handleLogin} data-testid="submit-button" className="btn btn-primary btn-block">Submit</button>

                        {isError && <div className="text-danger">Incorrect User Name and Password Combination</div>}

                    </form>
                </div>
            </div>
        </div>


    )
}
