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


document.addEventListener("DOMContentLoaded", () => {
  const asideBtn = document.getElementById("asideBtn2");
  const popup = document.getElementById("popup-110diascss");
  const cerrarPopupBtn = document.getElementById("btn-cerrar-popup");

  if (asideBtn && popup) {
      asideBtn.addEventListener("click", () => {
          popup.style.height = "100%";
          popup.style.width = "100%";
          popup.style.display="flex";
      });
  } else {
      console.warn("Elemento no encontrado en el DOM");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const cerrarPopupBtn = document.getElementById("btn-cerrar-popup");
  const popup = document.getElementById("popup-110diascss");

  if (cerrarPopupBtn && popup) {
    cerrarPopupBtn.addEventListener("click", () => {
          popup.style.height = "0";
          popup.style.width = "0";
          popup.style.display="none";
      });
  } else {
      console.warn("Elemento no encontrado en el DOM");
  }
});



  

  