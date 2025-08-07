let amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  // Validar que no esté vacío
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Agregar al array
  amigos.push(nombre);

  // Limpiar input
  input.value = "";

  // Actualizar lista en pantalla
  mostrarListaAmigos();
}

function mostrarListaAmigos() {
  const lista = document.getElementById("listaAmigos");

  // Limpiar contenido anterior
  lista.innerHTML = "";

  // Recorrer y agregar cada amigo como <li>
  amigos.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  const resultado = document.getElementById("resultado");

  // Validar que haya al menos un amigo
  if (amigos.length === 0) {
    alert("La lista está vacía. Agrega al menos un nombre.");
    return;
  }

  // Limpiar resultado anterior
  resultado.innerHTML = "";

  // Obtener índice aleatorio
  const indice = Math.floor(Math.random() * amigos.length);
  const nombreSorteado = amigos[indice];

  // Mostrar resultado como <li>
  const li = document.createElement("li");
  li.innerHTML = `🎉 El amigo secreto es: <strong>${nombreSorteado}</strong>`;
  resultado.appendChild(li);
}
