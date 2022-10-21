let arr=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

let sum=0;
let left=0;
let right=arr.length-1;
let top=0;
let bottom=arr.length-1;
for(let i=0;i<arr.length;i++){

    for(let j=0;i<arr.length;j++){
        if(arr[i][left]){
            continue;
        }
        if(arr[top][i]){
            continue
        }
        if(arr[bottom][i]){
            continue
        }
        if(arr[i][right]){
            continue
        }
        else{
            sum+=arr[i][j]
        }
        
    }
}
console.log(sum)