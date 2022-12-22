function siempreTrue(){
    true?console.log(true):console.log(false);
}
siempreTrue();

const imprimir = new Promise((resolve, reject)=>{
    setTimeout(()=> {
        resolve("Soy una promesa");
    }, 5000);
});
imprimir.then(function (value) {
    console.log(value)
});
console.log(imprimir);

function* gen(i){
    //let i;
    //let result = 0;
    while(i < 10){
        yield i*2;  
        i++;  
    }
}
const generador = gen(1);
console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)
//console.log(gen().next().value)