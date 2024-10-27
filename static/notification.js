  socketfs = new WebSocket('ws://localhost:8080/notifications');

 socketfs.onmessage = function (from) {
     currentUrl = window.location.href;
 chatUrl = `http://localhost:8080/Chat/${from.data}`;

if (currentUrl != chatUrl) {
    alert(`New message from ${from.data}`);
}
    };


    socketfs.onerror = function (error) {
        console.error('WebSocket error:', error);
    };

    socketfs.onclose = function () {
        console.log('WebSocket connection closed');
    };