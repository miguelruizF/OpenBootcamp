const lista_compra = ["Cheetos", "Jamon", "Coca-cola", "Aceite", "Mermelada"];
lista_compra.push("Aceite de girasol"); //Añade un elemento

lista_compra.pop();
console.log(lista_compra);

const lista_peliculas = [
    {
        titulo: "4 mitades",
        director: "Alessio Maria Federeci",
        fecha: "2020",
    },
    {
        titulo: "Apolo 10 1/2",
        director: "Richard Linklater",
        fecha: "2021",
    },
    {
        titulo: "Big-bug",
        director: "Jean-Pierre Jeunet",
        fecha: "2022",
    },
]

const nueva_lista_pelis = lista_peliculas.filter(valor => {
    if(valor.fecha > 2021){
        return valor;
    }
});

const directores = lista_peliculas.map(valor => {
    return valor.director
});
const titulos = lista_peliculas.map(valor => {
    return valor.titulo
});

const concat_pelis = directores.concat(titulos);

const concat_2 = [...directores].concat(...titulos);
console.log(concat_2);