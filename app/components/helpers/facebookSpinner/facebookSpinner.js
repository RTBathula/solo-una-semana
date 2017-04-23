import React, { PropTypes, Component } from 'react'
import Dropzone from 'react-dropzone'

//Css
import style from './facebookSpinner.css'

class App extends Component { 
   
    render() {
        return (                  
        <div className={style.spinner}>
		  <div className={style.rect1}></div>
		  <div className={style.rect2}></div>
		  <div className={style.rect3}></div>
		  <div className={style.rect4}></div>
		  <div className={style.rect5}></div>
		</div>          	  	
    );
  }
}

export default App
