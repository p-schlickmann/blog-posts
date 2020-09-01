import { combineReducers } from 'redux'

import postsReducer from './postsReducer.js'
import userReducer from './userReducer.js'


export default combineReducers({
    posts: postsReducer,
    users: userReducer
})