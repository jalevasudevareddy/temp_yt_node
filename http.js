const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to Home Page...VasudevaReddy jale !!!");
  } else if (req.url === "/about") {
    res.end("Welcome to the About Page...VasudevaReddy jale !!!");
  } else {
    res.end(
      "<h1>Oops! </h1><p>Page Not Found! <a href='/'>click here</a> to go back </p>"
    );
  }
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
