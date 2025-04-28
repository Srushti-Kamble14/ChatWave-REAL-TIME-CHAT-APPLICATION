let socket = null;

const WebSocketService = {
  getSocket: () => {
    if (!socket) {
      socket = new WebSocket("ws://localhost:8080"); // You need to run a WebSocket server here
    }
    return socket;
  }
};

export default WebSocketService;
