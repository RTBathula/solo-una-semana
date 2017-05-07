import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import store from 'store/store'

//Custom
import Land from './containers/land'
import TopicDetails from './containers/topicDetails'
import About from './containers/about'
import HowItWorks from './containers/howitworks'
import Location from './containers/location'

const history = syncHistoryWithStore(browserHistory, store)

render(	
	<Provider store={store}>
		<Router history = {history}>					
			<Route path="/" component={Land}/>
			<Route path="/topic" component={TopicDetails}/>
			<Route path="/about-us" component={About}/>
			<Route path="/how-it-works" component={HowItWorks}/>
			<Route path="/location" component={Location}/>		
		</Router>				
	</Provider>,
document.getElementById('react-mount')
);
