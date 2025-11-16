
if (localStorage.getItem('isInitialized') === null) {
    localStorage.setItem('num', 100);
    localStorage.setItem('isInitialized', 'true');

    localStorage.setItem('lastUpdatedTime', Date.now());
}

window.onload = function() {

    let currentNum = +localStorage.getItem('num');
    let lastUpdatedTime = +localStorage.getItem('lastUpdatedTime');
    let currentTime = Date.now();


    if (currentTime - lastUpdatedTime >= 10000) {


        if (currentNum > 100 || localStorage.getItem('isRefreshed') === 'true') {


            currentNum = currentNum + 10;
            localStorage.setItem('num', currentNum);


            localStorage.setItem('lastUpdatedTime', currentTime);
        }

        localStorage.setItem('isRefreshed', 'true');

    }

       document.getElementsByClassName('num')[0].innerText = currentNum;
}