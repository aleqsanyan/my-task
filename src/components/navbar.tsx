import React, {useState} from "react"
import {NavLink} from "react-router-dom"
import User from "./user"


const Navbar = () => {
    const [toggleState, setToggle] = useState(1)

    return (
        <nav className="nav">
            <div className="item">
                <NavLink to='/user' activeClassName="active" >User</NavLink>
            </div>
            <div className="item">
                <NavLink to='/post' activeClassName="active">Post</NavLink>
            </div>
        </nav>
    )
}

export default Navbar
