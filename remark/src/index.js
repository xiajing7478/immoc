import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
// import { Counter } from './index.redux'
import Auth from './Auth/Auth'
import Dashboard from './Dashboard/Dashboard'
import reducers from './reducers'
import './axios/config'
import registerServiceWorker from './registerServiceWorker';
const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f=>f

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	reduxDevtools
))

// console.log('store.getState()', store.getState())

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				{/*只渲染命中的第一个Route*/}
				<Route path='/login' component={Auth}></Route>
				<Route path='/dashboard' component={Dashboard}></Route>
				<Redirect to='/dashboard'></Redirect>
				{/*<Route path='/sanying' component={Sanying}></Route>*/}
				{/*<Route path='/:location' component={NotFound}></Route>*/}
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)

// function render() {
// 	const init = store.getState()
// 	console.log(init)
// 	ReactDOM.render(<App store={store} addGun={addGun} removeGun={removeGun} addGunAsync={addGunAsync} />,
// 		document.getElementById('root'));
// }
// render()
// store.subscribe(render)

registerServiceWorker();
