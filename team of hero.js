let arr=[10,11,13,17,21]

let k=31
let ans="no";
for(let i=0;i<arr.length;i++){
    let sum=0
    for(let j=i+1;j<arr.length;j++){
       let curr=arr[j]
        sum=arr[i] +curr
        // console.log(sum)
        if(sum===k){
            ans="yes";
        break;
        }
        
    }

}
console.log(ans,i,j)
