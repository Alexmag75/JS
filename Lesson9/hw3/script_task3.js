let coursesAndDurationArray = [

    {title: 'JavaScript Complex', monthDuration: 5},

    {title: 'Java Complex', monthDuration: 6},

    {title: 'Python Complex', monthDuration: 6},

    {title: 'QA Complex', monthDuration: 4},

    {title: 'FullStack', monthDuration: 7},

    {title: 'Frontend', monthDuration: 4}

];



for(const  course of coursesAndDurationArray) {

    const box=document.createElement("div");
    document.body.appendChild(box);
    box.appendChild(document.createTextNode(course.title));
    box.appendChild(document.createTextNode(course.monthDuration));

}
// document.body.appendChild(menu);
//
// const li = document.createElement("li");
// li.innerText=arr[i];
// menu.appendChild(li);

