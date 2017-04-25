import React, { PropTypes, Component } from 'react'
import {Link} from 'react-router'

//Css
import layoutStyle from 'components/layout.css'


class App extends Component { 

  render() {
    return ( 
    	<div style={{"backgroundColor":"black","border":"1px solid #1b1b1c"}} className={layoutStyle.screenfull+' horizontal-center'}>
	      <div className={layoutStyle.screen980}>	
	        <footer>
	        	<div className={'flex-row-start-start '} style={{"height":"auto"}}>
	        		<div className={'vertical-center '} style={{"height":"50px"}}>
		        		<span style={{"fontSize":"12px","color":"white"}}>&copy; 2017 Solo una semana. All Rights Reserved</span>
		        	</div>
		        	<div className={'vertical-center '} style={{"height":"50px","marginLeft":"32px"}}>
		        		<span>
		        			<Link href="/about-us" style={{"fontSize":"12px","color":"white"}}>About us</Link>
		        		</span>
		        	</div>
		        	<div className={'vertical-center '} style={{"height":"50px","marginLeft":"32px"}}>
		        		<span>
		        			<Link href="/how-it-works" style={{"fontSize":"12px","color":"white"}}>
		        			How it works
		        			</Link>
		        		</span>
		        	</div>
	        	</div>	
	        	       
	        </footer>
          </div>
	    </div>	
    	  	
    );
  }
}

export default App;
