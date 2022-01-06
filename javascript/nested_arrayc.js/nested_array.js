var students=[
    [1000,"akhil","mearnstack",145,"mca"],
    [1001,"anu","mearnstack",165,"bca"],
    [1002,"nikil","django",175,"bca"],
    [1003,"vjil","django",165,"mca"],
    [1004,"tim","testing",185,"bca"],
    [1005,"jhon","testing",155,"mca"],
]
var max=0
for(let student of students){
if(student[3]>max){
    max=student[3]
}
}console.log(max);





// details of students whose batch=django and mark>168
// for(let student of students){
//     if(student[2]=="django" && student[3]>168){
//         console.log(student);
//     }
// }

// to print fist array 
// console.log(students[0]);

// to priny all student names
// for(student of students){
//     console.log(student[1]);
// }

// to print details of mearnstack batches
// for(let student of students){
//     if(student[2]=="mearnstack"){
//         console.log(student);
//     }
// }


// to print details of students whose marks greater than 160
// for(let student of students){
//     if(student[3]>160)
//     console.log(student);
// }