const removeFromArray = function(array, ...nums) {

    var i = 0;

    for(let value in nums){
        array = array.filter(a => a !== nums[value]);
        // while (i < array.length){
        //     if(array[i] === nums[value]){
        //         array.splice(i, 1);
        //         ++i;
        //     }else{
        //         ++i;
        //     }
        // } 
    }
    return array;
};


// Do not edit below this line
module.exports = removeFromArray;
