'use strict';

// 1) ---------------------
// 
//  using the (findMax) function; return the maximum value in the provided array
//  without using build-in functions.
//  EX:
//  [12, 32, 22, 45, 78, 12, 50] ==> 78
//  
// ------------------------

const findMax = (arr)=>{
    let max;
    // write your code here
    max=arr[0];
    for(let i=1;i<arr.length;i++){if(arr[i]>max){max=arr[i];}}
    return max;
}

// 2) ---------------------
// 
//  using the (sumNums) function; return the Sum value of the numeric values
//  inside the array (there could be strings inside), without using build-in functions
//  EX:
//  [20, '234', 'car', 41, 20, 'chair'] ==> 81
//  
// ------------------------

const sumNums = (arr)=>{
    let sum=0;
    let typyevar="";
    // write your code here
    for(let i=0;i<arr.length;i++){
         typyevar=typeof(arr[i]);
        if(typyevar=="number"){
        sum=arr[i]+sum;
        }
    }
    console.log(sum);
    return sum;
}

// 3) ---------------------
// 
//  using the (reverseArray) function; return provided array reversed
//  without using build-in functions
//  EX:
//  ['C#', 'JS', 'Ruby','Python' ] ==> ['Python','Ruby','JS','C#']
// 
// ------------------------
const reverseArray = (arr)=>{
    // write your code here
    let arr2=[];
    for(let i=arr.length-1 , j=0; i>=0 ;i--, j++){
      arr2[j]=arr[i];
    }
    return arr2;

}

module.exports = {findMax , sumNums, reverseArray};