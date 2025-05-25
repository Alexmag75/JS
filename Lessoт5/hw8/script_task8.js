let list_array=[5,'text',true];


function list_print(list){

    document.write(`<ul>`);
    for(const list_arr of list)
             {document.write(`<li>${list_arr}</li>`); }
    document.write(`</ul>`);

}
list_print(list_array);
