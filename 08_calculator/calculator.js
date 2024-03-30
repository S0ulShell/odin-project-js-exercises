const add = function(int1 , int2) {
	let answer = 0;
  answer = int1 + int2;
  return answer;
};

const subtract = function(int1, int2) {
	let answer = 0;
  answer = int1 - int2;
  return answer;
};

const sum = function(array) {
	let answer = 0;
  for(item in array){
    answer = answer + array[item];
  }
  return answer;
};

const multiply = function(array) {
  let answer;
  for(item in array){
    if(item == 0){
      answer = array[item];
      continue;
    }
    answer = answer * array[item];
  }
  return answer;
};

const power = function(int1, int2) {
	let answer = 0;
  answer = int1 ** int2;
  return answer;
};

const factorial = function(int) {
	let answer = 1;
  if(int === 1 || int === 0){
    return answer;
  }
  answer = int;
  for(int; int > 2; --int){
    answer =  answer * (int - 1)
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
