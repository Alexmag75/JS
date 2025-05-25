let list='Список';
let n=10;


let listPrint=(list,n)=>{

    document.write(`<ul>`);
    for(let i=0;i<n;i++){document.write(`<li>${list}</li>`); }
    document.write(`</ul>`);

}
listPrint(list,n);
