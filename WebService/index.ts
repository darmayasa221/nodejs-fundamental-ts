import { createServer, RequestListener } from "http";

const requestListener: RequestListener = (request, response) => {
  response.setHeader("Content-Type", "text/html; charset=UTF-8");
  if (request.url === "/") {
    if (request.method === "GET") {
      response.statusCode = 200;
      response.end(`<h1>method type:${request.method}</h1>`);
    }
    if (request.method === "POST") {
      const body: Array<Buffer> = [];
      response.statusCode = 201;
      request.on("data", (chunk) => {
        body.push(chunk);
      });
      request.on("end", () => {
        const { name } = JSON.parse(Buffer.concat(body).toString());
        response.end(`<h1>your name : ${name}</h1> \n`);
      });
    }
  } else {
    response.statusCode = 404;
    response.end("not found");
  }
};
const server = createServer(requestListener);
server.listen(3000, "localhost", () => {
  console.log("server runing");
});
