console.log(process.argv)

// // // when accessing command line arguments start at index 2, index 0&1 are file paths 
var arg1 = process.argv[2];
var arg2 = process.argv[3];

// check if the command line arguments are the same or not
if(arg1 === arg2){console.log("the given arguments are the same"); return true;}
// else output this
console.log("the given arguments are not the same");
return false;


