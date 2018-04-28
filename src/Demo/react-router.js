import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom'
import App from './App';
import { Counter } from './index.redux'
import registerServiceWorker from './registerServiceWorker';
const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f=>f

const store = createStore(Counter, compose(
	applyMiddleware(thunk),
	reduxDevtools
))

function Erying() {
	return <h2>二营</h2>
}
function Sanying() {
	return <h2>三营</h2>
}
function NotFound() {
	return <h2>NOT FOUND...</h2>
}

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<ul>
					<li><Link to='/'>一营</Link></li>
					<li><Link to='/erying'>二营</Link></li>
					<li><Link to='/sanying'>三营</Link></li>
				</ul>
				{/*<Redirect to='/erying'></Redirect>*/}
				<Switch>
					{/*只渲染命中的第一个Route*/}
					<Route path='/' exact component={App}></Route>
					<Route path='/erying' component={Erying}></Route>
					<Route path='/sanying' component={Sanying}></Route>
					<Route path='/:location' component={NotFound}></Route>
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)
registerServiceWorker();
