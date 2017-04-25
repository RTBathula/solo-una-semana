import React, { PropTypes, Component } from 'react'
import { Modal,Button,OverlayTrigger } from 'react-bootstrap'

//Css
import layoutStyle from 'components/layout.css'
import style from './joinstudent.css'


class App extends Component { 

  render() {    

    return ( 
    	<div>
        <Modal onEntered={this.onEntered} backdrop={"static"} keyboard={false} show={this.props.showModal} onHide={this.props.hideModal}>
          <div style={{"width":"100%","height":"25px","backgroundColor":"red"}} className={"flex-row-space-start "}>
            <div className={style.errorBoxHeader+" flex-row-start-start"}>
              <div className={"flex-row-center"}> 
                <i className={"fa fa-exclamation-triangle"} style={{"color":"#353535","marginTop":"2px"}}></i>              
              </div>
              <div className={"flex-row-center"}> 
                <span style={{"color":"red","marginLeft":"6px"}}>fucked up</span>              
              </div>            
            </div>
          </div>

          <Modal.Header closeButton style={{"width":"100%","borderTopRightRadius":"4px","borderTopLeftRadius":"4px","backgroundColor":"black"}}>
           
            <div style={{"width":"100%"}} className={"flex-row-space-start "}>
              <div className={" "}>
                <div className={" "}>
                  <span style={{"fontSize":"26px","color":"white","fontWeight":"bold"}}>
                    Join SUS program
                  </span>
                </div>
                <div className={" "}>
                  <span style={{"fontSize":"18px","color":"white","fontWeight":"100"}}>
                    Learn anything in one semana
                  </span>
                </div>
              </div>
              <div className={" "}>
              </div>
            </div>
       
          </Modal.Header>
          <Modal.Body>
            {/*Form*/}
            <div style={{"width":"100%","marginTop":"2px"}}>                      

              {/*inputSuite*/}
              <div className={'flex-row-start-start '+style.inputSuite}>
                <div className={'vertical-center '+style.inputLabel} >
                 <div>
                  <span style={{"fontSize":"14px"}}>Full Name</span>
                 </div>
                </div>
                <div style={{"marginLeft":"3px"}}>
                  <div className={style.inputWrap}>
                    <input type="text" value={""} onChange={(event) => this.bindInputData(event,"address")}  placeholder="Enter the company address" className={'default-inputfield '+style.inputNormal} />
                  </div>
                  <div>
                    <span style={{"color":"red","marginLeft":"1.5px"}}>{"this.state.address.error"}</span>
                  </div>
                </div>
              </div> 

              {/*inputSuite*/}
              <div className={'flex-row-start-start '+style.inputSuite}>
                <div className={'vertical-center '+style.inputLabel} >
                 <div>
                  <span style={{"fontSize":"14px"}}>Email</span>
                 </div>
                </div>
                <div style={{"marginLeft":"3px"}}>
                  <div className={style.inputWrap}>
                    <input type="text" value={""} onChange={(event) => this.bindInputData(event,"address")}  placeholder="Enter the company address" className={'default-inputfield '+style.inputNormal} />
                  </div>
                  <div>
                    <span style={{"color":"red","marginLeft":"1.5px"}}>{"this.state.address.error"}</span>
                  </div>
                </div>
              </div>

              {/*inputSuite*/}
              <div className={'flex-row-start-start '+style.inputSuite}>
                <div className={'vertical-center '+style.inputLabel} >
                 <div>
                  <span style={{"fontSize":"14px"}}>Phone</span>
                 </div>
                </div>
                <div style={{"marginLeft":"3px"}}>
                  <div className={style.inputWrap}>
                    <input type="text" value={""} onChange={(event) => this.bindInputData(event,"address")}  placeholder="Enter the company address" className={'default-inputfield '+style.inputNormal} />
                  </div>
                  <div>
                    <span style={{"color":"red","marginLeft":"1.5px"}}>{"this.state.address.error"}</span>
                  </div>
                </div>
              </div>

              {/*inputSuite*/}
              <div className={'flex-row-start-start '+style.inputSuite}>
                <div className={'vertical-center '+style.inputLabel} >
                 <div>
                  <span style={{"fontSize":"14px"}}>Interested in(subject)</span>
                 </div>
                </div>
                <div style={{"marginLeft":"3px"}}>
                  <div className={style.inputWrap}>
                    <input type="text" value={""} onChange={(event) => this.bindInputData(event,"address")}  placeholder="Enter the company address" className={'default-inputfield '+style.inputNormal} />
                  </div>
                  <div>
                    <span style={{"color":"red","marginLeft":"1.5px"}}>{"this.state.address.error"}</span>
                  </div>
                </div>
              </div>            

            </div>
          </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.hideModal}>Cancel</Button>               
              <button onClick={this.create} className={"default-inputfield " +style.createBtn}>
                <i className="fa fa-floppy-o" aria-hidden="true"></i>&nbsp;
                Create
              </button>                
            </Modal.Footer>
          </Modal>  
	    </div>    	  	
    );
  }
}


export default App;
