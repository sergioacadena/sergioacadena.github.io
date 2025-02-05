let listElements = document.querySelectorAll('.list__button--click')

listElements.forEach(listElement => {
    listElement.addEventListener('click',() =>{
                  
             listElement.classList.toggle('arrow'); //añade y elimina una clase de una etiqueta html                
                       
             let height  = 0;
             let menu = listElement.nextElementSibling;//toma al hermano de list o sea ul
             if(menu.clientHeight == "0"){
                height = menu.scrollHeight;
             }

             menu.style.height = `${height}px`;
        }
    )

});
function redirectLink() {
    var link = document.querySelector('.list__button .nav__link');
    if (link) {
        console.log(link)
        window.location.href = link.href;
    }
}
/* La línea de JavaScript que has proporcionado, listElement.classList.toggle('arrow');, es un código que manipula las clases CSS de un elemento HTML en el DOM. Aquí está su función:

listElement: Este es el nombre de una variable que probablemente hace referencia a un elemento HTML en el documento.

classList: Es una propiedad de los elementos del DOM que devuelve un objeto de tipo DOMTokenList. Esta lista representa las clases del elemento HTML.

toggle('arrow'): Es un método de classList que alterna la presencia de una clase en el elemento. En este caso, 'arrow' es el nombre de la clase que se va a alternar. */
