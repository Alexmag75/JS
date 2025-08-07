let text_='створити функцію, яка створює параграф з текстом та виводить його через document.write. ' +
    'Текст задати через аргумент';


let textPrint=(text)=>document.write(`<p>${text}</p>`);
textPrint(text_);
