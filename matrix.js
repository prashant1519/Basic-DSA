let arr=[
    [1,2,3,4],
    [0,5,6,1],
    [9,3,0,8]
]

let arr1=[
    [8,8],
    [8,8],
   
]
let sum=0;
let sum1=0;
for(let n=0;n<arr.length;n++){
    for(let m=0;m<=arr.length;m++){
        sum+=arr[n][m]
    }
}


for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr1.length;j++){
        sum1+=arr1[i][j]
        // console.log(sum1,arr1[i][j],arr1[i][j]);
    }
}

if(sum>sum1){
    console.log(sum);
}
else{
    console.log(sum1)
}
