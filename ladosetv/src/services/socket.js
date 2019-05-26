export default {

    install(Vue, connection) {

        let socket;


        let WebSocket = window.WebSocket || window.MozWebSocket;

        if (connection != null && typeof connection === "object")
            socket = new WebSocket(connection)
        else
            socket = new WebSocket("ws://127.0.0.1:3000");



        Vue.prototype.$socket = socket;

        socket.onopen = function () {
            // connection is opened and ready to use
            window.console.log('connected');
        };

        socket.onerror = function (error) {
            window.console.log('error : ' + error);
        };
        // socket.onmessage = function (message) {
        //     // try to decode json (I assume that each message
        //     // from server is json)
        //     try {
        //         var json = JSON.parse(message.data);
        //         window.console.log(json);
        //     } catch (e) {
        //         window.console.log('This doesn\'t look like a valid JSON: ',
        //             message.data);
        //         return;
        //     }
        //     // handle incoming message
        // };



      

    }
}
