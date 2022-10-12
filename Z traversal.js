arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

for(var i=0;i<arr.length;i++){
    console.log(arr[0][i])
}
for(var i=1;i<arr.length-1;i++){
    console.log(arr[i][i])
}
for(var i=0;i<arr.length;i++){
    console.log(arr[arr.length-1][i])
}