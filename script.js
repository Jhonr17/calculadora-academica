const header = document.querySelector("header");

window.addEventListener("scroll", function(){

if(window.scrollY > 80){
header.classList.add("header-small");
}else{
header.classList.remove("header-small");
}

});
