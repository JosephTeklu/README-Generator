const fs = require("fs");
const readline = require("readline");

// const text = fs.createReadStream("./questions.txt")

// const rl = readline.createInterface({
//     input: text,
// })
// rl.on("line",(lineText)=> {
//     console.log(lineText);
// })

const questions = [];

fs.readFile('./questions.txt', (err, data)=>{
    if (err) throw err;
    questions.push(data.split("/n"))
});
console.log("here");
for (let i = 0; i < questions.length; i++) {
    console.log(questions[i] + ":" + i);
    
}