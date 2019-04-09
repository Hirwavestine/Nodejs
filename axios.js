const axios = require("axios");

let username = "Hirwavestine";
axios
  .get("https://api.github.com/users/" + username)
  .then(res => {
    console.log(res.data.updated_at);
  })
  .catch(err => {
    console.log(err);
  });
