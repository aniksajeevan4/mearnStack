var pattern="ABCC"
var nw={}
var op=[]
pattern.split("").map(char=>char in nw? op.push(char):nw[char]=1)
console.log(op[0]);
// for(let ar of pattern){
// if(ar in nw){
//     console.log(ar);
//     break
// }
// else{
//    nw[ar]=1
// }
// }