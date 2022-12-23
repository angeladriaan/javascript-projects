/* Initial code

// Define the height and width of the grid

let height = 8;
let width = 8;


//Write n number of lines. The loop repeats the process until the desired height is achieved.

for (let size = 1; size <= height; size++) {
    if (size%2==0) {
        for (let line = "# "; line.length <= width; line += "# ")
    console.log(line);
    } else {
        for (let line = ""; line.length <= width; line += " #")
    console.log(line);
    }
} */

const height = 8;
const width = 8;

for (let size = 0; size < height; size++) {
    let output = "";
    for (let line = 0; line < width; line++) {
        if ((line+size)%2==0) {
            output += " ";
        } else {
            output += "#";
        }
    }
    console.log(output)
}