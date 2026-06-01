const fs = require("fs");

// Extract file names passed as command-line arguments
let filesArr = process.argv.slice(2);

// Verify that all input files exist
for (let i = 0; i < filesArr.length; i++) {
  let doesExist = fs.existsSync(filesArr[i]);

  if (!doesExist) {
    console.log("File does not exist");
    return;
  }
}

// Read and concatenate contents of all files
let content = "";

for (let i = 0; i < filesArr.length; i++) {
  let fileContent = fs.readFileSync(filesArr[i]);
  content += fileContent + "\n";
}

console.log(content);
