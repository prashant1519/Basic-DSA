var arr=[1,1,0,1,1,0,1,1]

var flag=false;
var count=0;
for(var i=0;i<arr.length;i++){
    if(arr[i]===1 && flag===false){
        flag=true;
        count++
    }
    else if(arr[i]===0){
        flag=false
    }
}
console.log(count);

