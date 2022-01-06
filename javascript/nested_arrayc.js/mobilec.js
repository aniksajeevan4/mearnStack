var mobiles=[
    [1000,"samsung","samsung f41",15000,"snapdragon","AMOLED","4g"],
    [1001,"samsung","samsung A51",32000,"snapdragon","AMOLED","5G"],
    [1002,"redmi","not 10 pro",19000,"snapdragon","LED","4g"],
    [1003,"redmi","mi 11 lite ",30000,"mediatek","LED","4G"],
    [1004,"apple","12 pro",72000,"snapdragon","AMOLED","4g"],
    [1005,"apple","12 pro max",100000,"snapdragon","AMOLED","5G"],
    [1006,"one plus","nord 2",29000,"snapdragon","AMOLED","4g"],
    [1007,"one plus","nord 2",15000,"mediatek","LED","4G"],

    
]
// to find redmi mobile
var mob=mobiles.find(mob=>mob[1]=="redmi")
console.log(mob);



// is any mobile avilable in btw 10000-25000
// var avail=mobiles.some(mob=>mob[3]>=10000 && mob[3]<=25000)
// console.log(avail);


// low cost mobile
// var high=mobiles.reduce((h1,h2)=>h1[3]<h2[3]?h1:h2)[2]
// console.log(high);

// costly mobile
// var high=mobiles.reduce((h1,h2)=>h1[3]>h2[3]?h1:h2)[2]
// console.log(high);

// var mobprice=mobiles.filter(mob=> mob[1]=="samsung" && mob[6]=="4g" && mob[5]=="AMOLED").map(mob=>mob[2])
// console.log(mobprice);










// var mobile=mobiles.filter(mob=>mob[6]=="5G")
// console.log(mobile);


// var mobname=mobiles.map(mob=>mob[2])
// console.log(mobname);

// var mobprice=mobiles.map(mob=>mob[3])
// console.log(mobprice);

// var mobilname=mobiles.filter(mob=>mob[1]=="samsung")
// console.log(mobilname);

// var mobprice=mobiles.filter(mob=>mob[3]<25000).map(mob=>mob[2])
// console.log(mobprice);


    // var mobprice=mobiles.filter(mob=> mob[3]>25000 && mob[3]<30000).map(mob=>mob[2])
    // console.log(mobprice);


// var s=0
// for(let mobile of mobiles){
// mobile[0]=

// }

// for(let mobile of mobiles){
//     if(mobile[3]>10000){
// console.log("true");
// break
//     }
// else{
//     console.log("false");
// }
// }
// expensive phone
// mobiles.sort((m1,m2)=>m2[3]-m1[3])
// console.log(mobiles[0]);

// for( let mobile of mobiles){
//     if(mobile[4]=="snapdragon"){

// console.log(mobile[2]);
// }}
// var nw=[]
//  for( let mobile of mobiles){

//    if((mobile[4]=="snapdragon") && (mobile[6]=="5G")){
//        nw.push(mobile)
   
//     }
//  }
//  nw.sort((w1,w2)=>w2[3]-w1[3])
//  console.log(nw[0]);
