let mas=[2,5,4,6,1,8,4,5,9];

function swap(mas,index1,index2){
    let r;
     r=mas[index1];
     mas[index1]=mas[index2];
     mas[index2]=r;
}
swap(mas,1,5);
for (const number of mas) {
    console.log(number);
}
