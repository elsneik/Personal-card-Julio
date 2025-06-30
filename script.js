/*Enlazar los elementos del HTML */


const toggleButton =document.getElementById("toggle-button");
const body =document.body;

/*Funcion para ejecutar un codigo*/

toggleButton .addEventListener("click",() =>  {
    body.classList.toggle("dark")
})
