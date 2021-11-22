import {ADD_NEW_USER, GET_USER_DATA, UPDATE_USER_DATA} from "../constants";

export type UsersType = {
    job: string
    name: string
}

export type  InitialStateUserType = typeof initialState

export type Actions = {
    type: typeof GET_USER_DATA | typeof ADD_NEW_USER |typeof GET_USER_DATA | typeof UPDATE_USER_DATA
    payload?: any
}

const ACTION_HANDLERS = {
    [GET_USER_DATA]: (state: InitialStateUserType, action: Actions) => {
        return {
            ...state,
            users: action.payload.data,
            total_pages: action.payload.total_pages,
        }
    },
    [ADD_NEW_USER]: (state: InitialStateUserType, action: Actions) => {
        return {
            ...state,
            users: [...state.users, action.payload]
        }
    },
    [UPDATE_USER_DATA]: (state: InitialStateUserType, action: Actions) => {
        return {
            ...state,
            jobAndName: action.payload
        }
    }
}


const initialState = {
    users:  [] as Array<UsersType>,
    jobAndName: [],
    total_pages: null
}



const userReducer = (state = initialState, action: Actions): InitialStateUserType  => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}

export default userReducer