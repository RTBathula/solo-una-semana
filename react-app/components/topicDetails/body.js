import React, { PropTypes, Component } from 'react'

//Css
import layoutStyle from 'components/layout.css'
import style from './topicDetails.css'

//Custom components
import Joinstudent from 'components/joinstudent/body'
import FilePreviewByType from 'components/helpers/filePreviewByType/filePreviewByType'
import Course from './course'

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
    	<div className={layoutStyle.screenfull} style={{"backgroundColor":"white"}}>
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
                      <span style={{"fontSize": "20px","color":"green","fontWeight":"600"}} >
                        $50,000 CLP
                      </span>                       
                    </div>            
                  </div>

                  {/*Buttons*/}
                  <div style={{"width":"100%","marginTop":"20px"}} className={' flex-row-start-start'}>              
                     <div style={{"height":"auto"}} >
                      <button onClick={() => this.setState({openJoinStudentModal: true,userType:"student"})} className={' default-inputfield'} style={{"backgroundColor": "green","fontSize": "16px","color":"white","height":"32px","width":"150px","borderRadius":"1px"}} >                    
                        I will attend
                      </button>                       
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
              <Course />
              <Course />
              <Course />
            </div>            

            {/*Profesort details*/}
            <div style={{"width": "100%","marginTop":"30px"}}>
              <span style={{"fontSize": "22px","fontWeight": "bold","color":"black"}} >
                About the Instructor
              </span> 
            </div>

            <div style={{"width": "100%","marginTop":"6px"}} className={" flex-row-start-start"}>
              <div style={{"width":"15%"}} className={" vertical-center"}>   
                <img src="assets/img/chica.jpg" style={{"width":"100%","border":"1px solid #eee"}} />          
              </div>

              <div style={{"marginLeft":"3%","width":"82%"}}>  
                <div style={{}}>
                  <span style={{"fontSize": "18px","fontWeight": "400","color":"blue"}} >
                    RT Bathula
                  </span>               
                </div>
                <div style={{"marginTop":"3px"}}>
                  <span style={{"fontSize": "16px","color":"black","fontWeight": "400"}} >
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

        {/*Joinstudent*/}
        <Joinstudent userType={this.state.userType} showModal={this.state.openJoinStudentModal} hideModal={() => this.setState({openJoinStudentModal: false})} />                   
	    </div>    	  	
    );
  }
}


export default App;
