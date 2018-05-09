import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import reducers from './reducers/reducers'
import './axios/config'
import './assets/styles/index.css'
import Login from './views/login/login'
import Register from './views/register/register'
import AuthRoute from './components/authRoute/authRoute'
import BossInfo from './views/bossinfo/bossinfo'
import GeniusInfo from './views/geniusinfo/geniusinfo'
import Dashboard from './components/dashboard/dashboard'
import registerServiceWorker from './registerServiceWorker';
const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f=>f

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	reduxDevtools
))

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<AuthRoute></AuthRoute>
				<Switch>
					<Route path='/geniusinfo' component={GeniusInfo}></Route>
					<Route path='/bossinfo' component={BossInfo}></Route>
					<Route path='/login' component={Login}></Route>
					<Route path='/register' component={Register}></Route>
					<Route component={Dashboard}></Route>
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)

registerServiceWorker();
