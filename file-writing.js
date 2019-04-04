const fs = require("fs");
fs.writeFile(
  "./modules/data.html",
  "Hello this file has just been created",
  "utf8",
  err => {
    if (err) return err;
    console.log("The file has been created");
  }
);
