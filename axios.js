const axios = require("axios");

let username = "Edwin";
axios
  .get("https://api.github.com/users/" + username)
  .then(res => {
    console.log(res.data.followers);
  })
  .catch(err => {
    console.log(err);
  });
