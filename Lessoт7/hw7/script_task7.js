class Cars{
    constructor(model,manufacturer,yearManufacture,maxSpeed,valueEngine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearManufacture = yearManufacture;
        this.maxSpeed = maxSpeed;
        this.valueEngine = valueEngine;
    }
    drive=function (){
        console.log( `їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    info=function (){
        console.log( `Модель автомобіля     -  ${this.model}
            Виробник              -  ${this.manufacturer}
            Рік випуску           -  ${this.yearManufacture} рік
            Максимальна швидкість - ${this.maxSpeed} км/год
            Об’єм двигуна         - ${this.valueEngine} л`)
    }
    increaseMaxSpeed =function (newSpeed){
        this.maxSpeed=this.maxSpeed+newSpeed;
    }
    changeYear =function (newValue){
        this.yearManufacture=newValue;
    }
    addDriver =function (...driver){
        this.driver=driver;
    }
}
let car=new Cars('bmv','BMW Group',2010,250,3);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(20);
car.changeYear(2020)
car.addDriver('vasia',1978,'B')
console.log(car);
//

