import {
    ADD_NEW_LOGIN,
    GET_AUTO_DATA, IS_AUTH, LOG_OUT, ON_SUBMIT
} from '../constants'


const ACTION_HANDLERS = {
    [IS_AUTH]: (state, action) => {
        return {
            ...state,
            isExist: action.payload,
        }
    },
    [LOG_OUT]: (state) => {
        return {
            ...state,
            isExist: false,
        }
    },
    [ADD_NEW_LOGIN]: (state, action) => {
        return {
            ...state,
            isExistUser: state.isExistUser.push(action.payload),
        }
    }
}


const initialState = {
    isExistUser: [],
    isExist: false
}

const formReducer = (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
}

export default formReducer