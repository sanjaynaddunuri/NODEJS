const cp = require("child_process");

cp.execFile(__dirname + "/demo.bat", (error, stdout, stderr) => {
  if (error) {
    throw error;
  } else {
    console.log(stdout);
  }
});
