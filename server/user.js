const express = require('express')
const Router = express.Router()
const utility  = require('utility')
const model = require('./models/models')
const User = model.getModel('user')
const _filter = {'pwd':0, '__v':0}

Router.get('/list', (req, res) => {
	const { type } = req.query
	User.find({type}, (err, doc) => {
		if(!err){
			res.json({code: 0, data: doc})
		}
	})
})

Router.post('/update', (req, res) => {
	const userid = req.cookies.userid
	if (!userid) {
		return res.json({ code: 1 })
	}
	const user = req.body
	User.findByIdAndUpdate(userid, user, (err, doc) => {
		const data = Object.assign({}, {
			username: doc.username,
			type: doc.type
		}, user)
		return res.json({ code: 0, data})
	})
})

Router.post('/register', (req, res) => {
	const { username, pwd, type } = req.body
	User.findOne({username}, (err, doc) => {
		if (doc) {
			return res.json({ code: 1, msg: '用户名重复' })
		}
		const userModel = new User({username, type, pwd: md5Pwd(pwd)})
		userModel.save((e, d) => {
			if (e) {
				return res.json({ code: 1, msg: '服务器错误' })
			}
			const { user, type, _id} = d
			res.cookie('userid', _id)
			return res.json({code:0, data:{user, type, _id}})
		})
		// User.create({ username,type, pwd: md5Pwd(pwd) }, (err) => {
		// 	if (err) {
		// 		return res.json({ code: 1, msg: '服务器错误' })
		// 	} else {
		// 		return res.json({ code: 0 })
		// 	}
		// })
	})
})

Router.post('/login', (req, res) => {
	const { username, pwd } = req.body
	User.findOne({username, pwd: md5Pwd(pwd)}, _filter, (err, doc) => {
		if (doc) {
			res.cookie('userid', doc._id)
			return res.json({ code: 0, data: doc })
		} else {
			return res.json({ code: 1, msg: '用户名或密码错误' })
		}
	})
})

Router.get('/info', (req, res) => {
	const { userid } = req.cookies
	if (!userid) {
		return res.json({ code:1 })
	}
	User.findOne({_id:userid}, _filter, (err, doc) => {
		if (err) {
			return res.json({code:1, msg:'后端有误'})
		}
		if (doc) {
			return res.json({code:0, data:doc})
		}
	})
})

function md5Pwd(pwd) {
	const salt = 'kitt2018'
	return utility.md5(utility.md5(pwd + salt))
}

module.exports = Router
