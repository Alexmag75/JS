


    let currentNum=+localStorage.getItem('num')
    currentNum=currentNum+1;
    localStorage.setItem('num',currentNum);
    document.getElementsByClassName('num')[0].innerText=currentNum;
