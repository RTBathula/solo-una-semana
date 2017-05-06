import React, { PropTypes, Component } from 'react'
import Dropzone from 'react-dropzone'

//Css
import style from './uploadBtnType1.css'

class App extends Component { 
   
    onDrop=(files)=> {            
    } 

    render() {
        return ( 		
        <div className={style.container}>          
            <Dropzone onDrop={this.props.onDrop} className={"vertical-center "+style.dropzone} accept={this.props.accept}>
                <div className={"flex-row-start-start"} style={{"position":"relative"}}>
                    <div className={"flex-column-center "+style.icon1}>
                        <i className="icon ion-plus"></i>
                    </div>
                    <div className={"flex-column-center "+style.icon2}>
                        <i className="icon ion-paperclip"></i>
                    </div>
                </div>            
            </Dropzone>
        </div>    	  	
    );
  }
}

export default App
