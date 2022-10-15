var arr1=[3,3,5]
var arr=[1,2,3,4,5,6]


for(var i=0;i<arr1.length;i++){
    for(var j=0;j<arr.length;j++){
       if(arr1[i]==arr[j]){
        console.log(arr[j])
       }
    }
}