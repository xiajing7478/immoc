import React, { Component } from 'react'
import { Button, List } from 'antd-mobile'
// import 'antd-mobile/dist/antd-mobile.css'
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
	componentWillMount() {
		console.log('组件马上就要加载')
	}
	componentDidMount() {
		console.log('组件加载完毕')
	}
	addSolder() {
		this.setState({
			soliders: [...this.state.soliders, '新兵名字'+ Math.random()]
		})
	}
	render() {
		console.log('组件正在加载')
		return (
			<div>
				<h2>一营营长, { this.props.boss }</h2>
				{/*<button onClick={ this.addSolder }>增加士兵</button>*/}
				<Button type="primary" onClick={ () => this.addSolder() }>增加士兵</Button>
				<List renderHeader={() => '士兵列表'}>
					{this.state.soliders.map(v => {
						return (
							<List.Item key={v}>{v}</List.Item>
						)
					})}
				</List>
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

