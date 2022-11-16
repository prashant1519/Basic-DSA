// var arr=[3,4,7,6,7,2,2]
var arr=[3,4,2,6,7,4,2,9,2]
var n=7;
var k=6;
var count=0;
var skip=0;
for(var i=0;i<arr.length;i++){
    if(arr[i]<=6){
        count++
    
        }
    if(arr[i]>6){
        skip++;
        if(skip==2){
            break;
        }
    }
    
}
console.log(count)
// console.log(count)