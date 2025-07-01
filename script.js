/*Enlazar los elementos del HTML */


const toggleButton =document.getElementById("toggle-button");
const body =document.body;
const logo =document .getElementById("logo");
/*Funcion para ejecutar un codigo*/

toggleButton .addEventListener("click",() =>  {
    body.classList.toggle("dark")
    //Cambiamos el logo segun el tema

    const isDark = body.classList.contains("dark");// true - false

    logo.src = isDark ? "./assets/Mode=light.svg" : "./assets/Mode=dark.svg";
})