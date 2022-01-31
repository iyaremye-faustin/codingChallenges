/**
 * Returns array of prime elements in the array
 * @param {*} numbers 
 * @returns 
 */
function getPrimes(numbers=[]){
  let numbersLen=numbers.length;
  let newNumbers=[];
  for(let i=0;i<numbersLen;i++){
     var elementTest=0;
    for(let j=1;j<=numbers[i];j++){
      if(numbers[i]%j==0){
        elementTest+=1;
      }else{
        elementTest+=0;
      }
    }
    if(elementTest==2){
      newNumbers[newNumbers.length]=numbers[i];
    }
  }
  return newNumbers;
}
/**
 * Testing if a string is palindrome or not
 * @param {*} testString 
 * @returns 
 */

function testPalindrome(testString){
  let varString=testString.toLowerCase();
  let strArray=varString.split('');
  let strReverse=strArray.reverse();
  let pal=varString==strReverse.join('')? "Palindrome":"Not palindrome";
  return pal;
}
/**
 * Reverse an array, no built in function is used
 * @param {*} arr 
 * @returns 
 */
function arrayReverse(arr=[]){
  let interArray=[];
  for(let i=(arr.length-1);i>=0;i--){
    interArray[interArray.length]=arr[i];
  }
  return interArray;
}
/**
 * 
 * @param {*} arr 
 * @returns 
 */
function arrayReverseRevise(arr=[]){
  arrLen=arr.length;
  for(let i=arrLen;i>=0;i--){
    arr[arrLen-i]=arr[i];
  }
  return arr;
}
/**
 * Sort any array(No built in function is used)
 * @param {*} arr 
 * @returns 
 */
function sortArray(arr=[]){
  let arrLen=arr.length;
  let min;let temp;let j;
  for(let i=0;i<arrLen;i++)
  {
    min=i;
    for(j=i+1;j<arrLen;j++){
      if(arr[j]<arr[i]){
        min=j;
        temp=arr[i];
        arr[i]=arr[min];
        arr[min]=temp;
      }
    }
  }
  return arr;
}
/**
 * Returns the longest sequence of zeros in a binary number(sequence of zeros between one's )
 * @param {*} decimalNumber 
 * @returns 
 */
const longestBinarySequence=(decimalNumber)=>{
  let intoBinary= decimalNumber.toString(2);
  let intoCharacterArray= String(intoBinary).split("");
  let intoIntegerArray= intoCharacterArray.map((value)=>{
    return Number(value);
  });
  if((intoIntegerArray.length==1) || (intoIntegerArray.length==2)){
    return 0;
  }
  let indexOfFirst= intoIntegerArray.indexOf(0);
  if(indexOfFirst==-1){
    return 0;
  }
  let longestLengths= [];
  let count = 0;
  for(let i=indexOfFirst; i<intoIntegerArray.length;i++){
    if(intoIntegerArray[i]==0){
      count = count+1;
    }
    if(intoIntegerArray[i+1]==1 && count>=1){
      longestLengths.push(count);
      count = 0;
    }
  }
  if(longestLengths.length>0){
    let longestLength = Math.max(...longestLengths);
    return longestLength;
  }
  return 0;
}
/**
 *Rotate array elements k times based on their positions 
 * @param {*} arrayValues 
 * @param {*} ktimes 
 * @returns 
 */
const arrayRotation=(arrayValues,ktimes)=>{
  let arrayLength=arrayValues.length;
  let rotatedArray=arrayValues;
  for (let k = 1; k <= ktimes; k++) {
    let arrayPart=rotatedArray.slice(0,arrayLength-1);
    let shiftLast=rotatedArray[arrayLength-1];
    for (let index = 1; index < rotatedArray.length; index++) {
      rotatedArray[index]=arrayPart[index-1];
    }
    rotatedArray[0]=shiftLast;
  }
  return rotatedArray;
}
