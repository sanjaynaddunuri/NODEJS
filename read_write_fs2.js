import  { readFile, writeFile }from "fs/promises";

try {
  let data1 = await  readFile("./file1.txt", "utf-8");
  let data2 = await  readFile("./file2.txt", "utf-8");
 await writeFileSync("./file3.txt", `${data1} ${data2}`);
} catch (err) {
  console.log("something was wrong");
}
