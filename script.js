var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

console.log("La edad de Michael es: ", users[0].age);
console.log("La edad de John es: ", users[1].age);
console.log("La edad de David es: ", users[2].age);

users.forEach(element => {
    console.log(element.name, "-", element.age);
});


users.forEach(element => {
    if (element.age>=18)
    console.log(element.age)
});

const users2={
    nombreedad1:{name: "Michael", age:37}, 
    nombreedad2:{name: "John", age:30}, 
    nombreedad3:{name: "David", age:27},

}

//no resulta usando users2 si es que no se usa el mismo users en línea 39
const nameAge=(users2) =>{
    return `
    <h3>Nombres</h3>
    <ul>
        <li>Primero : ${users2.nombreedad1.name} - ${users2.nombreedad1.age}</li>
        <li>Segundo : ${users2.nombreedad2.name} - ${users2.nombreedad2.age}</li>
        <li>Tercero : ${users2.nombreedad3.name} -${users2.nombreedad1.age}</li>
       
    </ul>
</div>
    `;
}

const principal=document.createElement("principal");
principal.innerHTML= nameAge(users2);
document.body.appendChild(principal);