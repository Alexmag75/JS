let arr=[20,10,50,40,30];

function sortNums(array,direction){
    if(direction==='ascending'){
        array=array.sort((a,b)=>{return a-b;});
    }
    if(direction==='descending'){
        array=array.sort((a,b)=>{return b-a;});
    }
    return array;
}

console.log(sortNums(arr,'ascending'));

console.log(sortNums(arr,'descending'));