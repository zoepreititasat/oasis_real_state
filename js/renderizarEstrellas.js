function renderizarEstrellas(cantidadEstrellas) {
  var resultado = "";
  for (var i = 0; i < cantidadEstrellas; i++) {
    resultado += `<span class="material-symbols-outlined"> star  </span>  `;
  }
  return resultado;
}
