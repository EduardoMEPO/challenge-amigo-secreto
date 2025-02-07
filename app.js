// Array para almacenar los nombres de los amigos
let amigos = [];
let nombre_sorteado = "";

// Función para agregar amigos
function agregarAmigo(){
    let amigo = document.getElementById('amigo').value; 
    //.trim() es un método de JavaScript que elimina los espacios en blanco al inicio y 
    // al final de un string.
    if (amigo.trim() === "") {
        alert("Por favor, inserte un nombre.")
    } else {
        amigos.push(amigo.trim());
        console.log(amigos);
        actualizarLista()
        limpiarCaja();
    }
}

// Función para limpiar el input
function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

// Función para actualizar la lista en el HTML
function actualizarLista(){
    let lista = document.getElementById('listaAmigos'); // Obtener la lista
    lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos

    for (let i = 0; i < amigos.length; i++){
        let li = document.createElement('li'); // Crear un nuevo elemento <li>
        li.textContent = amigos[i]; // Asignar el nombre del amigo
        lista.appendChild(li); // Agregar el <li> a la lista
    }
}

// Función para elegir de manera aleatoria un amigo de la lista amigos
function sortearAmigo(){
    let lista = document.getElementById('listaAmigos');
    // Validar que haya amigos disponibles
    if (amigos.length != 0){
        // Generar un índice aleatorio
        let indice = Math.floor(Math.random()*amigos.length); // elige número aleatorio de 0 a la longitud de la lista amigos
        // Obtener el nombre sorteado
        nombre_sorteado = "Tu Amigo Secreto es: " + amigos[indice]
        // Mostrar el resultado
        lista.innerHTML = nombre_sorteado;
    } else{
        lista.innerHTML = "No hay amigos.";
    }
}
