// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let nombreAmigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

function agregarAmigo(){
    let nombre = nombreAmigo.value.trim();

    if (nombre === '') {
        alert("Por favor ingrese un nombre válido");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Ese nombre ya fue agregado");
        return;
    }

    amigos.push(nombre);
    amigo.value = '';
    verAmigos();

}


function verAmigos(){
    listaAmigos.innerHTML= "";
    for (const amigo of amigos) {
        let elementos = document.createElement('li');
        elementos.textContent = amigo;
        listaAmigos.appendChild(elementos);
    }
}

function sortearAmigo(){
    if (amigos.length === 0) {
        alert("La lista está vacía");
        return;
    }

    resultado.innerHTML = ""; 

    let indiceSeleccionado = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = document.createElement('li');
    amigoSeleccionado.textContent = amigos[indiceSeleccionado];
    resultado.appendChild(amigoSeleccionado);

}
