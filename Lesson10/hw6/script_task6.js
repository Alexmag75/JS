
let result;

window.onload = function() {
    let boxCalc = document.createElement('div');
    boxCalc.className = 'box';
    let h2 = document.createElement('h2');
    h2.innerText = 'Введите массу тела в килограммах';

    let input = document.createElement('input');
    input.className = 'Rez-input';

    result = document.createElement('p');
    result.className = 'p';

    input.addEventListener('input', Konvertor);

    boxCalc.append(h2, input, result);
    document.body.appendChild(boxCalc);
}

function Konvertor() {

    const input = document.querySelector('.Rez-input');
    const kilograms = +input.value;
    const pounds = kilograms * 2.20462;
    result.innerText = `Масса тела в фунтах = ${pounds}`;
}