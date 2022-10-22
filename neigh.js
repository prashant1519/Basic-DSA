let arr=[ 2,1,3,4,3,5,1,2,6]
let count=0;
for(let i=1;i<arr.length-1;i++){
 if(arr[i-1]>arr[i] && arr[i]<arr[i+1]) count++
}
console.log(count);