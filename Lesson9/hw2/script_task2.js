let arr=['Main','Products','About us','Contacts'];

const menu=document.createElement("ul");

for(let i=0;i<arr.length;i++){
    const li = document.createElement("li");
    li.innerText=arr[i];
    menu.appendChild(li);
}
document.body.appendChild(menu);



