import React, { PropTypes, Component } from 'react'
import Masonry from 'react-masonry-component'

//Css
import layoutStyle from 'components/layout.css'
import style from './land.css'

import TileBox from './tileBox'

class App extends Component { 

  render() {

    let brua2=[{
      width: "449px"
    },{
      width: "449px",
      height: "100px"
    },{
      width: "449px",
      height: "100px"
    }]

    var formCards = brua2.map(function(obj,index){  
      return (                  
        <TileBox key={index} style={obj} />                           
      )           
    })    

    return ( 
    	<div className={layoutStyle.screenfull}>
        <div className={style.bodystrip+' '}>        
        </div>	        
        <div className={layoutStyle.screenfull+' '+style.headstrip+' horizontal-center'}>  
          <div className={style.screen980}>             
            <Masonry
                className={style.customRow} 
                elementType={'div'}                                  
            >
              {formCards}            
            
            </Masonry>           
          </div>  
        </div>          
	    </div>    	  	
    );
  }
}


export default App;
