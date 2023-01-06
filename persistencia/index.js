let nombre = "Miguel";
let apellido = "Ruiz";

const objNombre = {nombre, apellido}
console.log(objNombre)

sessionStorage.setItem(obj, objNombre);
localStorage.setItem(obj2, objNombre);

document.cookie=`objeto = ${objNombre}; expires=Wed, 05 Jan 2023 18:30 UTC`;
;