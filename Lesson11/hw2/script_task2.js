

const divBox=document.getElementById('wrapper');

fetch('https://dummyjson.com/recipes')
    .then(value => value.json())
    .then(valueRecipes=>{
        const {recipes}=valueRecipes;

        for(const recipe of recipes){

            const name=document.createElement('div');
            name.classList.add('name');
            name.innerText=`${recipe.id} Назва: ${recipe.name} `;
            const ol=document.createElement('ol');
            ol.classList.add('ingredients');
            const h4_1=document.createElement('h4');
            h4_1.innerText=`Состав`;
            for(const ingredient of recipe.ingredients){
                const li=document.createElement('li');
                li.innerText=`${ingredient}`

                ol.appendChild(li);
            }
            const h4_2=document.createElement('h4');
            h4_2.innerText=`Инструкция`;
            h4_2.classList.add('h4_2');
            const instruction=document.createElement('div');
            instruction.classList.add('instruction');
            instruction.innerText=`${recipe.instructions}`

            const prepTime=document.createElement('div');
            prepTime.classList.add('preptime');
            prepTime.innerText=`Время подготовки ${recipe.prepTimeMinutes} минут`

            const cookTime=document.createElement('div');
            cookTime.classList.add('preptime');
            cookTime.innerText=`Время готовки ${recipe.cookTimeMinutes} минут`

            const servings=document.createElement('div');
            servings.classList.add('preptime');
            servings.innerText=`Порции ${recipe.servings}`

            const difficulty=document.createElement('div');
            difficulty.classList.add('preptime');
            difficulty.innerText=`difficulty ${recipe.difficulty}`

            const cuisine=document.createElement('div');
            cuisine.classList.add('preptime');
            cuisine.innerText=`cuisine ${recipe.cuisine}`

            const caloriesPerServing=document.createElement('div');
            caloriesPerServing.classList.add('preptime');
            caloriesPerServing.innerText=`caloriesPerServing ${recipe.caloriesPerServing}`

            const box=document.createElement('div');
            for( const tag of recipe.tags){
                const p=document.createElement('p');
                p.innerText=`${tag}`
                box.appendChild(p)
            }

            const userId=document.createElement('div');
            userId.classList.add('preptime');
            userId.innerText=`userId: ${recipe.userId}`

            const img=document.createElement('img');
            img.classList.add('img');
            img.src=recipe.image;

            const rating=document.createElement('div');
            rating.classList.add('preptime');
            rating.innerText=`rating: ${recipe.rating}`

            const reviewCount=document.createElement('div');
            reviewCount.classList.add('preptime');
            reviewCount.innerText=`reviewCount: ${recipe.reviewCount}`

            const box1=document.createElement('div');
            for( const mType of recipe.mealType){
                const p=document.createElement('p');
                p.innerText=`${mType}`
                box1.appendChild(p)
            }

             divBox.append(name,h4_1,ol,h4_2,instruction,prepTime,cookTime,servings,difficulty,cuisine,caloriesPerServing,box,userId,img,rating,reviewCount,box1);

        }

    });
