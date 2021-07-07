const fs = require("fs");

fs.rmdirSync("./newDir");
try {
  //remove a file
  fs.unlinkSync("./newDir/newFile.js");
} catch (err) {
  console.log(err + "here is the error");
}
