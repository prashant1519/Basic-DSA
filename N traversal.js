var arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

for(var i=arr.length-1;i>=0;i--){
    console.log(arr[i][0])
}
for(var i=1;i<arr.length-1;i++){
 console.log(arr[i][i])   
}
for(var i=arr.length-1;i>=0;i--){
    console.log(arr[i][arr.length-1])
}