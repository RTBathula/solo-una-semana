import React, { PropTypes, Component } from 'react'

//Css
import layoutStyle from 'components/layout.css'
import style from './topicDetails.css'


class App extends Component { 

  render() {    


    return ( 
    	<div className={layoutStyle.screenfull} style={{"backgroundColor":"#e9ebee"}}>
        <div className={style.bodystrip+' '}>        
        </div>	        
        <div className={layoutStyle.screenfull+' horizontal-center'}>  
          <div className={layoutStyle.screen980} style={{"marginBottom":"35px"}}>                    

          </div>          
        </div>          
	    </div>    	  	
    );
  }
}


export default App;
