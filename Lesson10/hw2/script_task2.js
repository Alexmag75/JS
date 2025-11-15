
const btn=document.getElementsByTagName('button')[0];
btn.onclick = function(){
    const age=document.getElementById('age');
    if(age.value<18) {
        alert('Ваш возраст не подходит для данного контента')
    }
}


