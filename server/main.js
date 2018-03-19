var express= require('express')
var app= express()
var server= require('http').Server(app)
var io= require('socket.io')(server)


app.use(express.static('public'))
app.get('/',function(req,res){
	res.status(200)
	//res.send('Hello world, remote administrator')
})
//Prueba de socket.io
io.on('connection',function(socket){
	console.log('Alguien se ha conectado con socket')
})

server.listen(8080,function(){
	console.log('Server running in http://localhost:8080')
})