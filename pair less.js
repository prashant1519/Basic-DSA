// var arr=[1,2,3,4,5]
var arr=[30,20,10]
var k=25
var left=0;
var right=arr.length-1;
var flag=-1;

while(left<right){
    var sum=arr[left]+arr[right];
if(sum<k){
    flag=sum
left++;
}
else{
    right--
}
}
console.log(flag);