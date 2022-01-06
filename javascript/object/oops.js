var baleno={
        name:"baleno",
        price:"8lak",
        varient:["blue","red"],
        manufacture:"nexa",
        getPrice() {
            return this.price
        }
    }
    var glanza={
        price:"9lak",
        manufacture:"toyota"
    }
    glanza.__proto__=baleno
    console.log(glanza.varient);
