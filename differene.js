// burte force
var arr=[1,2,3,4,5]
var k=8
var fag="no";

for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        if(arr[j]-arr[i]===k){
          fag="yes"
        }
        

    }
}
console.log(fag)