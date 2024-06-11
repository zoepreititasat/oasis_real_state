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
        contenedor.innerHTML  +=  obtenerTarjetaPropiedad(propiedad);
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

