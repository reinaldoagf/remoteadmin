var socket = io.connect("http://localhost:8080/", {"forceNew":true})
//Escucha evento proveniente del servidor
socket.on('messages',function(data){
	console.log(data)
	render(data)
})
//Renderiza mensajes
function render(data){
	var html=data.map(function(element,index){
		return (`<div>
				<stronge>${element.author}</stronge>:
				<em>${element.message}</em>
			</div>`)
	}).join(' ')			
	document.getElementById('messages').innerHTML=html
}
//Agrega mensaje nuevo
function addMessage(e){
	var payload={
		'author':document.getElementById('author').value,
		'message':document.getElementById('message').value
	}
	document.getElementById('author').value=''
	document.getElementById('message').value=''
	socket.emit('chat-message',payload)
	return false
}