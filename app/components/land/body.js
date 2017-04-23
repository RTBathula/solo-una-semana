import React, { PropTypes, Component } from 'react'

//Css
import layoutStyle from 'components/layout.css'
import style from './land.css'

import TileBox from './tileBox'

class App extends Component { 

  render() {

    let brua2=[{
      width: "100%",
      height: "230px",
      fontSize : "20px"
    },{
      width: "449px",
      height: "100px",
      fontSize : "18px"
    },{
      width: "200px",
      height: "100px",
      fontSize : "18px"
    },{
      width: "200px",
      height: "100px",
      fontSize : "18px"
    }]        

    return ( 
    	<div className={layoutStyle.screenfull}>
        <div className={style.bodystrip+' '}>        
        </div>	        
        <div className={layoutStyle.screenfull+' '+style.headstrip+' horizontal-center'}>  
          <div className={layoutStyle.screen980}>           
                                  
          </div> 

          <div className={layoutStyle.screen980}>           
            <TileBox style={brua2[0]} />                      
          </div> 
        </div>          
	    </div>    	  	
    );
  }
}


export default App;
