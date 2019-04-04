const fs = require("fs");
//rename a file
fs.renameSync("./newfile2.js", "newDir/newfile.js");
//rename or move directory
fs.renameSync("./newDir/childDir", "./parentDir");
