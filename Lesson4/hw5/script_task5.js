let text_='створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент'


function text_print(text){
    document.write(`<p>${text}</p>`);
}
text_print(text_);
