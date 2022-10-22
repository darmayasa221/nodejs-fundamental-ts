import { readFile, readFileSync } from "fs";
import { stat } from "fs/promises";
import path from "path";
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
async function example() {
  try {
    const stats = await stat(path.resolve(__dirname, "todo.txt"));
    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats.isSymbolicLink());
    console.log(stats.size);
  } catch (err) {
    console.log(err);
  }
}
example();
