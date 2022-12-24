//Recursive program that checks if a number is even.

// Input: whole number
// Output: boolean value

function isEven (number) {
    if (number == 0) return "True";
    else if (number == 1) return "False";
    else {
        return(isEven(number - 2));
    }
}


//Input the number here.
console.log(isEven(75));