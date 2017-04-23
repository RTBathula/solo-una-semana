import React, { PropTypes, Component } from 'react'

//Css
import layoutStyle from 'components/layout.css'
import style from './land.css'

class App extends Component { 

  render() {
    return ( 
    	<div style={{"backgroundColor":"#333","border":"1px solid #1b1b1c"}} className={layoutStyle.screenfull+' '+style.headstrip+' horizontal-center'}>
	      <div className={layoutStyle.screen980}>	
	        <footer>	
	        	<div className={'vertical-center '} style={{"height":"50px"}}>
	        		<span style={{"color":"white"}}>&copy; 2017 Solo un semana. All Rights Reserved</span>
	        	</div>       
	        </footer>
          </div>
	    </div>	
    	  	
    );
  }
}

export default App;
