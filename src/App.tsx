import React, {useEffect} from "react"
import {Redirect, Route} from "react-router-dom"
import {useSelector} from "react-redux"

import Form from "./components/form"
import User from "./components/user"
import Post from "./components/post"
import Navbar from "./components/navbar"
import Header from "./components/header"

const App = () => {

    const existUser = useSelector((state) => state.form.isExist)
    return (
        <div className="App">
            {!existUser && <Route path="/" component={() => <Form />}/>}
            {existUser && <Header/>}
            {existUser && <Navbar/>}
            {existUser && <Route path="/user" component={() => <User />}/>}
            {existUser && <Route path="/post" component={() => <Post />}/>}
            {existUser && <Route exact path=""><Redirect to="/user" /></Route>}
        </div>
    );
}

export default App
