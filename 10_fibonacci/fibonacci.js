const fibonacci = function(int) {
    
    let array = [1, 1];

    let index = parseInt(int);

    let counter = parseInt(int);

    if(counter < 0){
        return("OOPS");
    }
    if(counter == 0){ 
        return 0;
    }
    while(counter > 2){
        array.push((array[array.length -1]) + (array[array.length - 2]))
        --counter;
    }
    answer = array[index - 1];
    return answer;
};

// Do not edit below this line
module.exports = fibonacci;
