let fs = require("fs")
let result = fs.readFileSync("./flower.txt").toString()
var line = result.split('\n');

console.log("Number of rows")
console.log(line.length)

console.log("\nFlowers that starts with S")
let s_counter = 0
for (let index = 0; index < line.length; index++) {
    if (line[index].charAt(0) == "S" || line[index].charAt(0) == "s") {
        console.log(line[index])
        s_counter++

    }
}

console.log("\nNumber of flowers that doesn't start with S")
console.log((line.length) - (s_counter))

console.log("\nFlowers that starts with F")
let f_counter = 0
for (let index = 0; index < line.length; index++) {
    if (line[index].charAt(0) == "F" || line[index].charAt(0) == "f") {
        console.log(line[index])
        f_counter++
    }
}

console.log("\nFlowers that carry a name of 5 chars")
for (let index = 0; index < line.length; index++) {
    if (line[index].length == 5) {
        console.log(line[index])
    }
}