let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://foni.papik.pro/uploads/posts/2024-10/foni-papik-pro-q4bb-p-kartinki-moloko-na-prozrachnom-fone-17.png'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
       title: 'tomato',
       price: 47,
       image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
       title: 'tea',
       price: 15,
       image: 'https://zefirka.club/uploads/posts/2022-12/thumbs/1670820779_35-zefirka-club-p-lipton-na-prozrachnom-fone-42.png'
    },
];

for(let i=0;i<products.length;i++)
{
    document.write(`  <div class=”product-card”>

                      <h3 class="product-title">${products[i].title} ${products[i].price}</h3>

                      <img src=${products[i].image} alt="Foto_products" class="product-image">

                      </div>`);
}


