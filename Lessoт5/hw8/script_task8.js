let listArray=[5,'text',true];


let listPrint=(list)=>{
    document.write(`<ul>`);
    for(const list_arr of list)
             {document.write(`<li>${list_arr}</li>`); }
    document.write(`</ul>`);
}
listPrint(listArray);
