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

        var years=[]
        for(let i=1940;i<=new Date().getFullYear();++i){
            years.push(i)
        }           

        return (            
            <div className={style.fieldContainer}> 
                <div className={"flex-row-start-start "+style.fieldWrap}>  
                    <div className={style.field}> 
                        <select className={style.ppInput}>
                          <option value="0">Month</option>
                          <option value="01">January</option>
                          <option value="02">February</option>
                          <option value="03">March</option>
                          <option value="04">April</option>
                          <option value="05">May</option>
                          <option value="06">June</option>
                          <option value="07">July</option>
                          <option value="08">August</option>
                          <option value="09">September</option>
                          <option value="10">October</option>
                          <option value="11">November</option>
                          <option value="12">December</option>                          
                        </select> 
                    </div>

                    <div className={style.field}> 
                        <select className={style.ppInput}>
                          <option value="0">Day</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                          <option value="21">21</option>
                          <option value="22">22</option>
                          <option value="23">23</option>
                          <option value="24">24</option>
                          <option value="25">25</option>
                          <option value="26">26</option>
                          <option value="27">27</option>
                          <option value="28">28</option>
                          <option value="29">29</option>
                          <option value="30">30</option>
                          <option value="31">31</option>                         
                        </select> 
                    </div>

                    <div className={style.field}> 
                        <select className={style.ppInput}>
                         <option value="0">Year</option>
                         {   
                            years.map((year,index)=>{                              
                                return  <option key={ index } value={year}>{year}</option>                                                          
                            })

                         }
                        </select> 
                    </div>                   
                </div>                 
            </div>               	  	
        );
  }
}

export default App
