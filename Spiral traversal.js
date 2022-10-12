var arr=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]
var count=0;
var top=0;
var left=0;
var bottom=arr.length-1;
var right=arr.length-1;
var n=4;
var m=4;
while(count<n*m){
for(var i=top;i<=bottom && count<n*m;i++){
    console.log(arr[i][left])
    count++;
}
left++;
for(var i=left;i<=right && count<n*m;i++){
    console.log(arr[bottom][i])
    count++;
}
bottom--;
for(var i=bottom;i>=top && count<n*m;i--){
    console.log(arr[i][right])
    count++;
}
right--;
for(var i=right;i>=left && count<n*m;i--){
    console.log(arr[top][i])
    count++;
}
top++;
}