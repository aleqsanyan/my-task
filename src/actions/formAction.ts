import {ADD_NEW_LOGIN, IS_AUTH, LOG_OUT} from "../constants";
import axios from "axios";


export const logOut = () => ({type: LOG_OUT})

export const isAutoDate = (data) => (dispatch) => {
    axios.get('https://asdsystems.free.beeceptor.com/auth' + data)
        .then( res => {
             if(res.status === 200) {
                 dispatch({
                     type: IS_AUTH,
                     payload: true
                 })
                 dispatch({
                     type: ADD_NEW_LOGIN,
                     payload: data
                 })
             }
        })
        .catch( err => {
            console.log("error", err)
        })
}



