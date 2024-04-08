const findTheOldest = function (array) {
    let index = 0;
    let age = 0;
    let oldest = 0;
    const currYear = 2024;


    for (let i = 0; i < array.length; i++) {
        if ('yearOfDeath' in array[i]) {
            age = array[i].yearOfDeath - array[i].yearOfBirth
            if (age > oldest) {
                oldest = age;
                index = i;
            }
        }else{
            age = currYear - array[i].yearOfBirth
            if (age > oldest) {
                oldest = age;
                index = i;
            }
        }

    }
    return array[index];
};

// Do not edit below this line

module.exports = findTheOldest;
