require("dotenv").config({ debug: process.env.DEBUG });
const EventEmitter = require("node:events");
const eventEmitter = new EventEmitter();

eventEmitter.on("start", (start, end) => {
  console.log(`started from ${start} to ${end}`);
});
eventEmitter.emit("start", 1, 500);
console.log(process.env.DATABASE_URL);
console.log(process.env.API_KEY);
