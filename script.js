// EFECTO HEADER PEQUEÑO AL HACER SCROLL

const header = document.querySelector("header");

window.addEventListener("scroll", function(){

if(header){

if(window.scrollY > 80){
header.classList.add("header-small");
}else{
header.classList.remove("header-small");
}

}

});


// MENU HAMBURGUESA

document.addEventListener("DOMContentLoaded", function(){

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if(toggle && menu){

toggle.addEventListener("click", function(){
menu.classList.toggle("active");
});

}

});
