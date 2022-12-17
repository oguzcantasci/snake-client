const net = require("net");
const prompt = require("prompt-sync")({ sigint: true });
const { IP, PORT } = require("./constants");

// Prompt to ask the user for their name
const name = prompt("Enter your name:  ");
console.log(`Name set to ${name}.`);

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", async(data) => {
    console.log(data);
  });
  // Log a successfull connection message and send the name to the server
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write(`Name: ${name}`);
  });
  return conn;
};

module.exports = connect;