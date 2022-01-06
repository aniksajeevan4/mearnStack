var text="hello hai hello hai"
var wc={}
var word=text.split(" ").map(word=>word in wc?wc[word]+=1:wc[word]=1)
console.log(wc);
// for(let wd of word){
//     if(wd in wc){
//         wc[wd]+=1
//     }
//     else{
//         wc[wd]=1
//     }
// }
// console.log(wc);
