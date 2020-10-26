var socket = io();
socket.on('connect', () => {
    console.log("conectado al servidor");
});
//on son para escuchar sucesos
socket.on('disconnect', () => {
    console.log("perdimos conexion con el servidor");
});
//los emit envian informacion
socket.emit('enviarMensaje', {
    usuario: 'Irving',
    mensaje: 'Hola mundo'
}, (resp) => {
    console.log("respuesta del servidor:", resp);
});
//escuchar informacion
socket.on('enviarMensaje', (mensaje) => {
    console.log(mensaje);
});