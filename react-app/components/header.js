import React, { PropTypes, Component } from 'react'
import {Link} from 'react-router'

//Css
import layoutStyle from 'components/layout.css'
import Joinstudent from 'components/joinstudent/body'

class App extends Component { 

	constructor(props) {
	    super(props)   
	    this.state = { 	 
	    	openJoinStudentModal : false,
	    	userType             : ""        
	    }
	}	

    render() {
	    return ( 
	    	<div className={layoutStyle.screenfull}>
		      <div className={" horizontal-center"} style={{"width":"100%","height":"65px","backgroundColor":"#A70E18"}}>	
		    	<div className={layoutStyle.screen980+" vertical-center"} style={{"height":"100%"}}> 
		    		<div className={" flex-row-space-start"} style={{"width":"100%"}}>
		    			<div className={" flex-row-start-start"} style={{"height":"40px"}}>
		    				<Link href="/" style={{"height":"100%","height":"100%"}}>		    				
		    					<img src="/assets/img/logotitle.png" style={{"height":"100%"}} />
		    				</Link>
		    			</div>
		    			<div className={" vertical-center"} style={{"height":"40px"}}>
		    				<div className={" flex-row-start-start"}>
			    				<button onClick={() => this.setState({openJoinStudentModal: true,userType:"teacher"})} className={layoutStyle.headerBtn+" default-inputfield"}>
			    					Become an instructor
			    				</button>
			    				<button onClick={() => this.setState({openJoinStudentModal: true,userType:"student"})} style={{"marginLeft":"10px"}} className={layoutStyle.headerBtn+" default-inputfield"}>
			    					Become a student
			    				</button>
			    				<div style={{"marginLeft":"15px","height":"30px"}} className={" vertical-center"} >
		    						<div>
		    							<Link href="/about-us" style={{"fontSize":"12px","color":"white"}}>About us</Link>
		    						</div>
		    					</div>
		    					<div style={{"marginLeft":"15px","height":"30px"}} className={" vertical-center"} >
		    						<div>
		    							<Link href="/how-it-works" style={{"fontSize":"12px","color":"white"}}>How it works</Link>
		    						</div>
		    					</div>
		    					<div style={{"marginLeft":"15px","height":"30px"}} className={" vertical-center"} >
		    						<div>
		    							<Link href="/location" style={{"fontSize":"12px","color":"white"}}>Locations</Link>
		    						</div>
		    					</div>
		    				</div>
		    			</div>
		    		</div>
		    	</div>  
	          </div>

	      	  {/*Joinstudent*/}
	          <Joinstudent userType={this.state.userType} showModal={this.state.openJoinStudentModal} hideModal={() => this.setState({openJoinStudentModal: false})} />
		    </div>	
	    	  	
	    );
	}
}

export default App;
