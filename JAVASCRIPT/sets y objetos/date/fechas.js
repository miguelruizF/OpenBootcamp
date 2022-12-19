const fechaHoy = new Date();
console.log(fechaHoy);

const nacimiento = new Date(1995,0,25);
console.log(nacimiento);

const mayor = true;
if(nacimiento > fechaHoy){
    console.log(mayor);
}else{
    console.log(false)
}

const diaNacimiento = nacimiento.getDate();
console.log(diaNacimiento);

const mesNacimiento = nacimiento.getMonth();
console.log(mesNacimiento);

const anyoNacimiento = nacimiento.getFullYear();
console.log(anyoNacimiento);