var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]

// second highest
// employees.sort((e1,e2)=>e2[2]-e1[2])
// console.log(employees[1][2]);



// minimum salary
//  employees.sort((e1,e2)=>e2[2]-e1[2])
//  console.log(employees[employees.length-1][2]);



//q8  no of employees
// console.log(employees.length);



// q9 print highest salary among developer
// var salary=0
// for(let employee of employees){
// if(employee[2]>salary && employee[3]=="developer"){
//     salary=employee[2]
// }   
// }
// console.log(salary);


// q11employees who working in the period of 2010 - 2015
// for( let employee of employees){
//     if(employee[4]>=2010 && employee[5]<=2015)
//     console.log(employee);
// }



// name starting with a
//  for(let employee of employees){
//  if(employee[1][0]=="a")
// console.log(employee);
// }



// highest salary
// var salary=0
// for(let employee of employees){
// if(employee[2]>salary){
//     salary=employee[2]
// }
// }console.log(salary);




// print employee details who is having exp>10
// for(let employee of employees){
// if(employee[5]-employee[4]>10){
//     console.log(employee);
// }
// }

// print experience 
// for(let employee of employees){
// console.log(employee[5]-employee[4]);



// print developers  details
// for(let employee of employees){
//     if(employee[3]=="developer"){
//         console.log(employee);
// }

//     }





// print employees name
// for(employee of employees){
//     console.log(employee[1]);
// }