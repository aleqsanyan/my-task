import {EDIT_NAME, GET_POST_DATA, UPDATE_NAME, DELETE_POST} from '../constants';


const ACTION_HANDLERS = {
    [GET_POST_DATA]: (state, action) => {
        return {
            ...state,
            posts: action.payload,
        }
    },
    [UPDATE_NAME]: (state, action) => {
        return {
            ...state,
            posts: state.posts.map(elem => {
                if(elem.id === action.payload.id) {
                    elem.title = action.payload.title
                    return elem
                }
                return elem
            })
        }
    },
    [EDIT_NAME]: (state, action) => {
        return {
            ...state,
            posts: state.posts.map(elem => {
                if (elem.id === action.payload.id) {
                    elem.isHidden = action.payload.isHidden
                    return elem
                }
                return elem
            })
        }
    },
    [DELETE_POST]: (state, action) => {
        return {
            ...state,
            posts: state.posts.filter(elem => elem.id !== action.payload),
        }
    },
}

const initialState = {
    posts: [
        {
            "id": 44,
            "title": "Lorem Ipsum",
            "content": "Praesent varius sapien id eros ultrices, scelerisque rhoncus odio viverra. Nulla sit amet turpis eu turpis commodo placerat. Donec cursus lacinia ultrices. Duis vulputate ipsum non lectus accumsan, non pulvinar erat ullamcorper. Ut faucibus leo est, vitae euismod mauris efficitur a. Suspendisse varius ligula id nunc condimentum placerat. Praesent id suscipit sem. Aliquam porta arcu ut tellus tristique pretium. Morbi facilisis pharetra suscipit. Cras in est eget purus convallis pellentesque. Integer sed risus quis sem finibus porta vel lobortis risus. Aenean venenatis odio eu quam feugiat, eget dignissim orci malesuada.",
            "isHidden": true,
            "createdAt": 1605990814
        },
        {
            "id": 33,
            "title": "scelerisque rhoncus",
            "content": "Nulla sit amet turpis eu turpis commodo placerat. Donec cursus lacinia ultrices. Duis vulputate ipsum non lectus accumsan, non pulvinar erat ullamcorper. Ut faucibus leo est, vitae euismod mauris efficitur a. Suspendisse varius ligula id nunc condimentum placerat. Praesent id suscipit sem. Aliquam porta arcu ut tellus tristique pretium. Morbi facilisis pharetra suscipit. Cras in est eget purus convallis pellentesque. Integer sed risus quis sem finibus porta vel lobortis risus. Aenean venenatis odio eu quam feugiat, eget dignissim orci malesuada.",
            "isHidden": false,
            "createdAt": 1607785402
        },
        {
            "id": 22,
            "title": "Donec cursu",
            "content": "Integer sed risus quis sem finibus porta vel lobortis risus. Aenean venenatis odio eu quam feugiat, eget dignissim orci malesuada. Praesent varius sapien id eros ultrices, scelerisque rhoncus odio viverra. Nulla sit amet turpis eu turpis commodo placerat. Donec cursus lacinia ultrices. Duis vulputate ipsum non lectus accumsan, non pulvinar erat ullamcorper. Ut faucibus leo est, vitae euismod mauris efficitur a. Suspendisse varius ligula id nunc condimentum placerat. Praesent id suscipit sem. Aliquam porta arcu ut tellus tristique pretium. Morbi facilisis pharetra suscipit. Cras in est eget purus convallis pellentesque. ",
            "isHidden": false,
            "createdAt": 1609529461
        },
        {
            "id": 44,
            "title": "Nulla sit",
            "content": "Praesent id suscipit sem. Aliquam porta arcu ut tellus tristique pretium. Morbi facilisis pharetra suscipit. Cras in est eget purus convallis pellentesque. Integer sed risus quis sem finibus porta vel lobortis risus. Praesent varius sapien id eros ultrices, scelerisque rhoncus odio viverra. Aenean venenatis odio eu quam feugiat, eget dignissim orci malesuada. Nulla sit amet turpis eu turpis commodo placerat. Donec cursus lacinia ultrices. Duis vulputate ipsum non lectus accumsan, non pulvinar erat ullamcorper. Ut faucibus leo est, vitae euismod mauris efficitur a. Suspendisse varius ligula id nunc condimentum placerat.",
            "isHidden": true,
            "createdAt": 1610745743
        }
    ],

}

const postReducers = (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}

export default postReducers;