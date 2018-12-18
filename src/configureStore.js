import { createStore } from 'redux'
import rootReducer from './reducers'

// the redux store uses the rootReducer to allow state to flow in, 
// calculations to be made and new state produced
export default createStore(rootReducer)