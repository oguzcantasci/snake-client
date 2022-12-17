let connection;
let intervalId;
let lastCommand;

// helper function to be used as a callback to handle key inputs;
const handleUserInput = function(data) {
  
  
  if (data === '\u0003') { // exit the game if Ctrl + C is pressed
    process.exit();
  }
  //Moving commands
  if ((data === 'w' || data === "W") && lastCommand !== 'Move: down') {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      connection.write("Move: up");
    }, 50);
    lastCommand = "Move: up";
  }
  if (data === 's' && lastCommand !== "Move: up") {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      connection.write("Move: down");
    }, 50);
    lastCommand = "Move: down";
  }
  if (data === 'a' && lastCommand !== "Move: right") {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      connection.write("Move: left");
    },50);
    lastCommand = "Move: left";
  }
  if (data === 'd' && lastCommand !== "Move: left") {
    clearInterval(intervalId);

    intervalId = setInterval(() => {
      connection.write("Move: right");
    }, 50);
    lastCommand = "Move: right";
  }
  // Message inputs
  if (data === 'j') {
    connection.write("Say: Ez Pz");
  }
  if (data === 'i') {
    connection.write("Say: Can't Beat Me");
  }
  if (data === 'k') {
    connection.write("Say: Nokia Vibez");
  }
  if (data === 'l') {
    connection.write("Say: Must Eat Pixels");
  }


};

// setupInput() function to creata an input interface
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;