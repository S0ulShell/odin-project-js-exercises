const reverseString = function(string) {
    
    let answer = '';
    let length = string.length;
    let counter = string.length;

    if(length > 0){
        for(let i = 0; i < counter; i++){
            answer = answer.concat(string.at(length -1 ));
            length = length - 1;
        }
    }else{
        return answer;
    }

    return answer;
};

// Do not edit below this line
module.exports = reverseString;
