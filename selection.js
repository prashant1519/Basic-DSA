let arr=[3,5,0,9,8]
let left=0;
let right=arr.length-1

function swap(arr,right,left){
    let temp=arr[right]
    arr[right]=arr[left]
    arr[left]=temp

}


while(left<right)