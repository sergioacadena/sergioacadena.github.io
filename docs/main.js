document.getElementById("arrowMenuleft").addEventListener("click", function () {
    const menu = document.getElementById("arrowMenu");
  
    // Alternar el ancho entre 0 y 200px (o el ancho que desees)
    if (menu.style.width === "40px" || menu.style.width === "") {
      menu.style.width = "200px"; // Ancho al expandirse
    } else {
      menu.style.width = "40px"; // Vuelve al ancho original
    }

    
  });

  const menuArrow = document.getElementById("menuLateralArrow");

// Añadimos un evento click al elemento
menuArrow.addEventListener("click", function () {
  // Alternamos la clase 'rotate-180' con cada clic
  menuArrow.classList.toggle("rotate-180");
});
  