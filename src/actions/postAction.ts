import axios from "axios";


import {GET_POST_DATA, UPDATE_NAME, EDIT_NAME, DELETE_POST} from "../constants";

export const getPostData = () => (dispatch) => {
    axios.get('https://asdsystems.free.beeceptor.com/post')
        .then(res => {
            dispatch({
                type: GET_POST_DATA,
                payload: res
            })
        })
}

export const updateName = (data) => ({type: UPDATE_NAME, payload: data})
export const editName = (data) => ({type: EDIT_NAME, payload: data})
export const deletePost = (id) => ({type: DELETE_POST, payload: id})