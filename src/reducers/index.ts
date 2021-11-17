import postReducers from "./postReducers"
import userReducers from "./userReducers"
import formReducer from "./formReducers"


let reducers = {
    form: formReducer,
    user: userReducers,
    post: postReducers
}


export default reducers