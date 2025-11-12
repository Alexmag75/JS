
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


for(const courses of coursesArray){
const wrapper=document.createElement("div");
wrapper.classList.add('wrapper');
     const title=document.createElement('h2');
     title.classList.add('title');
    title.innerText = courses.title;
     wrapper.appendChild(title);

     const box=document.createElement('div');
     box.classList.add('box');
     wrapper.appendChild(box);

          const monthDuration=document.createElement('div');
          monthDuration.classList.add('monthDuration');
          monthDuration.innerText = `Месяцев: ${courses.monthDuration}`;
          box.appendChild(monthDuration);

          const hourDuration=document.createElement('div');
          hourDuration.classList.add('hourDuration');
          hourDuration.innerText = `Часов: ${courses.hourDuration}`;
          box.appendChild(hourDuration);

    const box_2=document.createElement('div');
    box_2.classList.add('box_2');
    wrapper.appendChild(box_2);

    const modulesArray = courses.modules;
    for(const module of modulesArray){
        const box_3=document.createElement('div');
        box_3.classList.add('box_3');
        box_3.innerText = module;
        box_2.appendChild(box_3);
    }

    document.body.append(wrapper);
 }

