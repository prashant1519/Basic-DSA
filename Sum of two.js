var arr=[7,4,9,6,21,8,11,17]
var k=16
var yoo=false;;
for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==k){
            yoo=true
            break;
          
        }
 
    }
}
console.log(yoo)