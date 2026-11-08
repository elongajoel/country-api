import http from "node:http";
export default function startServer() {
const host= "localhost";
const port= 3000;
const server= http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!\n");
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
}