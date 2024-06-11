

const renderPropietario = (propietario) =>{

    $(".contenido").append(
        obtenerTarjetaPropietario(propietario)
    );
    const casasDePropietario = listadoPropiedades.filter((propiedad)=>{
        return propietario.propiedades.includes(propiedad.id)
    })
    console.log("casasDePropietario",casasDePropietario);


    for (let index = 0; index < casasDePropietario.length; index++) {
        const propiedad = casasDePropietario[index];
    
        $("#propiedades-de-propietario").append(
            obtenerTarjetaPropiedad(propiedad)
        )
        
    }

}


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const propietario = listadopropretarios.find((propietario) => propietario.id === parseInt(id));
console.log(propietario);
if (id) {
  renderPropietario(propietario);
}