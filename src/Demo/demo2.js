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
		// this.addSolder = this.addSolder.bind(this) // bind
	}
	addSolder() {
		this.setState({
			soliders: [...this.state.soliders, '新兵名字'+ Math.random()]
		})
	}
	render() {
		return (
			<div>
				<h2>一营营长, { this.props.boss }</h2>
				{/*<button onClick={ this.addSolder }>增加士兵</button>*/}
				<button onClick={ () => this.addSolder() }>增加士兵</button>
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

