var arr=[29,23,443,5,8,48]
var sheet=Infinity;

for(var i=0;i<arr.length;i++){
    if(arr[i]<sheet){
        sheet=arr[i]
    }
}
console.log(sheet)