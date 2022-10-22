import { createReadStream, createWriteStream, readFile } from "fs";
import { resolve } from "path";
const writeStream = createWriteStream("output.txt");
const readStream = createReadStream(resolve(__dirname, "article.txt"), {
  // 1 = 1byte
  highWaterMark: 10,
});
readStream.on("readable", () => {
  try {
    writeStream.write(`${readStream.read()} \n`);
  } catch (err) {
    console.log(err);
    // catch the error when then chunk can't be read
  }
});

readStream.on("end", () => {
  readFile(resolve(__dirname, "output.txt"), "utf-8", (err, data) => {
    console.log(data);
  });
  console.log("done");
});
