class Parent{
    bike(){
        console.log("passion pro");
    }
}

class Child extends Parent{
    bike(){
        super.bike() //for calling parents bike in childs object
        console.log("royal enfield");
    }

}
var ch=new Child
ch.bike()