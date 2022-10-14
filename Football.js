var arr=["A","B","A","B","A","B","B"]
var bag="";
var obj={};
var max=-Infinity;
for(var i=0;i<arr.length;i++){
    var str=arr[i]
    if(obj[str]==undefined){
     obj[str]=1;
    }
    else{
        obj[str]+=1
    }
}

for(var key in obj){
if(obj[key]>max){
    max=obj[key]
    bag=key
}
       
}
console.log(bag)