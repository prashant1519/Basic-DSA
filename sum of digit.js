let arr=[12,14,16,17,29]
let oo=arr.toString();

let sum=0;
for(var i=0;i<oo.length;i++){
if(oo[i]==","){
    continue;
}
else{
sum+= +oo[i];
}

    
}

console.log(sum)  
