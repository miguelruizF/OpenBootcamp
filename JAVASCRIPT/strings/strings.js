let nombre ="Miguel Angel";
let apellido = "Ruiz"

let estudiante = `El estudiante se llama ${nombre} ${apellido}`;
let estudiante2 = nombre + " " + apellido;
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();

let contar = estudiante.length;
let primeraLetra = estudiante2[0];
let ultimaLetra = estudiante2[16];

let eliminarEspacios = estudiante2.replace(/\s/g, "");

let estaNombre = estudiante.includes(nombre);
// console.log(estaNombre);
