import {GET_SINGLE_USER} from "../constants"


type Actions = {
    type: typeof GET_SINGLE_USER
    payload: any
}

export type  InitialStatePostType = typeof initialState

const ACTION_HANDLERS = {
    [GET_SINGLE_USER]: (state: InitialStatePostType, action: Actions ) => {
        return {
            ...state,
            posts: action.payload,
        }
    },
}


const initialState  = {
    user: [] as Array<any>,
}


const singleUser = (state = initialState, action: Actions): InitialStatePostType => {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
}

export default singleUser