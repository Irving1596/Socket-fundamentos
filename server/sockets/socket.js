const { io } = require('../server')
io.on('connection', (client) => {
    console.log("usuario conectado");
    client.emit('enviarMensaje', {
        usuario: 'Administrado',
        mensaje: 'Bienvenido a la app'
    });

    client.on('disconnect', () => {
            console.log("usuario desconectado");
        })
        //escuchar cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);
        client.broadcast.emit('enviarMensaje', data);
        /* if (mensaje.usuario) {
             callback({
                 resp: 'todo salio bien'
             });
         } else {
             callback({
                 resp: 'todo salio MAL!!!'
             });
         }
         */

    });
});