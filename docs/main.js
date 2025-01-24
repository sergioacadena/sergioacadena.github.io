 function mostrarMenuLateral () {
    const menu = document.getElementById("menuLateral");
    
    // Alternar el ancho entre 0 y 200px (o el ancho que desees)
    if (menu.style.width === "0px" || menu.style.width === "") {
      menu.style.width = "280px"; // Ancho al expandirse
    } else {
      menu.style.width = "0px"; // Vuelve al ancho original
    }

    const menuArrow = document.getElementById("menuLateralArrow");
    menuArrow.classList.toggle("rotate-180");
    
  };

document.getElementById("arrowMenuleft").addEventListener("click", mostrarMenuLateral);
document.getElementById("iconoMenuHamburguesa").addEventListener("click", mostrarMenuLateral);

  

  