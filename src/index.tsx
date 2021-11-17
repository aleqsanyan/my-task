import React from 'react'
import './css-modules/index.scss'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import reducers from './reducers/index.js'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {BrowserRouter} from "react-router-dom"

const store = createStore(combineReducers(reducers), composeWithDevTools(applyMiddleware(thunk)))
export default store

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)

