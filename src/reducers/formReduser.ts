import { DataInterface } from "../actions/formAction"
import {ADD_NEW_LOGIN, GET_USER_DATA, IS_AUTH, LOG_OUT, SHOW_ERROR, SAVE_TOKEN} from "../constants"

export type Actions = {
    type: typeof IS_AUTH | typeof LOG_OUT | typeof ADD_NEW_LOGIN | typeof SHOW_ERROR | typeof GET_USER_DATA | typeof SAVE_TOKEN
    payload?: DataInterface | boolean
}
export type InitialStateType = {
    isExistUser: Array<string | number>,
    isExist: boolean,
    error: boolean,
    token: string
}



const ACTION_HANDLERS = {
    [IS_AUTH]: (state: InitialStateType , action: Actions) => {
        return {
            ...state,
            isExist: action.payload,
        }
    },
    [LOG_OUT]: (state: InitialStateType) => {
        return {
            ...state,
            isExist: false,
        }
    },
    [ADD_NEW_LOGIN]: (state: InitialStateType, action: Actions) => {
        return {
            ...state,
            isExistUser: action.payload,
        }
    },
    [SHOW_ERROR]: (state: InitialStateType, action: Actions) => {
        return {
            ...state,
            error: !state.error
        }
    },
    [SAVE_TOKEN]: (state: InitialStateType, action: Actions) => {
        return {
            ...state,
            token: action.payload
        }
    }
}


const initialState: InitialStateType = {
    isExistUser: [],
    isExist: false,
    error: false,
    token: ""
}


const formReducer = (state = initialState, action: Actions)  => {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
}

export default formReducer