let arr=[1,2,2,3,4,5]
let arr1=[4,4,3,2,1,1]
let n=arr.length-1;
let left=0;
let right=n-1;
let count=0;
while(left<n && right>=0){
    if(arr[left]===arr1[right]){
      count++
      left++
      right--
    }
    else if(arr[left]>arr1[right]){
         right--  
    }
    else{
        left++
    }
}
console.log(count)
