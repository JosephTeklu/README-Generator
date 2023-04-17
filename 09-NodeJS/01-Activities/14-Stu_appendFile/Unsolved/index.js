// TODO: What are we importing?
// getting the fstream library to allow us to read/write to files
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
// append the file (log.txt) by adding the recent command line argument 
// throw an error if ther is trouble opening the file
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  // if there is an issure output the error if not output (Commit logged!)
  err ? console.error(err) : console.log('Commit logged!')
);
