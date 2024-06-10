



function renderizarCasas(listado){
    
    const contenedor = document.getElementById("gallery");

    if(!contenedor) return;
    contenedor.innerHTML = "";
    if(listado.length === 0){
        contenedor.innerHTML = "<h1>No se encontraron coincidencias</h1>";
        return;
    }
    for (let index = 0; index < listado.length; index++) {
        const propiedad = listado[index];
        contenedor.innerHTML  += `
        <a href="./detalle.html?id=${propiedad.id}">
            <div class="post-card">
                <img class="post-card-img" src="${propiedad.imagenPortada}" alt="${propiedad.titulo}">
                <div class="post-card-body">
                    <div class="post-card-header-and-price">
                        <div>
                            <b class="bold">${propiedad.titulo}</b>
                            <h1 class="post-card-title">
                            <span class="material-symbols-outlined">
                                home_pin
                            </span>
                            ${propiedad.ubicacion} </h1>
                        </div>
                        <h1 class="post-card-price">${propiedad.precio}$</h1>
                    </div>
                    <div class="post-card-h3">
                    <div class="rating">
                    <span class="material-symbols-outlined">
                        star
                    </span>
                    
                    </div>
                        <h3 class="post-card-personas">
                            ${propiedad.capacidad}
                         <span class="material-symbols-outlined">
                            group
                        </span>
                        </h3>
                    </div>
                </div>
            </div>
        </a>
        `
     
    }
}

renderizarCasas(listadoPropiedades);


const searchbar = document.getElementById("search-input");

function buscar(){
    if(searchbar?.value === "" || !searchbar?.value){
        renderizarCasas(listadoPropiedades);
        return;
    }
    const resultadoBusqueda = listadoPropiedades
        .filter(propiedad => propiedad.ubicacion.toLocaleLowerCase().includes(searchbar.value.toLocaleLowerCase()) ||
        propiedad.titulo.toLocaleLowerCase().includes(searchbar.value.toLocaleLowerCase()) );
    console.log(resultadoBusqueda);
    renderizarCasas(resultadoBusqueda);
}

