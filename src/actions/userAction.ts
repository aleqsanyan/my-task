import {ADD_NEW_USER, GET_USER_DATA} from "../constants";
import axios from "axios";


export const addNewUser = (data) => ({type: ADD_NEW_USER, payload: data})

export const getUserData = () => (dispatch) => {
    axios.get('https://asdsystems.free.beeceptor.com/user')
        .then( res => {
            debugger
            dispatch({
                type: GET_USER_DATA,
                payload: typeof(res.data)

            })
        })
        .catch( err => {
            console.log("error", err)
        })
}
