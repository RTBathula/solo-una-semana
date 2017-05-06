import React, { PropTypes, Component } from 'react'

//Css
import style from './errorHeader.css'

class App extends Component { 
    
    render() {
        return ( 		
        <div className={"flex-column-center "+style.container}>         
            <div className={"flex-row-start-start"}>
            	<div className={style.closeTool}> 
            		<i className="icon ion-close"></i>            
        		</div>
        		<div style={{"marginLeft":"7px"}} className={style.message}>   
        			<span>{this.props.message}</span>        
        		</div>             
        	</div> 
        </div>    	  	
    );
  }
}

export default App
