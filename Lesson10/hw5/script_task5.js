
    let sesia=[];
    if(localStorage.getItem('sesia')) {
        sesia=JSON.parse(localStorage.getItem('sesia'));
    }
     sesia.push(new Date());

    localStorage.setItem('sesia', JSON.stringify(sesia));
