var toggleMenu = document.getElementById("js-toggle-menu");
var menu = document.getElementById("js-menu");

// classList es una propiedad de los elementos que devuelve
// un DomTokenList con todas las clases. Esta propiedad
// poseee los siguientes métodos:
// add()
// remove()
// toggle()

toggleMenu.addEventListener("click", function(){
  // menu.classList.add("mostrar");
  // menu.classList.remove("mostrar");
  toggleMenu.classList.toggle("mostrarx");
  menu.classList.toggle("mostrar");
})

