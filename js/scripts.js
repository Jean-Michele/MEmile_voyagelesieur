const btPlus = document.querySelector('.bouton');
const colTransport = document.querySelector('.conteneur-transport');

btPlus.addEventListener('click', fouvreferme);

function fouvreferme(){
    /*console.log("yo");*/
    colTransport.classList.toggle('col-transport-invisible');
}