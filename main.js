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

function testPalindrome(testString){
  let varString=testString.toLowerCase();
  let strArray=varString.split('');
  let strReverse=strArray.reverse();
  let pal=varString==strReverse.join('')? "Palindrome":"Not palindrome";
  return pal;
}
function arrayReverse(arr=[]){
  let interArray=[];
  for(let i=(arr.length-1);i>=0;i--){
    interArray[interArray.length]=arr[i];
  }
  return interArray;
}

function arrayReverseRevise(arr=[]){
  arrLen=arr.length;
  for(let i=arrLen;i>=0;i--){
    arr[arrLen-i]=arr[i];
  }
  return arr;
}
sortArray([3,4,11,60,9,7,8]);
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

//Time complexity and object manipulation(later)
