import React, { PropTypes, Component } from 'react'

//Css
import layoutStyle from 'components/layout.css'
import style from './about.css'


class App extends Component { 

  render() {    

    return ( 
    	<div className={layoutStyle.screenfull} style={{"backgroundColor":"white"}}>
        <div className={style.presentbxContainer+' horizontal-center'}>  
          <div className={layoutStyle.screen980+" "+style.presentbxWrap+" flex-column-center"} > 
            <span style={{"fontSize":"32px","color":"gray","fontWeight":"500"}}>
              About us
            </span>
          </div>
        </div> 

        <div className={style.pageContainer+' horizontal-center'}>  
          <div className={layoutStyle.screen980+" "} > 

            <div style={{"marginTop":"30px","width":"100%"}}>
              <span style={{"fontSize":"32px","color":"black","fontWeight":"500"}}>
                Solo una semana
              </span>
            </div>

            <div style={{"marginTop":"4px","width":"100%","padding":"20px","backgroundColor":"#efeded"}}>
              <div>
                <span style={{"fontSize":"16px","color":"black","fontWeight":"400"}}>
                  Mentor aspiring Data Scientists enrolled in Thinkful's Data Science Flexible Bootcamp! The intensive, 4-6 month course helps students become self-sufficient data scientists capable of advancing their skills as they grow in their careers for years to come. As a Mentor, you will work one-on-one with your student(s), meeting 3x a week as they build projects and master data science fundamentals. Thinkful Mentors work remotely and set their own hours. The role is a great fit for experts who genuinely love their work and want to share their expertise, experience, and themselves with awesome students and fellow mentors from around the globe!
                </span>
              </div>

              <div style={{"marginTop":"22px","width":"100%"}} className={' flex-row-start-start'}>
                <div style={{"width":"100px"}}>
                  <div style={{"width":"100%"}}>
                    <img src="/assets/img/rose.png" style={{"width":"100%"}} />
                  </div>
                  <div style={{"marginTop":"3px"}}>
                    <span style={{"fontSize":"16px","color":"blue","fontWeight":"400"}}>
                      RT Bathula
                    </span>
                  </div>
                  <div style={{"marginTop":"3px"}}>
                    <span style={{"fontSize":"14px","color":"black","fontWeight":"400"}}>
                      battu.networ@gmail.com
                    </span>
                  </div>
                </div>

                <div style={{"width":"100px","marginLeft":"92px"}}>
                  <div style={{"width":"100%"}}>
                    <img src="/assets/img/rose.png" style={{"width":"100%"}} />
                  </div>
                  <div style={{"marginTop":"3px"}}>
                    <span style={{"fontSize":"16px","color":"blue","fontWeight":"400"}}>
                      RT Bathula
                    </span>
                  </div>
                  <div style={{"marginTop":"3px"}}>
                    <span style={{"fontSize":"14px","color":"black","fontWeight":"400"}}>
                      battu.networ@gmail.com
                    </span>
                  </div>
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
