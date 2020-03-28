var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"] ;

function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars];
}
 
function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString){
  chocolateBars.unshift(candyString);
  return chocolateBars;
}
 function addElementToEndOfArray(chocolateBars, candyString){
  return [...chocolateBars, candyString];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
}