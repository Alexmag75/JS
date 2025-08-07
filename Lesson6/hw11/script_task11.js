let cards=[];
let value =[6,7,8,9,10,'ace','jack','queen','king'];
let cardSuit=['spade', 'diamond','hearts', 'clubs'];
let color= ['red','black'];

for(let valueCard of value){
    for(let suit of cardSuit){
        if((suit==='spade')||(suit==='clubs'))
        {
            cards.push({value:valueCard,cardSuit:suit,color:'black'});
        }
        if((suit==='diamond')||(suit==='hearts'))
        {
            cards.push({value:valueCard,cardSuit:suit,color:'red'});
        }
    }
}
let cardGroup=cards.reduce((accumulator,card)=>{
    if(card.cardSuit==='spade'){
        accumulator.spades.push(card);
    }
    if(card.cardSuit==='diamond'){
        accumulator.diamonds.push(card);
    }
    if(card.cardSuit==='hearts'){
        accumulator.hearts.push(card);
    }
    if(card.cardSuit==='clubs'){
        accumulator.clubs.push(card);
    }
    return accumulator;
},{spades:[],diamonds:[],hearts:[],clubs:[]});
console.log(cardGroup);
