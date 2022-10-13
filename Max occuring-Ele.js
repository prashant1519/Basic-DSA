var arr=[5,6,7,8,5,5];
var obj={}
var max=-Infinity;
var bag="";
for(var i=0;i<arr.length;i++){
    // console.log(obj[str[i]])
    var char=arr[i]
    if(obj[char]==undefined){
obj[char]=1
    }
    else{
        obj[char]++
    }
   
}



for(var key in obj){
   if(obj[key]>max){
    max=obj[key]
     bag=key

}

}
console.log(bag);