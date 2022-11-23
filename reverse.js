var arr=[12,34,11,9,18];
var left=0;
var right=arr.length-1;


function swap(arr,right,left){
    let temp=arr[right]
    arr[right]=arr[left]
    arr[left]=temp
}

while(left<right){
     swap(arr,left,right)
     left++;
     right--;
}
// console.log(arr)
