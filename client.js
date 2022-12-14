const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", async(data) => {
    console.log(data);
  });

  conn.on('connect', () => {
    console.log(`Connected`);
  });



  return conn;
};

module.exports = connect;