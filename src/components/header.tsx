import React from "react"
import {useDispatch, useSelector} from "react-redux"

import {logOut} from "../actions/formAction"

const Header = () => {
    const dispatch = useDispatch()

    let  handelClick = () => {
        dispatch(logOut())
    }
    return (
        <div className="header" onClick={handelClick}>
           Log Out
        </div>
    )
}

export default Header