import React, { Component } from 'react'
import logoImg from './logo.jpg'
import './logo.css'
class Logo extends Component{
	render() {
		return (
			<div className="logo-container">
				<img alt="logo" src={logoImg} />
			</div>
		)
	}
}

export default Logo
