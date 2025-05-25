let mas=[2,5,4,6,1,8,4,5,9];

function sum_mas(mas){
    let sum=0;
     for(let number of mas) {
        sum=sum+number;
    }
    return sum;
}
console.log(sum_mas(mas));