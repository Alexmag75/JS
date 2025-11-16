const table=document.getElementById('myTable');
const form=document.forms['myForm'];
form.onsubmit=function (event) {
    event.preventDefault();


    let numberLines=+form.numberLines.value;
    let numberCells=+form.numberCells.value;
    let textCells=form.textCells.value;

    for (let i = 0; i < numberLines; i++) {
        const tr = document.createElement('tr');

        for (let j = 0; j < numberCells; j++) {
            const td = document.createElement('td');
            td.textContent = textCells;
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
}





