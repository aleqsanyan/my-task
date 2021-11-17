import React, {Fragment, useEffect, useState, useRef} from "react"

import {useDispatch, useSelector} from "react-redux"
import {addNewUser} from "../actions/userAction"
/*import {getUserData} from "../actions/userAction";*/

const User = () => {
    const [check, setCheck] = useState(false)
    const user = useSelector((state => state.user.users))
    const textName = useRef("")
    const textAt = useRef("")
    const textImg = useRef("")
    let dispatch = useDispatch()

    /*  useEffect(() => {
          dispatch(getUserData())
      }, [])*/

    let getValue = () => {
        const requestDate = {
            id: Math.floor(Math.random() * 10 * user.length),
            name: textName.current.value,
            registeredAt: textAt.current.value,
            img: textImg.current.value,
            isBanned: check
        }

        dispatch(addNewUser(requestDate))
        console.log(requestDate, 'requestDate')
    }

    /* const remove = (registeredAt) => {
         dispatch(deleteValue(registeredAt))
     }
 */
    let checked = (e) => {

    }

    return (
        <Fragment>
            <div>
                <div>Banned:<input type="checkbox"  onChange={(e) => setCheck(e.target.checked)} defaultChecked/></div>
                <div><label htmlFor="new-task">name</label><input id="new-task" type="text" ref={textName}/></div>
                <div><label htmlFor="new-task">RegisteredAt</label><input id="new-task" type="text" ref={textAt}/></div>
                <div><label htmlFor="new-task">Img</label><input id="new-task" type="text" ref={textImg}/></div>
            </div>
            <button onClick={getValue}>Add</button>

            <ul id="incomplete-tasks">
                <h3>Users</h3>
                {user && user.map((elem, index) => {
                    return (
                        <li key={index}>
                            <div className="user">
                                <div><input type="checkbox" checked={elem.isBanned}/></div>
                                <div>ID: {elem.id}</div>
                                <div>Name: {elem.name}</div>
                                <div>RegisteredAt: {elem.registeredAt}</div>
                                <div>IMG: {elem.image}</div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </Fragment>
    )
}

export default User