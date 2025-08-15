const { readFileSync, readFile, writeFile, writeFileSync } = require("fs/promises");

try {
  let data1 = readFileSync("./file1.txt", "utf-8");
  let data2 =  readFileSync("./file2.txt", "utf-8");
 writeFileSync("./file3.txt", `${data1} ${data2}`);
} catch (err) {
  console.log("something was wrong");
}
