var socket = io.connect("http://localhost:8080/", {"forceNew":true})
var cursors = {};
var clients = {};
//Movimiento del mouse emitido por el administrador

function moveHandler(data){  	
	// console.log('Recibido desde el servidor:'+data.ejeX+' '+data.ejeY)
	if(! (data.id in clients)){
      // le damos un cursor a cada usuario nuestro
      cursors[data.id] = $('<div class="cursor">').appendTo('#cursors');
    }

    // movemos el cursor a su posicion
    cursors[data.id].css({
      'left' : data.ejeX,
      'top' : data.ejeY
    });

    // actualizamos el estado
    clients[data.id] = data;
    clients[data.id].updated = $.now();

}
socket.on('mousemove-issued',moveHandler);

function btnAlert(data){  	
	alert('Alert')
}
socket.on('btnAlert',btnAlert);