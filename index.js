// Name: Arianne Mae D. Paleracio
// Student Number: 2022-03227
// Section: CMSC 100 U2L
// EXERCISE 3 - JAVASCRIPT


const password1 = "pass1";          // global variables
const password2 = "pass1";
const username = "John";

function validatePassword(password1, password2){
    if(password1.length < 8 || password2.length < 8){             // if one of the lengths is < 8
        return "Insufficient Number of Strings!";                 // prompt
    }

    if(password1.length != password2.length){                     // if lengths are unequal
        return "Wrong Password!";                                 // prompt
    }
    else{                                                         // if lengths are equal
        for(let a = 0; a < password1.length; a++){                // checks if the passwords match
            if(password1[a] != password2[a]){
                return "Wrong Password!";                         // prompt
            }
        }
    }

    // the following executes if the passwords are at least 8 characters long and they match

    var uppercase = 0;              // flags
    var lowercase = 0;
    var number = 0;

    for(let b = 0; b < password1.length; b++){
        if((number == 0) && (password1[b] === '0' || password1[b] === '1' || password1[b] === '2' || password1[b] === '3' || password1[b] === '4' || password1[b] === '5' || password1[b] === '6' || password1[b] === '7' || password1[b] === '8' || password1[b] === '9')){                                  // if there is a number
            number++;
        }
        else if((uppercase == 0) && (password1[b] === 'A' || password1[b] === 'B' || password1[b] === 'C' || password1[b] === 'D' || password1[b] === 'E' || password1[b] === 'F' || password1[b] === 'G' || password1[b] === 'H' || password1[b] === 'I' || password1[b] === 'J' || password1[b] === 'K' || password1[b] === 'L' || password1[b] === 'M' || password1[b] === 'N' || password1[b] === 'O' || password1[b] === 'P' || password1[b] === 'Q' || password1[b] === 'R' || password1[b] === 'S' || password1[b] === 'T' || password1[b] === 'U' || password1[b] === 'V' || password1[b] === 'W' || password1[b] === 'X' || password1[b] === 'Y' || password1[b] === 'Z')){          // if there is an uppercase letter
            uppercase++;
        }
        else if((lowercase == 0) && (password1[b] === 'a' || password1[b] === 'b' || password1[b] === 'c' || password1[b] === 'd' || password1[b] === 'e' || password1[b] === 'f' || password1[b] === 'g' || password1[b] === 'h' || password1[b] === 'i' || password1[b] === 'j' || password1[b] === 'k' || password1[b] === 'l' || password1[b] === 'm' || password1[b] === 'n' || password1[b] === 'o' || password1[b] === 'p' || password1[b] === 'q' || password1[b] === 'r' || password1[b] === 's' || password1[b] === 't' || password1[b] === 'u' || password1[b] === 'v' || password1[b] === 'w' || password1[b] === 'x' || password1[b] === 'y' || password1[b] === 'z')){          // if there is a lowercase letter
            lowercase++;
        }
    }

    if(uppercase == 1 && lowercase == 1 && number == 1){        // if there is a number, uppercase letter, and lowercase letter
        return true;                          // valid password
    }
    else{
        return "Invalid Password!";           // prompt
    }
}

function reversePassword(password1, password2){
    var validate = validatePassword(password1, password2);          // calls validatePassword
    if(validate === true){                                          // if validatePassword returned true
        var newpass = password1[(password1.length)-1];              // puts the last letter from password1 in newpass
        for(let c = (password1.length)-2; c >= 0; c--){             // iterates from the second last letter to the first letter
            newpass = newpass + password1[c];                       // concatenates each letter to newpass
        }
        return newpass;         // returns the reversed password
    }
    else{                       // if validatePassword did not return true
        return validate;        // returns the error prompt from validatePassword
    }
}

function storePassword(username, password1, password2){
    var reverse = reversePassword(password1, password2);            // calls storePassword
    if(reverse != 'Insufficient Number of Strings!' && reverse != 'Wrong Password!' && reverse != 'Invalid Password!'){         // if the returned value is not one of the error prompts
        const user_info = {name: username, newpassword: reverse}            // user object
        return user_info;                                                   // returns the object
    }
    else{                       // if the returned value is an error prompt
        return reverse;         // returns the error prompt
    }
}


console.log(storePassword(username, password1, password2))          // calls storePassword