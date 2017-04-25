import React, { PropTypes, Component } from 'react'

//Css
import layoutStyle from 'components/layout.css'
import style from './topicDetails.css'


class App extends Component { 

  render() {    

    return ( 
      <div className={style.courseTemplate}  style={{"width":"100%"}}>
        <div style={{"width":"100%"}}>
          <div style={{"width":"100%"}}>
            <span style={{"fontSize": "18px","color":"rgba(0, 0, 0, 0.84)","fontWeight": "500"}} >
              Introduction to mS EXCEL
            </span> 
          </div>
          <div style={{"width":"100%","height":"1px","margin":"5px 0px 5px 0px","borderTop":"1px solid gray"}}>                  
          </div>
          <div style={{"width":"100%","padding":"6px 14px 0px 14px"}}>
            <div className={style.bulletPoints}>              
              <span style={{"fontSize": "8px","color":"black"}} >
                <i className="icon ion-record" style={{"color":"rgba(8, 8, 8, 0.91)"}}></i>&nbsp;&nbsp;
              </span>
              <span style={{"fontSize": "14px","color":"black"}} >
                Igdfgdfgfd dfgf dfbfgb cfgfgb
              </span> 
            </div>
            <div className={style.bulletPoints}>              
              <span style={{"fontSize": "8px","color":"black"}} >
                <i className="icon ion-record" style={{"color":"rgba(8, 8, 8, 0.91)"}}></i>&nbsp;&nbsp;
              </span>
              <span style={{"fontSize": "14px","color":"black"}} >
                Igdfgdfgfd dfgf dfbfgb cfgfgb
              </span> 
            </div>
            <div className={style.bulletPoints}>              
              <span style={{"fontSize": "8px","color":"black"}} >
                <i className="icon ion-record" style={{"color":"rgba(8, 8, 8, 0.91)"}}></i>&nbsp;&nbsp;
              </span>
              <span style={{"fontSize": "14px","color":"black"}} >
                Igdfgdfgfd dfgf dfbfgb cfgfgb
              </span> 
            </div>                      
          </div>
        </div>   
      </div>           	  	
    );
  }
}


export default App;
