(function(){ //creamos una funcion autoinvocada para proteger las variables y para que no se mezclen con otros archivos.
    const openButton = document.querySelector(".nav__menu"); //icocno hamburguesa para responsive
    const menu = document.querySelector(".nav__link"); // es el ul
    const closeMenu = document.querySelector(".nav__close");//nav__close


    openButton.addEventListener("click", () =>{
        menu.classList.add("nav__link--show"); //agregar clase modificada

    });
    
    closeMenu.addEventListener("click", () =>{
        menu.classList.remove("nav__link--show"); //remover clase modificada con close icon
    });

})();