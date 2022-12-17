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
  w:  {command: "Move: up", cancel: 1},
  W:  {command: "Move: up", cancel: 1},
  a:  {command: "Move: left", cancel: 2},
  A:  {command: "Move: left", cancel: 2},
  s:  {command: "Move: down", cancel: 1},
  S:  {command: "Move: down", cancel: 1},
  d:  {command: "Move: right", cancel: 2},
  D:  {command: "Move: right", cancel: 2},
};

module.exports = {
  IP,
  PORT,
  moveCommands,
  messages
};