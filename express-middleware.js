const express = require("express");

let app = express();

app.use("/css", express.static(__dirname + "/public"));

app.use((req, res, next) => {
  console.log("MIDDLEWARE");
  next();
});

app.get("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="/css/style.css" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello here</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
      voluptatibus aliquid unde commodi ipsum neque assumenda fuga repudiandae
      dolorem nobis, nesciunt iusto quae optio laudantium eaque saepe at ducimus
      molestiae.
    </p>
  </body>
</html>

  
  `);
});

app.listen(9999);

console.log(`It's working`);
