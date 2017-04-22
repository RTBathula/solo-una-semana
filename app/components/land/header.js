import React, { PropTypes, Component } from 'react'

//Css
import layoutStyle from 'components/layout.css'
import style from './land.css'

class App extends Component { 

	constructor(props) {
	    super(props)   
	    this.state = { 	       
	    }
	}	

    render() {
	    return ( 
	    	<div className={layoutStyle.screenfull}>
		      <div style={{"width":"100%","height":"60px","backgroundColor":"black"}}>	
		      		       
	          </div>
		    </div>	
	    	  	
	    );
	}
}

export default App;
