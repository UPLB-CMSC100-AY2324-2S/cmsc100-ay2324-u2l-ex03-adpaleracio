// Name: Arianne Mae D. Paleracio
// Student Number: 2022-03227
// Section: CMSC 100 U2L
// EXERCISE 3 - JAVASCRIPT


const pword1 = "HELLO1234";
const pword2 = "HELLO1234";
const username = "Mingyu";

function validatePassword(pword1, pword2){
    if(pword1.length < 8 && pword2.length < 8){             // if length is < 8
        return false;                                       // "Insufficient Number of Strings!"
    }

    if(pword1.length != pword2.length){                     // if lengths are unequal
        return false;                                       // "Wrong Password!"
    }
    else{                                                   // if lengths are equal
        for(let a = 0; a < pword1.length; a++){             // checks if the passwords match
            if(pword1[a] != pword2[a]){
                return false;                               // "Wrong Password!"
            }
        }
    }

    // the following executes if the passwords are at least 8 characters long and they match

    var uppercase = 0;
    var lowercase = 0;
    var number = 0;

    for(let b = 0; b < pword1.length; b++){
        if((number == 0) && (pword1[b] === '0' || pword1[b] === '1' || pword1[b] === '2' || pword1[b] === '3' || pword1[b] === '4' || pword1[b] === '5' || pword1[b] === '6' || pword1[b] === '7' || pword1[b] === '8' || pword1[b] === '9')){
            number++;
        }
        else if((uppercase == 0) && (pword1[b] === 'A' || pword1[b] === 'B' || pword1[b] === 'C' || pword1[b] === 'D' || pword1[b] === 'E' || pword1[b] === 'F' || pword1[b] === 'G' || pword1[b] === 'H' || pword1[b] === 'I' || pword1[b] === 'J' || pword1[b] === 'K' || pword1[b] === 'L' || pword1[b] === 'M' || pword1[b] === 'N' || pword1[b] === 'O' || pword1[b] === 'P' || pword1[b] === 'Q' || pword1[b] === 'R' || pword1[b] === 'S' || pword1[b] === 'T' || pword1[b] === 'U' || pword1[b] === 'V' || pword1[b] === 'W' || pword1[b] === 'X' || pword1[b] === 'Y' || pword1[b] === 'Z')){
            uppercase++;
        }
        else if((lowercase == 0) && (pword1[b] === 'a' || pword1[b] === 'b' || pword1[b] === 'c' || pword1[b] === 'd' || pword1[b] === 'e' || pword1[b] === 'f' || pword1[b] === 'g' || pword1[b] === 'h' || pword1[b] === 'i' || pword1[b] === 'j' || pword1[b] === 'k' || pword1[b] === 'l' || pword1[b] === 'm' || pword1[b] === 'n' || pword1[b] === 'o' || pword1[b] === 'p' || pword1[b] === 'q' || pword1[b] === 'r' || pword1[b] === 's' || pword1[b] === 't' || pword1[b] === 'u' || pword1[b] === 'v' || pword1[b] === 'w' || pword1[b] === 'x' || pword1[b] === 'y' || pword1[b] === 'z')){
            lowercase++;
        }
    }

    if(uppercase == 1 && lowercase == 1 && number == 1){
        return true;            // valid password
    }
    else{
        return false;           // "Invalid Password!"
    }
}

console.log(validatePassword(pword1, pword2));