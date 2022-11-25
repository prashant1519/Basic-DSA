// let arr=[1,2,3,5,6]

// for(var i=0;i<arr.length;i++){
//   if(arr[i]!==i+1){
//     console.log(i+1);
//     break;
//   }

// }
// console.log(arr);


let arr=[1,1,0,1,1,0,1,1]
let flag=false;
let count=0;

for(let i=0;i<arr.length;i++){
if(arr[i]==1 && flag==false){
  flag=true;
  count++
}
else{
  flag=false;
}


}
console.log(count);
