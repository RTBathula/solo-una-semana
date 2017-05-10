import { browserHistory } from 'react-router'
import * as types from 'constants/subscribe'
import * as subscribeApi from 'api/subscribe'

export const toggleIsSubscribing = (isSubscribing) => (dispatch, getState) => {
  dispatch({
    type          : types.SUBSCRIBE_ISSUBSCRIBING,
    isSubscribing : isSubscribing
  })
}

export const subscribeAsync = (obj) => (dispatch, getState) => {   
	subscribeApi.subscribeUser(obj,resp =>{
	  	dispatch({ 
			type    : types.SUBSCRIBE_SUCESS,
			success : resp
		})
	},error =>{
	  	dispatch({ 
			type  : types.SUBSCRIBE_FAIL,
			error : error
		})
	}) 
}
