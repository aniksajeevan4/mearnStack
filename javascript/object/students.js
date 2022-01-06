class Student{

    constructor(name,gender,age){
    this.name=name;
    this.gender=gender;
    this.age=age
}
printStudent(){
    console.log(this.name,this.gender,this.age);
}
}
var stud1=new Student("anik","male",21)
stud1.printStudent()

var stud2=new Student("shifas","male",21)
stud2.printStudent()

