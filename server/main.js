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
//Enviando motor de plantilla jade
app.set('view engine','jade')
app.use('/static', express.static('public'))
app.get('/',function(req,res){
	res.status(200)
	res.render('layouts/index')
})
app.get('/admin',function(req,res){
	res.status(200)
	res.render('admin/admin')
})
//Prueba de socket.io
io.on('connection',function(socket){
	console.log('Alguien se ha conectado con socket')
	socket.on('mousemove',function(data){
		// console.log('X recibido '+data.ejeX+' Y recibido '+data.ejeY)
		//Movimiento del mouse emitido por el administrador
		// socket.emit('mousemove-issued',data)
		io.sockets.emit('mousemove-issued',data)
	})
	socket.on('btnAlert',function(){
		io.sockets.emit('btnAlert')
	})
	// socket.emit('messages',messages)
	// socket.on('chat-message',function(data){
	// 	messages.push(data)
	// 	io.sockets.emit('messages',messages)
	// })
})

server.listen(8080,function(){
	console.log('Server running in http://localhost:8080')
})