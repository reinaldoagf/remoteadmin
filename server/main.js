var express= require('express')
var app= express()
var server= require('http').Server(app)
var io= require('socket.io')(server)

//Array de mensajes
var messages=[{
	'id'      : 1,
	'message' : 'Hola, primer mensaje',
	'author'  : 'reinaldoagf'
}]

app.use(express.static('public'))
app.get('/',function(req,res){
	res.status(200)
	res.send('Hello world, remote client')
})
app.get('/admin',function(req,res){
	res.status(200)
	res.send('Hello world, remote administrator')
})
//Prueba de socket.io
io.on('connection',function(socket){
	console.log('Alguien se ha conectado con socket')
	socket.emit('messages',messages)
	socket.on('chat-message',function(data){
		messages.push(data)
		io.sockets.emit('messages',messages)
	})
})

server.listen(8080,function(){
	console.log('Server running in http://localhost:8080')
})