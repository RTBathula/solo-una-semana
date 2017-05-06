import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Link} from 'react-router'

import * as UserActions from 'actions/user'

//Components
import Header from 'components/header'
import About from 'components/about/body'
import Footer from 'components/footer'


class App extends Component { 

  render() {
    return ( 
    	<div>					
  			<Header user={this.props.user} actions={this.props.actions} />
  			<About user={this.props.user} actions={this.props.actions}/>
  			<Footer/>				
  		</div>   	    
    );
  }
}

const mapStateToProps = state => ({
  user : state.user
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(UserActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
