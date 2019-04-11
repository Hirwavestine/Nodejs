const WS = new WebSocket("ws://localhost:3232");
//payload is everything tht you can think on when transmitting information online
//listening for anything coming from the server
WS.onmessage = payload => {
  console.log(payload.data);
};
WS.onopen = () => {
  displayTitle("CONNECTED TO SERVER");
};
WS.onclose = () => {
  console.log("CONNECTION IS CLOSE");
};
function displayTitle(title) {
  document.querySelector("h1").innerHTML = title;
}
//getting data from the form
document.forms[0].onsubmit = () => {
  let input = document.getElementById("message");
  console.log(input.value);
  //send data to our webserver using an instance WS
  WS.send(input.value);
};
