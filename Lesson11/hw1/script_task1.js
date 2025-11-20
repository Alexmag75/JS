

const divBox=document.getElementById('box');

fetch('https://dummyjson.com/carts')
    .then(value => value.json())
    .then(valueCarts=>{
        const {carts}=valueCarts;

        for(const cart of carts){
            const div1=document.createElement('div');
            div1.classList.add('container');
             div1.innerText=`id: ${cart.id}`
            const productsCart=cart.products;
             for(const product of productsCart){
                 const divproduct=document.createElement('div')
                 divproduct.classList.add('product');
                 divproduct.innerText=`id: ${product.id}
                                       title: ${product.title}
                                       price: ${product.price}
                                       quantity: ${product.quantity} 
                                       total: ${product.total}
                                       discountPercentage: ${product.discountPercentage}
                                       discountedTotal: ${product.discountedTotal}`;
                 const img=document.createElement('img');
                 img.src=product.thumbnail;

                 div1.appendChild(divproduct);
                 div1.appendChild(img);
             }

            const div2=document.createElement('div');
             div2.classList.add('container2');
             div2.innerText=`Total: ${cart.total} discountedTotal: ${cart.discountedTotal}
      userId: ${cart.userId}  totalProducts: ${cart.totalProducts}  totalQuantity: ${cart.totalQuantity}`;
            divBox.appendChild(div1);
            divBox.appendChild(div2);
        }

    });
