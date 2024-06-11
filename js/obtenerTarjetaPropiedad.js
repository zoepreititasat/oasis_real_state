function obtenerTarjetaPropiedad(propiedad){
    return (
        `
        <a href="./detalle.html?id=${propiedad.id}">
            <div class="post-card">
                <img class="post-card-img" src="${propiedad.imagenPortada}" alt="${propiedad.titulo}" >
                <div class="post-card-body">
                    <div class="post-card-header-and-price">
                        <div>
                            <b class="bold">${propiedad.titulo} </b>
                            <h1 class="post-card-title">
                                <span class="material-symbols-outlined">
                                    home_pin
                                </span>
                                ${propiedad.ubicacion}
                            </h1>
                        </div>
                        <h1 class="post-card-price">${"$" + propiedad.precio}</h1>
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
    );
}