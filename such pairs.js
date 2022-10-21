let arr=[3,4,0,2,7]
let k=2
let sum=0
let flag=-1

for(i=0;i<arr.length;i++){
    sum=0;
    for(j=i+1;j<arr.length;j++){

        sum+=arr[i]+arr[j]
        if(sum===k){
          flag=1;
          break;
        }
    }

}
console.log(flag)


