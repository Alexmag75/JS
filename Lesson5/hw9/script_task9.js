let users=[
    {
        id: 1,
        name: 'name_1',
        age: 25
    },
    {
        id: 2,
        name: 'name_2',
        age: 30
    },
    {
       id: 3,
       name: 'name_3',
       age: 25
    }
]

let userPrint=(user)=>{
    for(let user of users){
        document.write(`<div>`);
        document.write(`<p>${user.id}</p>`);
        document.write(`<p>${user.name}</p>`);
        document.write(`<p>${user.age}</p>`);
        document.write(`</div>`);
    }
}
userPrint(users);
