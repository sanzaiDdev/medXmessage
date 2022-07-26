import { io } from "socket.io-client";

const CONNECTION_STRING = "http://localhost:4000";

let socket;

export const initializeSocketConnection = () => {
  socket = io(CONNECTION_STRING, {
    pingTimeout: 10000,
  });

  return socket;
};

export const getSocket = () => {
  if (socket) return socket;

  return initializeSocketConnection();
};
