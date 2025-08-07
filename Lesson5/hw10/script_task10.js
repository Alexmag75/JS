let mas=[2,5,4,6,1,8,4,5,9];
let min;
let minArray=(mas)=>{
     let min=mas[0];
    for(let number of mas) {
        if (min > number) {
            min = number;
        }
    }
    return min;
}
min=minArray(mas);
console.log(min);