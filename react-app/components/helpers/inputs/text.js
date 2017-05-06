import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'

//Css
import style from './inputs.css'


class App extends Component { 

    constructor(props) {
        super(props)   
        this.state = {                                   
        }
    } 
    render() {
        return (
            
            <div className={style.fieldContainer}> 
                <div className={"flex-row-start-start "+style.fieldWrap}>  
                    <div className={style.field}> 
                        <input type="text" className={style.ppInput}/> 
                    </div>
                </div>                 
            </div>
               	  	
        );
  }
}

export default App
