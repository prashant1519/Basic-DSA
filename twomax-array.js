let arr=[1,8,7,3,5]
let k=2
function takemax(arr,k){
    sum=0;
    max=-Infinity
    for(let i=0;i<k;i++){
        sum+=arr[i]
    }

    if(sum>max){
        max=sum
    }

    for(let i=k;i<arr.length;i++){
        sum+=arr[i]
        sum-=arr[i-k]
        if(sum>max){
            max=sum
        }
    }
    return sum
} 

takemax(arr,k)
console.log(sum);
// console.log(sum);