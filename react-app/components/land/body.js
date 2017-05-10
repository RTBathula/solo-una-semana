import React, { PropTypes, Component } from 'react'

//Css
import layoutStyle from 'components/layout.css'
import style from './land.css'

import TileBox from './tileBox'
import FilePreviewByType from 'components/helpers/filePreviewByType/filePreviewByType'

class App extends Component { 

  render() {    
    let bigTileStyle={
      "titleHeight"       : "40px",
      "titlePadding"      : "7px",
      "titleIconWidth"    : "30px",
      "titleFontSize"     : "20px",
      "imgHeight"         : "258px",
      "subTitleFontSize"  : "20px"
    }

    let smallTileStyle={
      "titleHeight"       : "35px",
      "titlePadding"      : "6px",
      "titleIconWidth"    : "25px",
      "titleFontSize"     : "18px",
      "imgHeight"         : "200px",
      "subTitleFontSize"  : "18px"
    }

    let normalTileStyle={
      "titleHeight"       : "30px",
      "titlePadding"      : "5px",
      "titleIconWidth"    : "22px",
      "titleFontSize"     : "16px",
      "imgHeight"         : "140px",
      "subTitleFontSize"  : "16px"
    }

    return ( 
    	<div className={layoutStyle.screenfull} style={{"backgroundColor":"#e9ebee"}}>
        <div className={style.bodystrip+' '}>        
        </div>	        
        <div className={layoutStyle.screenfull+' '+style.headstrip+' horizontal-center'}>  
          <div className={layoutStyle.screen980} style={{"marginBottom":"35px"}}> 

            {/*Intro tiles*/}         
            <div style={{"width":"100%","marginTop":"3.5%",}} className={"flex-row-start-start"}>           
              <div style={{"width":"49%"}}>  
                <TileBox tileStyle={bigTileStyle} /> 
              </div>
              <div className={"flex-row-start-start"} style={{"width":"49%","marginLeft":"2%"}}>  
                <div style={{"width":"49%"}}>
                  <TileBox tileStyle={smallTileStyle} />                                       
                </div> 
                <div style={{"width":"49%","marginLeft":"2%"}}>
                  <TileBox tileStyle={smallTileStyle} />                                       
                </div>                                    
              </div>                    
            </div> 

            {/*All tiles*/} 
            <div style={{"width":"100%","marginTop":"4.5%",}} className={"flex-row-start-start"}>              
             
              <div className={style.allTopics}>
                <TileBox tileStyle={normalTileStyle} />                                       
              </div> 
              <div className={style.allTopics}>
                <TileBox tileStyle={normalTileStyle} />                                       
              </div> 
              <div className={style.allTopics}>
                <TileBox tileStyle={normalTileStyle} />                                       
              </div> 
              <div className={style.allTopics}>
                <TileBox tileStyle={normalTileStyle} />                                       
              </div>                                               
                                
            </div>    
          </div>          
        </div>        
	    </div>    	  	
    );
  }
}


export default App;
