
// var arr=[3,4,2,6,7,4,2,9,2]
// var n=7;
// var k=6;
// var count=0;
// var skip=0;
// for(var i=0;i<arr.length;i++){
//     if(arr[i]<=6){
//         count++
    
//         }
//     if(arr[i]>6){
//         skip++;
//         if(skip==2){
//             break;
//         }
//     }
    
// }
// console.log(count)
// // console.log(count)


var arr=[2,1,1,1,1,2,2,3,3,3,3,3,3,3,3,3,3,3]
let max= -Infinity

for(let i=0;i<arr.length;i++){
    let count=1
    for(let j=i+1;j<arr.length;j++){
       if(arr[i]===arr[j]){
        count++
       }
    }
    if(count>max){
        max=count;
        count=0
    }
}

console.log(max)