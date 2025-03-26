#!/usr/bin/env node

const Runner = require("./runner");
const runner = new Runner();

//helper function for the use of async await

const run = async () => {
  //return files ist raus ---somit wird const results = nicht mehr benötigt da nix entgegen genomen wird
  await runner.collectFiles(process.cwd());
  runner.runTests();
};

run();
