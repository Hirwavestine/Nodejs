const WS = new WebSocket("ws://localhost:3232");
//getting data from the form
document.forms[0].onsubmit = () => {
  let input = document.getElementById("message");
  console.log(input.value);
  //send data to our webserver using an instance WS
  WS.send(input.value);
};
