const sumAll = function(int1, int2) {
    
    let answer  = 0;
    let error = "ERROR";

    if ((int1 > 0 && int2 > 0) && (Number.isInteger(int1) && Number.isInteger(int2))){
        if(int1 > int2){
            for(int2; int2 <= int1; int2++ )
                answer = answer + int2;
        }else{
            for(int1; int1 <= int2; int1++ )
                answer = answer + int1;
        }
    }else{
        return error;
    } 

    return answer;
};

// Do not edit below this line
module.exports = sumAll;
