
// websocket and http servers
var WebSocketServer = require('websocket').server;
var http = require('http');
var clients = [];
var rotate = 0;
var channelList = ['ladosetv','froggedtv','Gorgc']
var currentChannel = 'ladosetv';
const hostname = '127.0.0.1';
const port = 3000;

function parseMessage(connection,message){
    var msg = message.utf8Data
    console.log(msg);
    if(msg == 'getChannel')
    {
        connection.sendUTF(JSON.stringify(channelList[rotate]));
    }
    if(msg.includes('setChannel'))
    {
        this.currentChannel == 'darkstack'
    }
}
var server = http.createServer(function (request, response) {
    // process HTTP request. Since we're writing just WebSockets
    // server we don't have to implement anything.
});
server.listen(port, hostname, function () { console.log(`Server running at http://${hostname}:${port}/`); });

var ws = new WebSocketServer({
    httpServer: server
});

ws.on('request', function (request) {
    console.log((new Date()) + ' Connection from origin '
        + request.origin + '.');

    var connection = request.accept(null, request.origin);
    // we need to know client index to remove them on 'close' event
    var index = clients.push(connection) - 1;
    connection.on('message', function (message) {
        if (message.type === 'utf8') {
            parseMessage(connection,message,index)
        }
    });
    connection.on('close', function (connection) {
        
            console.log((new Date()) + " Peer "
                + connection.remoteAddress + " disconnected.");

            clients.splice(index, 1);
        
    });
});

function switchChannel(){
    rotate++
    if(rotate%channelList.length === 0)
    {
        rotate = 0;
    }
    console.log("Switch to :"+channelList[rotate]);
    clients.forEach(
        function each(client) {
          
              client.sendUTF(JSON.stringify(channelList[rotate]));
          
          }
    );
}

setInterval(switchChannel, 5000);


