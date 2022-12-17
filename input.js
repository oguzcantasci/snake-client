const {moveCommands, messages} = require('./constants');
let connection;

// helper function to be used as a callback to handle data inputs;
const handleUserInput = function(data) {
  if (data === '\u0003') { // exit the game if Ctrl + C is pressed
    process.exit();
  }
  //Moving commands
  if (moveCommands[data]) {
    connection.write(moveCommands[data]);
  }
  // Message inputs
  if (messages[data]) {
    connection.write(messages[data]);
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