function obtenerTarjetaPropietario(propietario){
    return (
        `
        <div class="profile-card">
            <img src="${propietario.fotoperfil}" alt="Frabricio Gonzales" class="profile-pic">
            <div class="profile-info">
                <h3 class="profile-name">${propietario.nombre}</h3>
                <p class="profile-location">
                    <span class="material-symbols-outlined">
                        location_on
                    </span>
                    ${propietario.ubicacion}
                </p>
                <p class="profile-location">
                    <span class="material-symbols-outlined">
                        call
                    </span>
                    ${propietario.numerotel}
                </p>
                <p class="profile-location">
                    <span class="material-symbols-outlined">
                        mail
                    </span>
                    ${propietario.email}
                </p>
            </div>
        </div>
    `
    );
}