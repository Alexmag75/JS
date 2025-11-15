
function addToLocalStorage(arrayName,objToAdd){
    const key=localStorage.getItem(arrayName);
    if(!key){
        alert('Массива не существует');
    }
    else{
        const Jarr=JSON.parse(key);
        Jarr.push(objToAdd);
        localStorage.setItem(arrayName, JSON.stringify(Jarr));
    }
}
addToLocalStorage('num',{});