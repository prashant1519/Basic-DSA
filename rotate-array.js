let arr=[1,2,3,4]
let left=0
let right=arr.length-1;
let k=7;
let t=k%arr.length

function rotate(arr,left,right){

    

    
            reverse(arr,left,right)
          
        
            swap(arr,0,t-1)

            swap(arr,t,arr.length-1)
        


    
}
rotate(arr,left,right)
console.log(arr,);



function reverse(arr,left,right){
    while(left<right){

        swap(arr,left,right)
        left++;
        right--;
    }
    
}

function swap(arr,left,right){
    let temp=arr[left]
    arr[left]=arr[right]
    arr[right]=temp

}





