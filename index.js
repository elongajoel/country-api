import startServer from "./server.js";

const start = async () => {
  try {
    startServer(); 
    } catch (error) {
    console.error("Error starting the server:", error);
  }
};

start();