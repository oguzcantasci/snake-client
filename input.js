let connection;

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }

  if (data === 'w') {
    connection.write("Move: up");
  }
  if (data === 's') {
    connection.write("Move: down");
  }
  if (data === 'a') {
    connection.write("Move: left");
  }
  if (data === 'd') {
    connection.write("Move: right");
  }
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