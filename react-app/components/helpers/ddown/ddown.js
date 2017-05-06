import React, { PropTypes, Component } from 'react'
import EllipsisText  from 'react-ellipsis-text'
import enhanceWithClickOutside from 'react-click-outside'

//Css
import style from './ddown.css'

class App extends Component { 

    handleClickOutside() {      
        this.props.outsideClick()
    }

    render() {
        return ( 		
            <div className={style.ddownContainer}>          
              <div className={style.ddownWrap}>   

                <div className={'flex-row-end-center '}>
                    <div className={style.uparrow}></div>
                </div>

                <div className={"card-2 "+style.contentWrap}>

                    <div className={"vertical-center "+style.infoContainer}>
                        <div className={"flex-row-start-start "+style.menuWrap}>                        
                            <div className={"vertical-center "+style.menuContent}>
                                <span>Signed in as</span>&nbsp;
                                <span className={style.userName}>
                                    <EllipsisText text={'RT Bathula'} length={9} tail={".."} />                            
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={style.menuDivdr}>
                    </div>

                    <div className={"vertical-center "+style.menuContainer}>
                        <div className={"flex-row-start-start "+style.menuWrap}>
                            <div className={"vertical-center "+style.menuIcon}>
                            </div>
                            <div className={"vertical-center "+style.menuContent}>
                                <span>Log out</span>
                            </div>
                        </div>
                    </div>

                </div> 

              </div>
        </div>    	  	
    );
  }
}

export default enhanceWithClickOutside(App)
