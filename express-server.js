const express = require("express");
const port = process.env.PORT || 9999;
let app = express();
//create a route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to our app</h1>");
});
//create an other route api
app.get("/api", (req, res) => {
  res.send("<h1>API PAGE</h1>");
});

app.listen(port);
console.log("My app is running");
