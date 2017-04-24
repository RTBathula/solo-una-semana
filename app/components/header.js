import React, { PropTypes, Component } from 'react'

//Css
import layoutStyle from 'components/layout.css'

class App extends Component { 

	constructor(props) {
	    super(props)   
	    this.state = { 	       
	    }
	}	

    render() {
	    return ( 
	    	<div className={layoutStyle.screenfull}>
		      <div className={" horizontal-center"} style={{"width":"100%","height":"65px","backgroundColor":"#A70E18"}}>	
		    	<div className={layoutStyle.screen980+" vertical-center"} style={{"height":"100%"}}> 
		    		<div className={" flex-row-space-start"}>
		    			<div className={" flex-row-start-start"} style={{"height":"40px"}}>
		    				<img src="assets/img/logotitle.png" style={{"height":"100%"}} />
		    			</div>
		    			<div className={" flex-row-start-start"}>
		    			</div>
		    		</div>
		    	</div>  
	          </div>
		    </div>	
	    	  	
	    );
	}
}

export default App;
