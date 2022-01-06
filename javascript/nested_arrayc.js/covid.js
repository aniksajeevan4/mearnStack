var covid_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,150,24000,9,5],
    [5,"ernamkulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"iduky",1000,50,9500,9,6]   
]


// q1 higest test + ve case district
// var pos=covid_data.reduce((d1,d2)=>d1[2]>d2[2]?d1:d2)
// console.log(pos);

// q2 district with higest 1 dose vaccination rate
// var pos=covid_data.reduce((d1,d2)=>d1[5]>d2[5]?d1:d2)[5]
// var positive=covid_data.filter(h=>h[5]==pos)
// console.log(positive);

// q3 district with lowest death cases
// var lowest=covid_data.reduce((d1,d2)=>d1[4]<d2[4]?d1:d2)
// console.log(lowest); 

// q4 sort district with +ve cases
// var district=covid_data.sort((d1,d2)=>d2[2]-d1[2])
// console.log(district);

// q5 sort the districts based on 1st dose
//  var positive=covid_data.sort((d1,d2)=>d2[5]-d1[5]).map(d1=>d1[1])
//  console.log(positive);


// q6 is there any states with +ve cases > 60000
// var positive=covid_data.some(p=>p[2]>60000)
// console.log(positive);

// q7 print trissur details
// var district=covid_data.find(d=>d[1]=="thrissur")
// console.log(district);


// q8 total nu,ber of +ve cases
// var positive=covid_data.map(d1=>d1[2]).reduce((d1,d2)=>d1+d2)
// console.log(positive);

// q9 total number of cured cases
// var cured=covid_data.map(d1=>d1[4]).reduce((d1,d2)=>d1+d2)
// console.log(cured);

// q10 cured numbers of iduky
// var iduki=covid_data.find(d=>d[1]=="iduky")[4]
// console.log(iduki);

// q11 total number of death cases
// var death=covid_data.map(d1=>d1[3]).reduce((d1,d2)=>d1+d2)
// console.log(death)