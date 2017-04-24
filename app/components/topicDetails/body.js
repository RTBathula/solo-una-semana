import React, { PropTypes, Component } from 'react'

//Css
import layoutStyle from 'components/layout.css'
import style from './topicDetails.css'

//Custom components
import FilePreviewByType from 'components/helpers/filePreviewByType/filePreviewByType'

class App extends Component { 

  render() {    

    return ( 
    	<div className={layoutStyle.screenfull} style={{"backgroundColor":"#e9ebee"}}>
        <div className={style.presentbxContainer+' horizontal-center'}>  
          <div className={layoutStyle.screen980+" "+style.presentbxWrap} > 

            <div className={"flex-row-start-start"} style={{"width":"100%","height":"100%"}}>
              {/*Left box*/}
              <div className={"vertical-center"} style={{"width":"44%","height":"100%","padding":"25px 0px 25px 0px"}}>
                <div>
                  {/*Main Title*/}
                  <div style={{"width":"100%"}} className={' flex-row-start-start'}> 
                    <div style={{"width":"50px","height":"46px"}} className={" vertical-center"}>   
                      <img src="assets/img/msexcel.png" style={{"width":"100%"}} />          
                    </div>
                     <div style={{"height":"46px","marginLeft":"5px"}}  className={" vertical-center"}>
                      <span style={{"fontSize": "22px","fontWeight": "bold","color":"white"}} >MS EXCEL</span>              
                    </div>            
                  </div>

                  {/*Sub Title*/}
                  <div style={{"width":"100%","marginTop":"20px"}} className={' flex-row-start-start'}>              
                     <div style={{"height":"auto"}} >
                      <span style={{"fontSize": "30px","fontWeight": "500","color":"white"}} >
                        How I learned to read and trade stocks in prison
                      </span>
                      <span style={{"fontSize": "16px","fontWeight": "100","color":"white"}} >
                        &nbsp;- RT Bathula
                      </span> 
                    </div>            
                  </div>

                  {/*Cost*/}
                  <div style={{"width":"100%","marginTop":"20px"}} className={' flex-row-start-start'}>              
                     <div style={{"height":"auto"}} >
                      <span style={{"fontSize": "16px","color":"green","fontWeight":"600"}} >
                        $50,000 CLP
                      </span>                       
                    </div>            
                  </div>
                </div>

              </div>

              {/*Right box*/}
              <div style={{"width":"56%","height":"100%"}} >
                <div style={{"width":"100%","height":"100%"}}>
                  <FilePreviewByType fallback={"/assets/img/defaultImg.jpg"} file={"assets/img/prof.png"}/>                       
                </div>
              </div> 
            </div>             

          </div>    
        </div>	

        <div className={' horizontal-center'} style={{"width":"100%","padding":"30px 30px 30px 30px"}}>  
          <div className={layoutStyle.screen980} >
            <div>
              <span style={{"fontSize": "22px","fontWeight": "bold","color":"black"}} >
                Description
              </span> 
            </div>
            <div style={{"width":"100%"}}>
              <span style={{"fontSize": "14px","color":"black"}} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
            </div>

            <div style={{"width":"100%","marginTop":"30px"}}>
              <span style={{"fontSize": "22px","fontWeight": "bold","color":"black"}} >
                What I teach you?
              </span> 
            </div>

            <div style={{"width":"100%","marginTop":"10px"}}>
              <div style={{"width":"100%"}}>
                <div style={{"width":"100%"}}>
                  <span style={{"fontSize": "16px","color":"black"}} >
                    Introduction to mS EXCEL
                  </span> 
                </div>
                <div style={{"width":"100%","height":"1px","margin":"5px 0px 5px 0px","borderTop":"1px solid gray"}}>                  
                </div>
                <div style={{"width":"100%","padding":"6px 14px 0px 14px"}}>
                  <div className={style.bulletPoints}>
                    <span style={{"fontSize": "12px","color":"black"}} >
                      <i className="icon ion-record" style={{"color":"rgba(8, 8, 8, 0.91)"}}></i>&nbsp;
                    </span>
                    <span style={{"fontSize": "12px","color":"black"}} >
                      Igdfgdfgfd dfgf dfbfgb cfgfgb
                    </span> 
                  </div>

                  <div className={style.bulletPoints}>
                    <span style={{"fontSize": "12px","color":"black"}} >
                      <i className="icon ion-record" style={{"color":"rgba(8, 8, 8, 0.91)"}}></i>&nbsp;
                    </span>
                    <span style={{"fontSize": "12px","color":"black"}} >
                      Igdfgdfgfd dfgf dfbfgb cfgfgb
                    </span> 
                  </div>

                  <div className={style.bulletPoints}>
                    <span style={{"fontSize": "12px","color":"black"}} >
                      <i className="icon ion-record" style={{"color":"rgba(8, 8, 8, 0.91)"}}></i>&nbsp;
                    </span>
                    <span style={{"fontSize": "12px","color":"black"}} >
                      Igdfgdfgfd dfgf dfbfgb cfgfgb
                    </span> 
                  </div>               
                </div>
              </div>             


            </div>            

            {/*Profesort details*/}
            <div style={{"width": "100%","marginTop":"30px"}}>
              <span style={{"fontSize": "22px","fontWeight": "bold","color":"black"}} >
                About the Instructor
              </span> 
            </div>

            <div style={{"width": "100%","marginTop":"6px"}} className={" flex-row-start-start"}>
              <div style={{"width":"15%"}} className={" vertical-center"}>   
                <img src="assets/img/chica.jpg" style={{"width":"100%"}} />          
              </div>

              <div style={{"marginLeft":"3%","width":"82%"}}>  
                <div style={{}}>
                  <span style={{"fontSize": "18px","fontWeight": "400","color":"black"}} >
                    RT Bathula
                  </span>               
                </div>
                <div style={{"marginTop":"3px"}}>
                  <span style={{"fontSize": "14px","color":"black"}} >
                    Software Developer
                  </span>               
                </div>

                <div style={{"marginTop":"9px"}}>
                  <span style={{"fontSize": "14px","color":"black"}} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa
                  </span>               
                </div>             
              </div>
            </div>       

          </div>
        </div>                    
	    </div>    	  	
    );
  }
}


export default App;
