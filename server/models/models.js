const mongoose = require('mongoose')
const DB_URL = 'mongodb://127.0.0.1:27017/kitt'
mongoose.connect(DB_URL)
const models = {
	user: {
		'username': { 'type': String, require: true },
		'pwd': { 'type': String, require: true },
		'type': { 'type': String, require: true },
		'avatar': { 'type': String },
		'desc': { 'type': String },
		'title': { 'type': String },
		'company': { 'type': String },
		'money': { 'type': String }
	},
	chat: {
		'chatid': { 'type': String, require: true },
		'read': { 'type': Boolean, default: false },
		'from': { 'type': String, require: true },
		'to': { 'type': String, require: true },
		'content': { 'type': String, require: true, default: '' },
		'create_time': { 'type': Number, default: new Date().getTime() },
	}
}
for(let m in models) {
	mongoose.model(m, new mongoose.Schema(models[m]))
}
module.exports = {
	getModel: (name) => {
		return mongoose.model(name)
	}
}

// mongoose.connection.on('connected', () => {
// 	console.log('mongo connect success')
// })
