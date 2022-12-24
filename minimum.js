// Compare two numbers
// Print the smallest number

/* Brainstorming
We need:
- Take two arguments
- Compare
- Print the smallest

We could use:
- the || operator (we would need to define a binding)
- conditional execution (best option)

*/

function minimum(n1, n2) {
    if (n1 == n2) {
        return "Values are equal."
    } else if (n1 > n2) {
        return n2;
    } else {
        return n1;
    }
}

// The program prints the smallest number from two inputs.

console.log(minimum(0,-10));