import React, { PropTypes, Component } from 'react'
import Dropzone from 'react-dropzone'

//Components
import FacebookSpinner from 'components/helpers/facebookSpinner/facebookSpinner'

//Css
import style from './uploadFileViewType1.css'

class App extends Component { 
   
    render() {
        return (       
        <div className={"flex-column-center "+style.imgUploadBarContainer}>            
            <div className={style.bar}>
               <FacebookSpinner />                    
            </div>          
        </div>    	  	
    );
  }
}

export default App
