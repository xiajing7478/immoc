import React, { Component } from 'react'
import { Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { addGun, removeGun, addGunAsync } from './index.redux'
// const mapStateToProps = (state) => {return { num: state }} // 属性
// const actionCreators = { addGun, removeGun, addGunAsync } // 方法
// App = connect(mapStateToProps, actionCreators)(App)
// @connect(mapStateToProps, actionCreators)
@connect(
	// 需要什么属性放到props里面
	state => ({num: state.Counter}),
	// 需要什么方法放到props里面,自动dispatch
	{addGun, removeGun, addGunAsync}
)
class App extends Component {
	render() {
		return (
			<div>
				<h2>现在有把武器{this.props.num}</h2>
				<Button onClick={this.props.addGun}>增加武器</Button>
				<Button onClick={this.props.removeGun}>回收武器</Button>
				<Button onClick={this.props.addGunAsync}>拖两天再给</Button>
			</div>
		)
	}
}
export default App


