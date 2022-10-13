var arr=[3,2,23,4,5,82,7,8]
var sheet=-Infinity;


for(var i=0;i<arr.length;i++){
    if(arr[i]>sheet){
        sheet=arr[i]
    }
   
}
console.log(sheet)