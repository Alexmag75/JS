let itemNext=10;
let itemPrev=0;

const array100 = [];
for (let i = 0; i < 100; i++) {
    array100.push({
        id: i,
        name: `Object ${i + 1}`,
        value: Math.random().toFixed(4)
    })
}
const arrContainer = document.querySelector('.arr');


function printItem(item) {
    const arrContainer = document.querySelector('.arr');
    if (arrContainer) {
        arrContainer.innerHTML = "";
    }
    for (let i = item-10; i < item; i++) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        const itemData = array100[i];

        itemDiv.innerHTML = `
            <h3>${itemData.name}</h3>
            <h3>ID: ${itemData.id} | Value: ${itemData.value}</h3>
        `;
        arrContainer.appendChild(itemDiv);
    }
}

window.onload = function() {
        printItem(itemNext);
}
let buttonNext=document.getElementsByTagName('button')[0];
buttonNext.onclick = function() {
    console.log(itemNext);
    console.log(itemPrev);
    if (itemNext < 100) {
        let item = itemNext + 10;
        printItem(item);
    }
if(itemNext < 100) {itemNext=itemNext+10; itemPrev=itemNext-10}
}

let buttonPrev=document.getElementsByTagName('button')[1];
buttonPrev.onclick = function() {
    console.log(itemNext);
    console.log(itemPrev);

    if (itemPrev >=10) {
        let item = itemPrev;
        printItem(item);
    }
    if(itemPrev > 10) {itemPrev=itemPrev-10; itemNext=itemPrev+10}
}