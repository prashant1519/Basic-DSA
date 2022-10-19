// burte force

// var arr=[1,2,3,4,5]
// var k=8
// var fag="no";

// for(var i=0;i<arr.length;i++){
//     for(var j=i+1;j<arr.length;j++){
//         if(arr[j]-arr[i]===k){
//           fag="yes"
//         }
        

//     }
// }
// console.log(fag)


// time complexity
var arr=[1,2,3,4,5]
var left=0
var right=arr.length-1
var k=8;
var fag="no";
while(left<right){
    let diff=arr[right]-arr[left]
    if(diff===k){
      fag="yes"
    //   left++;
    //   right--;
    break;
    }
    else if(diff>k){
        left++
    }
    else{
        right--
    }
}
console.log(fag);