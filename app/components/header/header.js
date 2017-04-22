import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'


//Components
import Ddown from 'components/helpers/ddown/ddown'

//Css
import layoutStyle from 'components/layout.css'
import style from './header.css'

class App extends Component { 

    constructor(props) {
        super(props)   
        this.state = { 
            isMenuOpen: false                        
        }
    }
    outsideClick=()=>{       
        this.setState({
            isMenuOpen: false
        })
    }  

    render() {
        return ( 		
            <div className={layoutStyle.screenfull+' '+style.headstrip+' horizontal-center'}>
              <div className={layoutStyle.screen980}>   
                <header>
                    <div className={'flex-row-start-start '+style.headerWrap}>
                        <div className={'vertical-center '+style.logowrap}>
                            <div className={style.logo}>  
                                <img src='/assets/img/cardslogo.png' />             
                            </div> 
                            <div className={'vertical-center '+style.title}>                             
                                <img src='/assets/img/logotitle.png' />                              
                            </div>                       
                        </div> 
                        <div className={'flex-row-end-center '+style.userTools}> 
                            <div className={'vertical-center '} style={{"height":"100%"}}>

                                <div className={'vertical-center '+style.featuresWrap+" "+style.notifyWrap}>
                                    <div>  
                                        <i className="icon ion-android-notifications"></i>
                                    </div>                                        
                                </div>
                                <div  className={'vertical-center '+style.featuresWrap}>  
                                    <div onClick={(event)=> this.setState({isMenuOpen: !this.state.isMenuOpen})} className={'flex-row-start-start '+style.userWrap}>  
                                        <div className={'vertical-center '}>  
                                            <img src='/assets/img/default-avatar.jpg' /> 
                                        </div>
                                         <div className={'vertical-center '} style={{"marginLeft":"5px"}}>  
                                            <i className="icon ion-android-arrow-dropdown"></i>
                                        </div>
                                    </div>

                                    {this.state.isMenuOpen &&
                                        <Ddown outsideClick={this.outsideClick}/>
                                    }
                                                                            
                                </div>                                                                                
                            </div>                         
                        </div>                
                    </div>
                </header>
              </div>
            </div>    	  	
        );
  }
}

export default App;
