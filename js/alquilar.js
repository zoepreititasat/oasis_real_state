function completado(){
    console.log("submited");
    const nombre = $("#nameInput").val();
    const apellido = $("#apellidoInput").val();
    const email = $("#emailInput").val();
    if(
        nombre.length >= 3 && 
        apellido.length >= 3 && 
        email.includes("@") 
    ){
        alert("Reserva Enviada con Exito");
        window.location.href = "./index.html"
    }else {
        alert("Campos Incompletos");
    } 
}

function renderizarCasaAAlquilar(casa){
    $("#propiedad-container").append(
        obtenerTarjetaPropiedad(casa,false)
    )
}

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
if (id) {
  const casa = listadoPropiedades.find((casa) => casa.id == id);
  renderizarCasaAAlquilar(casa);
}else{
  window.location.href = "./index.html"
}

