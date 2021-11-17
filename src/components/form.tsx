import React, {useEffect, useRef, useState} from "react"
import Field from "./field"
import {useDispatch} from "react-redux"
import {isAutoDate} from "../actions/formAction"

const  Form = () => {
    const usernameRef =  useRef(null);
    const passwordRef = useRef(null);
    const dispatch = useDispatch()


    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        };
        dispatch(isAutoDate(data));
    };
    return (
        <form className="form" onSubmit={handleSubmit} >
            <Field ref={usernameRef} label="Username:" type="text" />
            <Field ref={passwordRef} label="Password:" type="password" />
            <div>
                <button className="button" type="submit">Submit</button>
            </div>
        </form>
    )
}
export default Form