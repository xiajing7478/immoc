const express = require('express')
const bodyParser  = require('body-parser')
const cookieParser = require('cookie-parser')
// work with express
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const model = require('./models/models')
const User = model.getModel('user')
const Chat  = model.getModel('chat')
const userRoute = require('./user')
io.on('connection', function(socket) {
	socket.on('sendmsg', function (data) {
		const { from ,to ,msg } = data
		const chatid = [from, to].sort().join('_')
		Chat.create({ chatid, from, to, content: msg }, (err, doc) => {
			if(err) {
				console.log(err)
			}
			io.emit('reciveMsg', Object.assign({}, doc._doc))
		})
		// console.log(data)
		// io.emit('reciveMsg', data)
	})
})

// delete Chat table datas
// Chat.remove({}, (err, doc) =>{
// 	if (!err) {
// 		console.log(doc)
// 	}
// })

app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user', userRoute)
app.get('/', function(req, res) {
	res.send('hello Node')
})
server.listen(9093, function(err){
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
