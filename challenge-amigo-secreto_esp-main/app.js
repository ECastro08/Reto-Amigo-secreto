// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let nombreAmigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');

function agregarAmigo(){
    
    if(nombreAmigo.value == ''){
        alert("Por favor ingrese un nombre")
    } else {
        amigos.push(nombreAmigo.value);
    }
    limpiarEntrada();
    verAmigos();
}

function limpiarEntrada(){
    nombreAmigo.value = "";
}

function verAmigos(){
    listaAmigos.innerHTML= "";

    for (const amigo of amigos) {
        let elementos = document.createElement('li');
        elementos.textContent = amigo;
        listaAmigos.appendChild(elementos);
    }
}

