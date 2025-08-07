let cards=[];
let value =[6,7,8,9,10,'ace','jack','queen','king'];
let cardSuit=['spade', 'diamond','heart', 'clubs'];
let color= ['red','black'];

for(let valueCard of value){
    for(let suit of cardSuit){
        if((suit==='spade')||(suit==='clubs'))
        {
            cards.push({value:valueCard,cardSuit:suit,color:'black'});
        }
        if((suit==='diamond')||(suit==='heart'))
        {
            cards.push({value:valueCard,cardSuit:suit,color:'red'});
        }
    }
}
//знайти піковий туз
console.log(cards.filter(value=>{
    if((value.value==='ace')&&(value.cardSuit==='spade'))
    {
        return value
    }
}));
//всі шістки
console.log(cards.filter(value=>{
        return value.value===6
}));
//всі червоні карти
console.log(cards.filter(value=>{
    return value.color==='red'
}));
//всі буби
console.log(cards.filter(value=>{
    return value.cardSuit==='diamond'
}));
//всі трефи від 9 та більше
let cardsClubs= cards.filter(user=>{
    if((user.cardSuit==='clubs'))
    {
        return user
    }
});
console.log(cardsClubs.slice(3,8))

