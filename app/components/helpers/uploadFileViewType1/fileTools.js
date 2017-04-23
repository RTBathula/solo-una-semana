import React, { PropTypes, Component } from 'react'
import Dropzone from 'react-dropzone'

//Css
import style from './uploadFileViewType1.css'

class App extends Component { 
   
    render() {
        return (       
        <div className={style.imgToolsContainer}>
            <div className={"flex-row-end-start"}>
                <div className={style.remove}>
                    <span onClick={this.props.remove}>
                        <i className="icon ion-android-close"></i>
                    </span>                            
                </div>
            </div>
        </div>    	  	
    );
  }
}

export default App
