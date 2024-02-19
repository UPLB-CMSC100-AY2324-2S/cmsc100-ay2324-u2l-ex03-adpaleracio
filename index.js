// Name: Arianne Mae D. Paleracio
// Student Number: 2022-03227
// Section: CMSC 100 U2L
// EXERCISE 3 - JAVASCRIPT


const pword1 = "helloworld";
const pword2 = "hello";

function validatePassword(pword1, pword2){
    if((pword1.length < 8 || pword2.length < 8) || (pword1.length != pword2.length)){     // if the length/s is/are less than 8 or lengths are unequal
        return false;
    }
    else{           // if lengths are equal
        for(let a = 0; a < pword1.length; a++){     // checks if the passwords match
            if(pword1[a] != pword2[a]){
                return false;
            }
        }
    }


}

console.log(validatePassword(pword1, pword2));