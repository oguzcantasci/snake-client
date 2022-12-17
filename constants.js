const IP = "localhost";
const PORT = 50541;
const messages = {
  j:"Say: Ez Pz",
  J:"Say: Ez Pz",
  i:"Say: Can't Beat Me",
  I:"Say: Can't Beat Me",
  k:"Say: Nokia Vibez",
  K:"Say: Nokia Vibez",
  l:"Say: Must Eat Pixels",
  L:"Say: Must Eat Pixels",
};

const moveCommands = {
  w: "Move: up",
  W: "Move: up",
  a: "Move: left",
  A: "Move: left",
  s: "Move: down",
  S: "Move: down",
  d: "Move: right",
  D: "Move: right",
};

module.exports = {
  IP,
  PORT,
  moveCommands,
  messages
};