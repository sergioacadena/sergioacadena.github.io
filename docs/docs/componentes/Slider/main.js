const sliderContainer = document.getElementById('slider__container');
const slider = document.getElementById('slider');
const buttonrigth = document.getElementById('button-rigth');
const buttonleft = document.getElementById('button-left');

/* querySelectorAll funciona bien para seleccionar varios elementos con una misma clase y los lista en la variable 
esto crea una array*/
const sliderElemnts = document.querySelectorAll('.slider__element');

let slideCounter=0; /* cuenta el slider en el que estoy */

const rootStyles = document.documentElement.style;/* importa la hoja de estilos del documento asociado */

const DIRECCION ={ /* este es un objeto que uso para envíar como parametro a la funcion moveSlide
permite tener control de lo que se le envia a la funcion dentro de js */
    RIGTH: 'RIGTH',
    LEFT: 'LEFT'
}
const getTransformValue = ()=> Number(rootStyles.getPropertyValue('--slider-transform').replace('px',''))
const reorderSlider = ()=>{
     
    /* me crea el priemer slide despues de el ultimo para hacer un slider infinito
     si el contador es igual al tamaño del array -1 que tiene la lista de elementos 
     si se da esta condicion, significa que estamos en el ultimo elemento*/
    if(slideCounter===sliderElemnts.length-1){

        slider.appendChild(slider.firstElementChild);

        
    }
}

/* almacena en una variable de JS con getPropertyValue el valor de la varible css --slider-transform'
ademas usa replace ('px','') para que reemplace el texto px por nada o vacio, ya que necesitamos un numero
usamos number para combertirlo a numero porque get me lo trae como string*/


const moveSlide = (direction)=>{
    const transforValue = getTransformValue();
    if(direction===DIRECCION.LEFT){
 /* setProperty envia a la propiedad --slider-transform menos 300px al hacer clic,
 añado px con templatestring porque esta solo el numero, y se debe enviar a css con px */
        rootStyles.setProperty('--slider-transform', `${transforValue + sliderElemnts[slideCounter].scrollWidth}px`);
        slideCounter--;

        /* scrollWidth nos envia la información de cuanto ancho tiene el elemento */
        
    }else if(direction===DIRECCION.RIGTH){
        rootStyles.setProperty('--slider-transform', `${transforValue - sliderElemnts[slideCounter].scrollWidth}px`);

        /* cada vez que haga clic a la derecha, este se suma de uno en uno, y lo usamos como indice en la lista
        de  sliderElemnts[slideCounter], si que llama al elemento que este en ese indice y lee el width*/
        slideCounter++;
       
    }
    reorderSlider()
}

buttonrigth.addEventListener('click', ()=>moveSlide(DIRECCION.RIGTH));
buttonleft.addEventListener('click', ()=>moveSlide(DIRECCION.LEFT));

