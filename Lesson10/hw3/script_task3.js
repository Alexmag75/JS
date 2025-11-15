let user={}

// const btnSave = document.getElementById("save");
const form=document.forms.myForm;
form.addEventListener("submit", (event)=>{

    event.preventDefault();

    const userName=form.name.value;
    const userSurname=form.surname.value;
    const userAge=form.age.value;

    user.name=userName;
    user.surname=userSurname;
    user.age=userAge;

    const box=document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `Имя ${user.name}<br>Фамилия ${user.surname}<br>Возраст ${user.age}`;

    document.body.appendChild(box);
})


