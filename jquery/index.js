const boton = document.getElementById("btn-alert");

boton.addEventListener("click", (e)=>{
    e.preventDefault;
    alert("diste click en el boton")
});

$("#btn-jquery").click(function(e){
    e.preventDefault();
    alert("Hola, estoy utilizando JQuery");
})
