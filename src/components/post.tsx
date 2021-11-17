import React, {Fragment, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"

/*import {getPostData} from "../actions/postAction";*/
import {updateName, editName, deletePost} from "../actions/postAction"

const Post = () => {
    const dispatch = useDispatch()
    const post = useSelector(state => state.post.posts)

    /*  useEffect(() => {
          dispatch(getPostData())
      }, [])
  */
    let getValue = (id, e) => {
        let title = e.target.value
        dispatch(updateName({id, title}))
    }

    let edit = (id, hidden) => {
        let isHidden = !hidden
        dispatch(editName({id, isHidden}))
    }

    let remove = (id) => {
        dispatch(deletePost(id))
    }


    return (
        <Fragment>
            <h3>Post</h3>
            <ul id="incomplete-tasks">
                {post && post.map((elem, index) => {
                    return (
                        <li key={index}>
                            {!elem.isHidden && <label>{elem.title}</label>}
                            {elem.isHidden &&
                            <input type="text" value={elem.title} onChange={(e) => getValue(elem.id, e)} defaultChecked/>}
                            <button className="edit" onClick={() => edit(elem.id, elem.isHidden)}>Edit</button>
                            <button className="delete" onClick={() => remove(elem.id)}>Delete</button>
                            <div>Content: {elem.content} </div>
                            <div>CreatedAt: {elem.createdAt} </div>
                        </li>
                    )
                })}
            </ul>

        </Fragment>
    )
}

export default Post