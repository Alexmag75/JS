let users=[
    { id:1,name: 'Juan', age: 22, status:true},
    { id:2,name: 'Vania', age: 24, status:false},
    { id:3,name: 'Juana', age: 24, status:true},
    { id:4,name: 'Ylia', age: 24, status:false},
    { id:5,name: 'Alex', age: 29,status:false},
    { id:6,name: 'Jonn', age: 28,status:true},
    { id:7,name: 'Sem', age: 22,status:false},
    { id:8,name: 'Vasia', age: 33,status:true},
    { id:9,name: 'Olga', age: 22,status:true},
    { id:10,name:'Inna', age: 25,status:false}
]
Array.prototype.Filter=function (condition) {
    const mas=[];
    for (const element of this) {
        if (condition(element)) {
            mas.push(element);
            console.log(element);
        }
    }
    return mas;
};
const resUsers = users.Filter((user) => user.age>24);

console.log(resUsers);
