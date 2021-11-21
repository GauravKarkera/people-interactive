import React from 'react'
import {INavBarProps} from "../../types/NavBar"
import "./NavBar.css"
export default function NavBar(props: INavBarProps) {

    function handleLogout(){
        props.setAuthorization(false)
    }
    return (
        <div className="navbar">
            <div className="navItem">
                {`Welcome ${props.currentUser}`}
            </div>
            <div className="navItem">
                <button onClick={handleLogout} className="">Logout</button>
            </div>
        </div>
    )
}
