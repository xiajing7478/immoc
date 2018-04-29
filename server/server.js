const express = require('express')
const bodyParser  = require('body-parser')
const cookieParser = require('cookie-parser')
const userRoute = require('./user')
const app = express()
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user', userRoute)
app.get('/', function(req, res) {
	res.send('hello Node')
})
app.listen(9093, function(err){
	if (err) { console.log(err) }
	console.log('Node app start....')
})






// const User = mongoose.model('user', new mongoose.Schema({
// 	username: { type : String, require: true },
// 	age: { type : Number, require: true }
// }))
// create,remove,update 用来增删改操作， find, findOne查询
// User.create({ username : 'imooc', age: 17}, (err, doc) => {
// 	if (!err) {
// 		console.log(doc)
// 	} else {
// 		console.log(err)
// 	}
// })
// User.update({'username':'imooc'}, {'$set':{age:26}}, (err, doc) => {
// 	if (!err) {
// 		console.log(doc)
// 	}
// })
// app.get('/', function(req, res) {
// 	res.send('hello Node')
// })
// app.get('/data', function(req, res) {
// 	User.findOne({username: 'imooc'}, (err, doc) => {
// 		if (!err) {
// 			res.json(doc)
// 		} else {
// 			console.log(err)
// 		}
// 	})
// })
// app.get('/del', (req, res) => {
// 	User.remove({age:18}, (doc) => {
// 		console.log(doc)
// 	})
// })
// app.listen(9093, function(err){
// 	if (err) { console.log(err) }
// 	console.log('Node app start....')
// })