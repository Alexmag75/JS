let Cars=function (model,manufacturer,yearManufacture,maxSpeed,valueEngine){
    this.model=model;
    this.manufacturer=manufacturer;
    this.yearManufacture=yearManufacture;
    this.maxSpeed=maxSpeed;
    this.valueEngine=valueEngine;

    this.drive=function (){
    console.log( `їдемо зі швидкістю ${maxSpeed} на годину`)
    }
    this.info=function (){
        console.log( `Модель автомобіля     -  ${model}
            Виробник              -  ${manufacturer}
            Рік випуску           -  ${yearManufacture} рік
            Максимальна швидкість - ${maxSpeed} км/год
            Об’єм двигуна         - ${valueEngine} л`)
    }
    this.increaseMaxSpeed =function (newSpeed){
        this.maxSpeed=this.maxSpeed+newSpeed;
    }
    this.changeYear =function (newValue){
        this.yearManufacture=newValue;
    }
    this.addDriver =function (...driver){
        this.driver=driver;
    }
}
let car=new Cars('bmv','BMW Group',2010,250,3)

console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(20);
console.log(car);
car.changeYear(2020)
car.addDriver('vasia',1978,'B')
console.log(car);


