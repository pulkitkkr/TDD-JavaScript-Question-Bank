/*
Write a Function named findSum which takes two numbers and return it's sum
*/
function findSum(number1, number2) {
  //  Write your Code Here
  if( (isNaN(number1) || isNaN(number2)) ==true){
     return(null);
  }
  else if (number1 == null || number2==null) {
    return(null);
  }
  else{
    return(number1+number2);
  }
}
module.exports = findSum;
