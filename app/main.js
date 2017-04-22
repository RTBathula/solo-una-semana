import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import store from 'store/store'

//Custom
import Land from './containers/land'

const history = syncHistoryWithStore(browserHistory, store)

render(	
	<Provider store={store}>
		<Router history = {history}>					
			<Route path="/" component={Land}/>		
		</Router>				
	</Provider>,
document.getElementById('react-mount')
);
