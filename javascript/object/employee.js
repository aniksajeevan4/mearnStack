var employee={
    eid:1000,
    ename:"anik",
    salary:50000,
    desig:"s/w engineer",
    exp:2,
}
// console.log(employee.ename);

// adding key
// employee.experience=2
// console.log(employee);

// checking key
// console.log("gender" in employee);    


if("exp" in employee){
    employee.exp+=1
}
else{
    employee.exp=2}
    console.log(employee);