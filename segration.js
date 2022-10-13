var arr=[1,2,3,4,5,6,7,8,9,10]
//  var q=1;
 var q=2;
var bag="";
var bag1=""
if(q==1){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            bag+=" " +arr[i]
        }
    }
    
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            bag1+=" " +arr[i]
        }
    }
    
    console.log(bag + bag1)
    
}

else if(q==2){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            bag+=" " +arr[i]
        }
    }
    
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            bag1+=" " +arr[i]
        }
    }
    
    console.log(bag1 + bag)
    
}
