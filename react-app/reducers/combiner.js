import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import subscribe from './subscribe'

const rootReducer = combineReducers({
   subscribe,
   routing: routerReducer
})

export default rootReducer
