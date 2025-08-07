function User(id, name,surname,email,phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [
    new User(10,'alex','map','assfd@gmail.com','0632568975'),
    new User(3,'peta','chel','asfhgd@gmail.com','0632568945'),
    new User(2,'alia','el','asdgf@gmail.com','0632568975'),
    new User(4,'semen','ar','afgsd@gmail.com','0632514975'),
    new User(5,'max','fg','asfgd@gmail.com','0632568975'),
    new User(6,'gek','hgjgh','afgsd@gmail.com','0632568945'),
    new User(9,'lef','hfdh','assadd@gmail.com','0632512575'),
    new User(8,'roma','prt','asjhjd@gmail.com','0632562565'),
    new User(6,'ivan','map2','afhsd@gmail.com','0632561255'),
    new User(1,'lenia','map10','asfhd@gmail.com','0632569975')
];

const arrSort=function (user1, user2) {
    if (user1.id > user2.id) {
        return 1;
    }
    if (user1.id < user2.id) {
        return -1;
    }
    else return 0;
}
let userSort=users.sort(arrSort)
console.log(userSort);