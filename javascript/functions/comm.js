var arr1 = [1, 2, 3,4]
var arr2 = [2,4]
let a1=0,a2=0
while(a1<arr1.length && a2<arr2.length){
    if(arr1[a1]==arr2[a2]){
        console.log(arr1[a1]);
        a1++
        a2++
    }
    else if(arr1[a1]>arr2[a2]){
        a2++
    }
    else if(arr1[a1]<arr2[a2]){
        a1++
    }
}






// var count=0,flag=0
// for (let i of arr1) {
//     for (j of arr2) {
//         if (i == j) {
//             console.log(i);
//             flag=1
//             break
//         }
//     }
 
//     }
// if(flag==1){
 
// }
// else{
//     console.log("no common number");
// }
