var n=5
var arr1=["a","b","c"]
var arr=["a","a","b","b","c"]

var count=0;
for(var i=0;i<arr1.length;i++){
 
for(var j=0;j<arr.length;j++){
    if(arr1[i]===arr[j]){
      count++;
      break;
    }
   
}
}
console.log(count);

if(count===arr1.length){
    console.log("yes")
}
else{
    console.log("no")
}