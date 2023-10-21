var plusOne = function(digits) {
  let rem = 1;
  for(let i=digits.length-1; i>=0; i--) {
      let temp = (digits[i] + rem);
      digits[i] = temp % 10;
      rem = Math.floor(temp / 10);
  }
  return (rem==0) ? digits : [rem].concat(digits);
};



console.log(plusOne([6,1,4,5,3,9]))