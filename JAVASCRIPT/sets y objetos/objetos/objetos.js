const myObj = {
    nombre: "Miguel",
    apellido: "Ruiz",
    edad: 27,
    eresDesarrollador: true
}

const edadObj = myObj.edad;
//console.log(edadObj);

const listaAmigos = [myObj, {
    nombre: "Joaquin",
    apellido: "Gaspar",
    edad: 50,
    eresDesarrollador: false
},{
    nombre: "Roberto",
    apellido: "Santos",
    edad: 30,
    eresDesarrollador: false
}];

//console.log(listaAmigos);

const ordenEdad = listaAmigos.sort((a,b) => {
    return a.edad - b.edad;
});

console.log(ordenEdad);