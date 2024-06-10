function renderizarDetalleCasa(casa){

    const body = document.getElementById("detalle-body");
    
    const fotoPrincipal = document.getElementById("foto-principal");

    const galeriaMiniaturas = document.getElementById("gallery-preview");

    if(!body) return;

    // imprimir imagen principal
    fotoPrincipal.innerHTML =`<img 
        src="${casa.imagenPortada}" 
        alt="${casa.titulo}" 
        class="pic-main">`;

    // imprimir imagenes de mineatura
    for (let index = 0; index < casa.imagenes.length; index++) {
        const foto = casa.imagenes[index];

        galeriaMiniaturas.innerHTML += `
        <img src="${foto}" alt="${casa.titulo}" class="pic-thumbnail">
        `
    }

    body.innerHTML += `
    <div class="title-card">
        <h2 class="title"> 
            ${casa.titulo} <span class="favorite">♥</span>
        </h2>
        <span class="price">${casa.precio}$</span>
        <div class="rating">★★★★★</div>
        <p class="description">${casa.descripcion}</p>
    </div>
    `;
}


const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);
const id = urlParams.get('id');
console.log(id);

if(id){
    const casa = listadoPropiedades.find(casa => casa.id == id);
    console.log("casa",casa);
    renderizarDetalleCasa(casa);
}
