var socket = io.connect("http://localhost:8080/", {"forceNew":true})
var cursors = {};
//Movimiento del mouse emitido por el administrador
socket.on('mousemove-issued',function(data){  	
	console.log('Recibido desde el servidor:'+data.ejeX+' '+data.ejeY)
	cursors[1] = $('<div class="cursor">').appendTo('#cursors');
	// movemos el cursor a su posicion
    cursors[1].css({
      'left' : data.ejeX,
      'top' : data.ejeY
    });
})