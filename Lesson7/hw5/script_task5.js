function Client(id, name,surname,email,phone,order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
let Clients = [
    new Client(10,'alex','map','assfd@gmail.com','0632568975',['1','2','3','8']),
    new Client(3,'peta','chel','asfhgd@gmail.com','0632568945',['2','4']),
    new Client(2,'alia','el','asdgf@gmail.com','0632568975',['2','3','5','9','8']),
    new Client(4,'semen','ar','afgsd@gmail.com','0632514975',['1','3','5']),
    new Client(5,'max','fg','asfgd@gmail.com','0632568975',['7','1','5','9','8']),
    new Client(6,'gek','hgjgh','afgsd@gmail.com','0632568945',['4','3','5','9','8']),
    new Client(9,'lef','hfdh','assadd@gmail.com','0632512575',['1','5','4','9','8','11']),
    new Client(8,'roma','prt','asjhjd@gmail.com','0632562565',['1','7','5','9','8']),
    new Client(6,'ivan','map2','afhsd@gmail.com','0632561255',['2','3','5','9','8']),
    new Client(1,'lenia','map10','asfhd@gmail.com','0632569975',['6','5','9','8'])
];
const sortClientsOrder=function (user1, user2) {
    if (user1.order.length > user2.order.length) {
        return 1;
    }
    if (user1.order.length < user2.order.length) {
        return -1;
    }
    else return 0;
}
let sortClients=Clients.sort(sortClientsOrder);
console.log(sortClients);