
window.onload = function() {
    let Data = localStorage.getItem('sesia');
    let data = JSON.parse(Data);

    const outputContainer = document.createElement('div');
    document.body.appendChild(outputContainer);

    for (const DataSes of data) {
        const box = document.createElement("div");

        const dateObject = new Date(DataSes);
        box.innerText = dateObject.toLocaleString('ru-RU');

        outputContainer.appendChild(box);
    }
}