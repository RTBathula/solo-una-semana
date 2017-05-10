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
		        	<div className={'vertical-center '} style={{"height":"50px","marginLeft":"32px"}}>
		        		<span>
		        			<Link href="/location" style={{"fontSize":"12px","color":"white"}}>
		        			Locations
		        			</Link>
		        		</span>
		        	</div>
	        	</div>
	        	<div className={'flex-row-start-start '} style={{"height":"auto"}}>	        		
		        	<div className={'vertical-center '} style={{"height":"30px"}}>
		        		<span style={{"fontSize":"12px","color":"#9d9d9d"}}>&copy; 2017 Solo una semana. All Rights Reserved</span>
		        	</div>
		        	<div className={'vertical-center '} style={{"height":"30px","marginLeft":"32px","marginTop":"2px"}}>
		        		<a style={{"color":"#9d9d9d"}}>
			        		<div className={'flex-row-start-start'}>
			        			<div style={{"marginTop":"-3px"}}>
					        		<span style={{"fontSize":"16px"}}>	
					        			<i className="icon ion-social-whatsapp-outline"></i>			        			
					        		</span>
				        		</div>
				        		<div style={{"marginLeft":"5px"}}>
					        		<span style={{"fontSize":"12px"}}>
					        		+56988882471
					        		</span>
				        		</div>
			        		</div>
		        		</a>
		        	</div>

		        	<div className={'vertical-center '} style={{"height":"30px","marginLeft":"32px","marginTop":"2px"}}>
		        		<a style={{"color":"#9d9d9d"}}>
			        		<div className={'flex-row-start-start'}>
			        			<div style={{"marginTop":"-3px"}}>
					        		<span style={{"fontSize":"22px"}}>	
					        			<i className="icon ion-ios-email-outline"></i>			        			
					        		</span>
				        		</div>
				        		<div style={{"marginTop":"3px","marginLeft":"5px"}}>
					        		<span style={{"fontSize":"12px"}}>
					        		contaco@sus.com
					        		</span>
				        		</div>
			        		</div>
		        		</a>
		        	</div>

		        	<div className={'vertical-center '} style={{"height":"30px","marginLeft":"32px"}}>
		        		<a style={{"color":"#9d9d9d"}}>
			        		<div className={'flex-row-start-start'}>
			        			<div style={{"marginTop":"-3px"}}>
					        		<span style={{"fontSize":"20px"}}>	
					        			<i className="icon ion-social-facebook"></i>			        			
					        		</span>
				        		</div>				        		
			        		</div>
		        		</a>
		        	</div>

		        	<div className={'vertical-center '} style={{"height":"30px","marginLeft":"10px"}}>
		        		<a style={{"color":"#9d9d9d"}}>
			        		<div className={'flex-row-start-start'}>
			        			<div style={{"marginTop":"-3px"}}>
					        		<span style={{"fontSize":"20px"}}>	
					        			<i className="icon ion-social-twitter"></i>			        			
					        		</span>
				        		</div>				        	
			        		</div>
		        		</a>
		        	</div>
		        		        
	        	</div>	
	        	       
	        </footer>
          </div>
	    </div>	
    	  	
    );
  }
}

export default App;
