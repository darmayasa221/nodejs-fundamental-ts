import { readFile, readFileSync } from "fs";
// readfilesync
// const data = readFileSync("todo.txt", "utf-8");

// readfileasync
readFile("todo.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
