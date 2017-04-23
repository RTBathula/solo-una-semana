import React, { PropTypes, Component } from 'react'

//Css
import layoutStyle from 'components/layout.css'
import style from './land.css'

class App extends Component { 

  render() {
    return ( 
    	<div className={layoutStyle.screenfull+' '+style.headstrip+' horizontal-center'}>
	      <div className={layoutStyle.screen980}>	
	        <footer>	
	        	<div className={'vertical-center '} style={{"height":"50px","backgroundColor":"red"}}>
	        		<span style={{"color":"gray"}}>&copy; 2017 Solo 3 dias. All Rights Reserved</span>
	        	</div>       
	        </footer>
          </div>
	    </div>	
    	  	
    );
  }
}

export default App;
