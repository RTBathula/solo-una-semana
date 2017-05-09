import * as types from 'constants/subscribe'

const initialState = {
  isSubscribing : false,
  error         : null,
  success       : null  
}

export default function user(state = initialState, action) {
  switch (action.type) {

    case types.SUBSCRIBE_ISSUBSCRIBING:      
      return {       
      	...state,
        isSubscribing : false,
        error         : null
      }

    case types.SUBSCRIBE_SUCESS:
      return {       
        ...state,
        isSubscribing : false,
        success       : action.success
      } 

    case types.SUBSCRIBE_FAIL:
      return {       
        ...state,
        isSubscribing : false,
        error         : action.error
      }   
 
    default:
      return state
  }
}