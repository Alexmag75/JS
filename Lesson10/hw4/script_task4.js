let coursesAndDurationArray = [

    {title: 'JavaScript Complex', monthDuration: 5},

    {title: 'Java Complex', monthDuration: 6},

    {title: 'Python Complex', monthDuration: 6},

    {title: 'QA Complex', monthDuration: 4},

    {title: 'FullStack', monthDuration: 7},

    {title: 'Frontend', monthDuration: 4}

];



for(const  course of coursesAndDurationArray) {

    const div=document.createElement('div');
    const h2=document.createElement('h2');
    const p=document.createElement('p');
    div.classList.add('item');
    div.classList.add('h2');
    div.classList.add('p');

    h2.innerText = course.title;
    p.innerText=course.monthDuration;
    div.append(h2,p);

    document.body.appendChild(div);



}

