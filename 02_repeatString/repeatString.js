const repeatString = function(string, num) {
    let answer = '';
    if(num == 0){
        return answer;
    }else if( num < 0){
        answer = 'ERROR';
        return answer;
    }else if(num > 0){
        answer = string;
        answer = answer.repeat(num);
        return answer;
    }
};

// Do not edit below this line
module.exports = repeatString;
