import React, { Component } from 'react'
import { Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { addGun, removeGun, addGunAsync } from './index.redux'
class App extends Component {
	render() {
		return (
			<div>
				<h2>现在有把武器{this.props.num}</h2>
				<Button onClick={this.props.addGun}>增加武器</Button>
				<Button onClick={this.props.removeGun}>回收武器</Button>
				<Button onClick={this.props.addGunAsync}>拖2秒再给武器</Button>
			</div>
		)
	}
}

// 属性
const mapStateToProps = (state) => {
	return { num: state }
}
const actionCreators = { addGun, removeGun, addGunAsync } // 方法
App = connect(mapStateToProps, actionCreators)(App)
export default App
