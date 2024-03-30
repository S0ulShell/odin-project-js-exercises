const palindromes = function (string) {
    let answer= "";
    let simple = string.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    let counter = simple.length;

    while(counter > 0){
        answer = answer.concat(simple[counter - 1])
        --counter;
    }
    if (answer === simple){
        return true;
    }
    return false;
};

// Do not edit below this line

module.exports = palindromes;
