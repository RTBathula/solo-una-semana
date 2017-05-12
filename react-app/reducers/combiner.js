import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import subscribe from './subscribe'
import course from './course'

const rootReducer = combineReducers({
   course,		
   subscribe,
   routing: routerReducer
})

export default rootReducer
