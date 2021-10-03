import { combineReducers } from 'redux'

import questions from './question'
import users from './user'
import autherdUser from './autherUser'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  autherdUser,
  questions,
  users,
  loadingBar: loadingBarReducer,
})