import React, { PropTypes, Component } from 'react'

//Css
import layoutStyle from 'components/layout.css'
import style from './land.css'

class App extends Component { 

  render() {
    return ( 
    	<div className={layoutStyle.screenfull}>
        <div className={style.bodystrip+' '}>        
        </div>	
        <div>  
              
        </div>      
	    </div>    	  	
    );
  }
}


export default App;
