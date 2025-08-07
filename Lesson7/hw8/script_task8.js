let Cinderellas=function (name,age,footSize) {
    this.name=name;
    this.age=age;
    this.footSize=footSize;
}

class Princes {
    constructor(name,age,shoeSize) {
        this.name=name;
        this.age=age;
        this.shoeSize=shoeSize;
    }
}
let cinderella=[
    new Cinderellas('Olga',18,32),
    new Cinderellas('Tania',19,30),
    new Cinderellas('Sveta',18,31),
    new Cinderellas('Lida',20,36),
    new Cinderellas('Vika',18,31),
    new Cinderellas('Inga',17,32),
    new Cinderellas('Rima',22,33),
    new Cinderellas('Maria',21,29),
    new Cinderellas('Masha',21,31),
    new Cinderellas('Maia',18,35),
    ]

let prince = new Princes('Petia',25,30);
for (const element of cinderella) {
    if (element.footSize===prince.shoeSize) {
        console.log(element)
    }
}

let findCinderella=cinderella.find(value=>value.footSize===prince.shoeSize)
console.log(findCinderella);