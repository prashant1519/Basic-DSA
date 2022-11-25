var arr=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

var n=6
var day="Wednesday"
for(var i=0;i<arr.length;i++){
    if(arr[i]==day){
        var a=i+(n%7)
    }
 
}
console.log(arr[a])