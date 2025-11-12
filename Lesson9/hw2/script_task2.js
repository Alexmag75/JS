let user1={
    id:1,
    name:'vasia',
    email:'vasia@gmail.com',
    message1: function (){
        console.log('Привет')
    },
    message2: function (){
        console.log('Бывай')
    }
}

function copyUser(user){
    if(user){
        let masFunction=[];
        for(const key in user){
            if(typeof user[key]==='function'){
                const functionCopy=user[key].bind({});
                masFunction.push({functionCopy,key});
            }
        }
        const userCopy=JSON.parse(JSON.stringify(user));
        for (const func of masFunction){
            userCopy[func.key] = func.functionCopy;
        }
        return userCopy;
    }
}

user2=copyUser(user1);

console.log(user1);
console.log(user2);

