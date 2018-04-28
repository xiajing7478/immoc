import React, { Component } from 'react'
class App extends Component {
	render() {
		const boss = '李云龙'
		return (
			<div>
				<h2>独立团， 团长{boss}</h2>
				<YiYing boss='张大苗'></YiYing>
				<QiBingLian boss='孙德胜'></QiBingLian>
			</div>
		)
	}
}

class YiYing extends Component{
	constructor(props) {
		super(props)
		this.state = {
			soliders: ['胡子', '柱子', '码子']
		}
	}
	render() {
		return (
			<div>
				<h2>一营营长, { this.props.boss }</h2>
				<ul>
					{this.state.soliders.map(v => {
						return <li key={v}>{v}</li>
					})}
				</ul>
			</div>
		)
	}
}

function QiBingLian(props) {
	return <h2>骑兵连连长{ props.boss }, 冲啊!</h2>
}

export default App
// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to Imooc</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;
