function openVisorImagenes(imagen){
    $("body").append(
        `<div id="visor-imagenes">
            <div class="visor">
                <button id="cerrar-visor-button">
                    <span class="material-symbols-outlined">
                        close
                    </span>    
                </button>
                <img src="${imagen}" />
            </div>
        </div>
        `
    )
    $("#cerrar-visor-button").on( "click", function() {
        $("#visor-imagenes").remove()
    } );
}

