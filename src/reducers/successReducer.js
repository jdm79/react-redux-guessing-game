import { actionTypes } from '../actions'
// state is false by default
export default (state=false, action) => {
  switch(action.type) {
    case (actionTypes.CORRECT_GUESS):
      return true
    default:
      return state
  }
}