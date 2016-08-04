/*
☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼
☼             ☼
☼      ☻      ☼
☼            ☺☼
☼            ▲☼
☼            ║☼
☼            ║☼
☼            ║☼
☼            ╙☼
☼             ☼
☼             ☼
☼             ☼
☼             ☼
☼             ☼
☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼
*/

var log = function(string) {
    console.log(string);
};

var hostIp = 'localhost';
var userName = 'sergey@epam.com';
var protocol = 'WS';

var port = 8080;
var server = 'ws://' + hostIp + ':' + port + '/codenjoy-contest/ws';
var WebSocket = require('ws');
var ws = new WebSocket(server + '?user=' + userName);

ws.on('open', function() {
    log('Opened');
});

ws.on('close', function() {
    log('Closed');
});

ws.on('message', function(message) {
    log('received: ' + message);
    var result = answer();
    log("submitted: " + result);

    ws.send(result);
});

log('Web socket client running at ' + server);

function answer() {
	return "down";

}
