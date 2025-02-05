class pokemon{
    
    constructor(nombre, imagen, id){
        this.nombre = nombre
        this.imagen = imagen
        this.id =id;
      
    }
}
let cantidad=0
let squier = new pokemon('squier', 'img/1.png', cantidad++)
let rat = new pokemon('squier', 'img/2.png', cantidad++)
let skin = new pokemon('squier', 'img/3.png', cantidad++)
let sq = new pokemon('squier', 'img/1.png', cantidad++)
let raton = new pokemon('squier', 'img/2.png', cantidad++)
let skiro = new pokemon('squier', 'img/3.png', cantidad++)
console.log(cantidad)
cantidad=cantidad*2
let contendedor__Fichas = document.getElementById('contenedor__Tarjetas');

let norepetir=[]
function ordenAleatorio(){

    while(cantidad!=norepetir.length){
        let aleatorios=aleatorio(1,cantidad)
        if(!norepetir.includes(aleatorios)){
            norepetir.push(aleatorios)
        } 
    }            
     
}
ordenAleatorio()


function asignarImagen(){

    for (let i = 0; i < (cantidad); i++) { //ID al azar
        contendedor__Fichas.innerHTML+=`<div class="contendedor__Ficha" id="contendedor__Ficha">
            <div class="ficha" id="ficha${norepetir[i]}">       </div>
        </div>` 
    }

   for (let i = 1; i < (cantidad/2)+1; i++) {
      let imagen = document.getElementById(`ficha${[i]}`)
      imagen.style.backgroundImage  = `url('./img/${i}.png')`  
   } 
   let duplicar =0;
   for(let i = (cantidad/2)+1; i < (cantidad)+1; i++){
    duplicar ++;
    let imagen = document.getElementById(`ficha${[i]}`);
    imagen.style.backgroundImage  = `url('./img/${duplicar}.png')`
    console.log("conteo duplicar"+duplicar)
   }
}
asignarImagen()


let activador =true
var fichas = document.querySelectorAll('.ficha');// si no le pone punto lo toma como una etiqueta html


fichas.forEach(ficha=>{
    ficha.addEventListener('mouseover',()=>{
        
        ficha.style.transform = 'rotateY(360deg)';

        
        /* ficha.classList.toggle('ficha__destapada');
        ficha.classList.toggle('ficha'); *///aparece y desaparece cuando le den clic
        /* var ficha__destapada = querySelectorAll('.ficha__destapada'); 
        if(activador==true){
            activador= !activador;
            console.log(activador)
            let ficha__destapada = document.getElementById ('ficha1')
            ficha__destapada.style.backgroundImage = `url('./img/${aleatorio(1,6)}.png')`; 
            
            
        }else{
            activador= !activador;
            console.log(activador)
            
            
        }

        console.log("hizo clic en la ficha") */
    })
})


function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}


