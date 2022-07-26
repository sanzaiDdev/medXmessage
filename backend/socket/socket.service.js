import { Server } from "socket.io";

let io = null;
const corsOrigin = process.env.CORS_ORIGIN || "http://localhost:3000";

export const initializeSocket = (server) => {
  io = new Server(server, {
    pingTimeout: 10000,
    "force new connection": true,
    cors: {
      origin: corsOrigin,
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`Socket connected: ${socket.id}`);
    socket.on("disconnect", () => {
      console.log(`Socket left: ${socket.id}`);
    });
  });
};

export const getSocketIOInstance = () => {
  return io;
};

export const emitEvent = (event, message) => {
  const ioInstance = getSocketIOInstance();
  ioInstance.emit(event, message);
};
