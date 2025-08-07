let ExchangeRate=[
    {
        currency:'USD',
        value:25,
    },
    {
        currency:'EUR',
        value:42,
    }
]
let exchange=(sumUAH,currencyValues,exchangeCurrency)=>{
    if (exchangeCurrency==='USD'){
        return sumUAH/currencyValues[0].value;
    }
    if (exchangeCurrency==='EUR'){
        return sumUAH/currencyValues[1].value;
    }
}
let Rate=Math.round(exchange(10000,ExchangeRate,'USD')*100)/100;
document.write(`UAN=>USD ${Rate} <br>`);
Rate=Math.round(exchange(10000,ExchangeRate,'EUR')*100)/100;
document.write(`UAN=>EUR ${Rate}`);

