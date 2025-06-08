let coursesAndDurationArray = [

    {title: 'JavaScript Complex', monthDuration: 5},

    {title: 'Java Complex', monthDuration: 6},

    {title: 'Python Complex', monthDuration: 6},

    {title: 'QA Complex', monthDuration: 4},

    {title: 'FullStack', monthDuration: 7},

    {title: 'Frontend', monthDuration: 4}

];
console.log(coursesAndDurationArray.sort((a,b) => a.monthDuration - b.monthDuration));
console.log(coursesAndDurationArray.filter(a => a.monthDuration > 5));
console.log(coursesAndDurationArray.map(function (value,index) {
    return {...value, id:index+1}
}));