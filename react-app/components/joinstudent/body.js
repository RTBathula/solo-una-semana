import React, { PropTypes, Component } from 'react'
import { Modal,Button,OverlayTrigger } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Link} from 'react-router'
import * as helpers from "helpers/util"

import * as subscribeActions from 'actions/subscribe'

//Css
import layoutStyle from 'components/layout.css'
import style from './joinstudent.css'


class App extends Component { 

  constructor(props) {
    super(props);
    this.state = {
      fullName     : {
        value : "",
        error : ""
      },
      email        : {
        value : "",
        error : ""
      },
      phone        : {
        value : "",
        error : ""
      },
      interestedIn : {
        value : "",
        error : ""
      }
    }
  }

  componentWillReceiveProps(nextProps) { 
    if(this.props.subscribe.isSubscribing && !nextProps.subscribe.isSubscribing){
      this.props.hideModal()
    }   
  }

  bindInputData=(event,columnName)=>{   
    this.state[columnName].value = event.target.value
    this.setState({
      [columnName]: this.state[columnName]
    })
  };

  subscribeMe=()=>{
    let isValid = this._validate()
    if(isValid){
      let finalObject ={}
      for (var prop in this.state) {
        if (this.state.hasOwnProperty(prop)) {
          finalObject[prop] = this.state[prop].value
        }
      }
      finalObject.userType=this.props.userType

      this.props.subscribeActions.toggleIsSubscribing(true)
      this.props.subscribeActions.subscribeAsync(finalObject)
    }   
  }

  onEntered=()=>{  
    let obj={
      fullName     : {
        value : "",
        error : ""
      },
      email        : {
        value : "",
        error : ""
      },
      phone        : {
        value : "",
        error : ""
      },
      interestedIn : {
        value : "",
        error : ""
      }
    } 

    this.setState({...obj}) 
  } 

  _validate=()=>{
    for (var prop in this.state) {
      if (this.state.hasOwnProperty(prop)) {
        this.state[prop].error = null
      }
    }
    this.setState({...this.state})

    let isValid = true;

    let txtMsg = helpers.validateTextField(this.state.fullName.value);
    if(txtMsg.error){
      this.state.fullName.error="Ingrese nombre de la empresa "+txtMsg.error;
      this.setState({
        fullName: this.state.fullName
      });
      isValid = false
    }
    if(!txtMsg.error && txtMsg.txt){
      this.state.fullName.value = txtMsg.txt
      this.setState({
        fullName: this.state.fullName
      })
    }

    let email = this.state.email.value
    if(!email){
      this.state.email.error="Debes ingresar el email del administrador";
      this.setState({
        email: this.state.email
      });
      isValid = false
    }

    if(email && !helpers.validarEmail(email)){
      this.state.email.error="Debes ingresar el email del administrador";
      this.setState({
        email: this.state.email
      });
      isValid = false
    }

    let phone = this.state.phone.value
    if(!phone){
      this.state.phone.error ="Debes ingresar el teléfono del administrador";
      this.setState({
        phone: this.state.phone
      });
      isValid = false
    }

    if(phone && (phone.length <12 || phone.length>12)){
      this.state.phone.error ="Debes ingresar el teléfono del administrador";
      this.setState({
        phone: this.state.phone
      });
      isValid = false
    }

    txtMsg = helpers.validateTextField(this.state.interestedIn.value);
    if(txtMsg.error){
      this.state.interestedIn.error="Ingrese nombre de la empresa "+txtMsg.error;
      this.setState({
        interestedIn: this.state.interestedIn
      });
      isValid = false
    }
    if(!txtMsg.error && txtMsg.txt){
      this.state.interestedIn.value = txtMsg.txt
      this.setState({
        interestedIn: this.state.interestedIn
      })
    }

    return isValid
  }

  render() {    

    return ( 
    	<div>
        <Modal onEntered={this.onEntered} backdrop={"static"} keyboard={false} show={this.props.showModal} onHide={this.props.hideModal}>
          {this.props.subscribe.error &&
            <div style={{"width":"100%","height":"25px","backgroundColor":"red"}} className={"flex-row-space-start "}>
              <div className={style.errorBoxHeader+" flex-row-start-start"}>
                <div className={"flex-row-center"}> 
                  <i className={"fa fa-exclamation-triangle"} style={{"color":"#353535","marginTop":"2px"}}></i>              
                </div>
                <div className={"flex-row-center"}> 
                  <span style={{"color":"red","marginLeft":"6px"}}>{this.props.subscribe.error}</span>              
                </div>            
              </div>
            </div>
          }
          <Modal.Header closeButton style={{"width":"100%","borderTopRightRadius":"4px","borderTopLeftRadius":"4px","backgroundColor":"#0947b9","border":"1px solid #212020"}}>
           
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
                    <input type="text" value={this.state.fullName.value} onChange={(event) => this.bindInputData(event,"fullName")}  placeholder="Enter your first name and last name" className={'default-inputfield '+style.inputNormal} />
                  </div>

                  {this.state.fullName.error &&
                    <div>
                    <span style={{"color":"red","marginLeft":"1.5px"}}>{this.state.fullName.error}</span>
                  </div>
                  }                  
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
                    <input type="text" value={this.state.email.value} onChange={(event) => this.bindInputData(event,"email")}  placeholder="Enter your email" className={'default-inputfield '+style.inputNormal} />
                  </div>
                  {this.state.email.error &&
                    <div>
                      <span style={{"color":"red","marginLeft":"1.5px"}}>{this.state.email.error}</span>
                    </div>
                  }
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
                    <input type="text" value={this.state.phone.value} onChange={(event) => this.bindInputData(event,"phone")}  placeholder="Enter your phone" className={'default-inputfield '+style.inputNormal} />
                  </div>
                  {this.state.phone.error &&
                    <div>
                      <span style={{"color":"red","marginLeft":"1.5px"}}>{this.state.phone.error}</span>
                    </div>
                  }
                </div>
              </div>

              {/*inputSuite*/}
              <div className={'flex-row-start-start '+style.inputSuite}>
                <div className={'vertical-center '+style.inputLabel} >
                 <div>
                  <span style={{"fontSize":"14px"}}>Interested in</span>
                  <span style={{"fontSize":"14px","color":"gray"}}>(subject)</span>
                 </div>
                </div>
                <div style={{"marginLeft":"3px"}}>
                  <div className={style.inputWrap}>
                    <input type="text" value={this.state.interestedIn.value} onChange={(event) => this.bindInputData(event,"interestedIn")}  placeholder="Enter subject you interested" className={'default-inputfield '+style.inputNormal} />
                  </div>
                  {this.state.interestedIn.error &&
                    <div>
                      <span style={{"color":"red","marginLeft":"1.5px"}}>{this.state.interestedIn.error}</span>
                    </div>
                  }
                </div>
              </div>            

            </div>
          </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.hideModal}>Cancel</Button>  
              {!this.props.subscribe.isSubscribing &&             
                <button onClick={this.subscribeMe} className={"default-inputfield " +style.createBtn}>                 
                  Create
                </button>   
              }

              {this.props.subscribe.isSubscribing &&             
                <button className={"default-inputfield " +style.createBtn}>
                  <i className="fa fa-circle-o-notch fa-spin fa-fw"></i>                  
                </button>   
              }             
            </Modal.Footer>
          </Modal>  
	    </div>    	  	
    );
  }
}

const mapStateToProps = state => ({
  subscribe : state.subscribe
})

const mapDispatchToProps = dispatch => ({
  subscribeActions : bindActionCreators(subscribeActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
