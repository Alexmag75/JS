
const div=document.createElement("div");
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');

document.body.appendChild(div);

const clone=div.cloneNode(true);

document.body.appendChild(clone);