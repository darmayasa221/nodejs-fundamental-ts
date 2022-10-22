import EventEmitter from "events";

const eventEmitter = new EventEmitter();
eventEmitter.on("make-coffe", () => {
  setTimeout(() => {
    console.log("coffe ready");
  });
  console.log("making coffe");
});

eventEmitter.emit("make-coffe");
