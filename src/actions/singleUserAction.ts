import axios from "axios"
import {GET_SINGLE_USER} from "../constants"

import {Dispatch} from "react"


export type  GetPostDataType = {
    type: typeof GET_SINGLE_USER
    payload: any
}

/*export interface ObjectType {
    id: number
    title?: string | boolean | number
    isHidden?: boolean
}*/

/*
export type UpdateNameType = {
    type: typeof UPDATE_NAME
    payload: ObjectType
}

export type EditNameType = {
    type: typeof EDIT_NAME
    payload: ObjectType
}

export type DeletePostType = {
    type: typeof DELETE_POST
    payload: number
}
*/


export const getSinglelUser = (id: number) => (dispatch: Dispatch<GetPostDataType>) => {
    axios.get('https://reqres.in/api/users/' + id)
        .then(res => {
            dispatch({
                type: GET_SINGLE_USER,
                payload: res
            })
        })
}


/*
export const updateName = (data: ObjectType):UpdateNameType => ({type: UPDATE_NAME, payload: data})
export const editName = (data: ObjectType): EditNameType => ({type: EDIT_NAME, payload: data})
export const deletePost = (id: number): DeletePostType => ({type: DELETE_POST, payload: id})*/
