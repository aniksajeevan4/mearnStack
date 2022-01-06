var array=[1,2,3,5,9,4]
var flag=0
var element=11
var low=0,upp=array.length-1;
array.sort((n1,n2)=>n1-n2)
while(low<=upp){
    let mid=Math.floor((low+upp)/2)
    if(array[mid]==element){
        flag=1
        break
    }
    else if(element>array[mid]){
    low=mid+1
    }
    else if(element<array[mid]){

        upp=mid-1
    }

}
console.log(flag==0?"not found":"found");