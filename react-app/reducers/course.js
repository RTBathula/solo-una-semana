import * as types from 'constants/subscribe'

const initialState = {
  list    : [{
    logoUrl           : "assets/img/nodejs.png",
    contentUrl        : "assets/img/nd.png",
    title             : "Nodejs",
    subTitle          : "A Revolutionary langauge",
    description       : "",
    teacherName       : "RT Bathula",
    teacherProfession : "Full Stack Developer",
    teacherDescription: "",
    cost              : "$100,000",
    courseIndex       : [{
      title    : "",
      subIndex : [{
        title : ""
      }]
    }]
  }],
  details : null 
}

export default function course(state = initialState, action) {
  switch (action.type) {

    case types.SUBSCRIBE_ISSUBSCRIBING:      
      return {       
      	...state,
        isSubscribing : action.isSubscribing,
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