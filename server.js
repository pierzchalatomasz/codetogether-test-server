var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.get('/files', function (req, res) {
    res.send(['sampleFile.js']);
});

io.on('connection', function (socket) {
    socket.on('remoteCommand', function (data) {
        console.log(data);
        socket.broadcast.emit('remoteCommand', data);
    });
});

console.log('Server listening on port 3000');