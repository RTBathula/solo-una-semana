import React, { PropTypes, Component } from 'react'

//Css
import layoutStyle from 'components/layout.css'
import style from './location.css'


class App extends Component { 

  render() {    

    return ( 
    	<div className={layoutStyle.screenfull} style={{"backgroundColor":"white"}}>
        <div className={style.presentbxContainer+' horizontal-center'}>  
          <div className={layoutStyle.screen980+" "+style.presentbxWrap+" flex-column-center"} > 
            <span style={{"fontSize":"32px","color":"gray","fontWeight":"500"}}>
              Our locations
            </span>
          </div>
        </div> 

        <div className={style.pageContainer+' horizontal-center'}>  
          <div className={layoutStyle.screen980+" "} >            

            <div style={{"marginTop":"34px","width":"100%","padding":"20px","backgroundColor":"#efeded"}}>
              <div>
                <span style={{"fontSize":"16px","color":"black","fontWeight":"400"}}>
                  Mentor aspiring Data Scientists enrolled in Thinkful's Data Science Flexible Bootcamp! The intensive, 4-6 month course helps students become self-sufficient data scientists capable of advancing their skills as they grow in their careers for years to come. As a Mentor, you will work one-on-one with your student(s), meeting 3x a week as they build projects and master data science fundamentals. Thinkful Mentors work remotely and set their own hours. The role is a great fit for experts who genuinely love their work and want to share their expertise, experience, and themselves with awesome students and fellow mentors from around the globe!
                </span>
              </div>                          
            </div>

          </div>
        </div>

	    </div>    	  	
    );
  }
}


export default App;
