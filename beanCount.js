// The function countBs takes a string and returns the number of "B"s in the string. 

//Input: a string
//Output: number os "B" instances

function countBs (text) {
    let letterCount = 0;
    for (let i = 0; i < (text.length - 1); i++) {   
        if (text[i] == "B") letterCount+=1;  
    }
    return letterCount;
}

console.log(countBs("Barbarian"));





// The function countChar takes a string and a character and prints the number of instances of the character on the string.

function countChar (text, character) {
    let letterCount = 0;
    for (let i = 0; i < (text.length - 1); i++) {
        if (text[i] == character) letterCount+=1;    
    }
    return letterCount;
}

console.log(countChar("Barbarian", "r"))
