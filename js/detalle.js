function renderizarDetalleCasa(casa, propietario) {

  // imprimir imagen principal
  $("#foto-principal").append(
    `<img  src="${casa.imagenPortada}"  alt="${casa.titulo}"   class="pic-main">`
  );

  $("#title-container").append(
    `
        <h2 class="title"> 
            ${casa.titulo} 
        </h2>
        `
  );

  $("#detalle-card").append(
    `
            <div class="title-card">
                <span class="price">${casa.precio}$</span>
                <div class="rating">
                  ${renderizarEstrellas(casa.estrellas)}
                  
                </div>
                <p class="description">${casa.descripcion}</p>
            </div>
        `
  );


  // imprimir imagenes de mineatura
  for (let index = 0; index < casa.imagenes.length; index++) {
    const foto = casa.imagenes[index];
    $("#gallery-preview").append(`
            <img 
                src="${foto}" 
                alt="${casa.titulo}" 
                class="pic-thumbnail"
            >
        `);
  }

  // vendedor
  $("#detalle-card").append(
    ` 
    <a href="vendedor.html?id=${propietario.id}">
        ${obtenerTarjetaPropietario(propietario)}
    </a>
    `
  );
}

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const propietario = listadopropretarios.find((propietario) => propietario.propiedades.includes(parseInt(id)));
console.log(propietario);
if (id) {
  const casa = listadoPropiedades.find((casa) => casa.id == id);
  renderizarDetalleCasa(casa,propietario);
}
