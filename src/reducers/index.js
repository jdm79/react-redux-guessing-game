// this is the root reducer
import { combineReducers} from 'redux'
import success from './successReducer'
// use ES6 as key/value are the same
// success reducer to be used with success state
export default combineReducers({
  success,
})
