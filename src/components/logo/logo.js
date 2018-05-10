import React, { Component } from 'react'
import logoImg from './logo.jpg'
// import './logo.css'
// import './logos.less'
import './logos.scss'
class Logo extends Component{
	render() {
		return (
			<div className="logo-container">
				<img alt="logo" className="img-size" src={logoImg} />
			</div>
		)
	}
}

export default Logo
