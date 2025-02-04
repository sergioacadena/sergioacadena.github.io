function copyText(){
    let mailText = document.getElementById('text-mail').innerText.trim();
    navigator.clipboard.writeText(mailText);
}
document.getElementById('text-mail').addEventListener('click', function() {
    let mailText = document.getElementById('text-mail').innerText.trim();
    alert("DIRECCIÓN DE CORREO COPIADA: "+ mailText)
});
document.getElementById('data__iconoEnviar').addEventListener('click', function() {
    let textmail = document.getElementById('text-mail').textContent;
    let textMailModal = document.getElementById('textMailModal');
    textMailModal.innerHTML = textmail;
    document.getElementById('mi-modal').style.display = 'block';

});

document.getElementById('botonInstrucciones').addEventListener('click', function() {
    
document.getElementById('mi-modal-intrucciones').style.display = 'block';

});
function cerrarModalInstrucciones() {
    
    document.getElementById('mi-modal-intrucciones').style.display = 'none';
}
function cerrarModal() {
    
    document.getElementById('mi-modal').style.display = 'none';
    window.open('https://mail.google.com/mail/u/0/#inbox?compose=new', '_blank');
}
let listElements = document.querySelectorAll('.list__button--click')

document.getElementById('boton__informacion').addEventListener('click', function() {
    document.getElementById('arrow').classList.toggle('arrow__rotate');
    document.getElementById('informacion').classList.toggle('mostrar_informacion');
    let informacion= document.getElementById('informacion')
    
});


let numeroTelefono = document.getElementById('text-phone').textContent.trim();
var url = 'https://wa.me/+57' + numeroTelefono;
document.getElementById('text-phone').setAttribute('href', url);