import React, {Fragment, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"

import {updateName, editName, deletePost} from "../actions/postAction"
import { RootState } from "../reducers"

const User = () => {
    const dispatch = useDispatch()
    const post = useSelector((state: RootState)  => state.post.posts)
   // console.log(post,'posts')

      useEffect(() => {
          dispatch(getSinglelUser(1))
      }, [])

    let getValue = (id: number, e: any): void => {
        let title: string = e.target.value
        dispatch(updateName({id, title}))
    }

    let edit = (id: number, hidden: boolean) => {
        let isHidden: boolean = !hidden
        dispatch(editName({id, isHidden}))
    }

    let remove = (id: number): void => {
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

export default User