const listadoPropiedades = [
    {
        id: 1,
        titulo: "Pinamar Norte Casa",
        precio: 260,
        descripcion: "adfasdfasdf",
        capacidad: 6,
        estrellas: 5,
        propietario: 1,
        ubicacion: "Pinamar",
        imagenPortada: "./imgs/Casa Pinamar 1.jpg",
        imagenes:[
            "./imgs/Casa pinamar interior 1.jpg",
            "./imgs/casa pinamar interior  2.jpg",
            "./imgs/casa villa gesell interior 3.jpg"
        ]
    },
    {
        id: 2,
        titulo: "Casa Estilo Cabaña",
        precio: 180,
        descripcion: "adfasdfasdf",
        capacidad: 4,
        estrellas: 4,
        propietario: 1,
        ubicacion: "Mar del Plta",
        imagenPortada: "./imgs/casa mar de plata 1.jpg",
        imagenes:[
            "./imgs/casa mar de plata interior 1.jpg",
            "./imgs/casa mar del plata interior 2.jpg",
            "./imgs/casa mar del plata interior 3.jpg"
        ]
    },

    {
        id: 3,
        titulo: "Cabaña Alpina del bosque",
        precio: 255,
        descripcion: "adfasdfasdf",
        capacidad: 2,
        estrellas: 3,
        propietario: 1,
        ubicacion: "Carilo",
        imagenPortada: "./imgs/casa carilo 1.jpg",
        imagenes:[
            "./imgs/casa carilo interior 1.jpg",
            "./imgs/casa carilo interior 2.jpg",
            "./imgs/casa carilo intenrior 3.jpg"
        ]
    },
    {
        id: 4,
        titulo: "Casa Miramar",
        precio: 354,
        descripcion: "adfasdfasdf",
        capacidad: 8,
        estrellas: 4,
        propietario: 1,
        ubicacion: "Mirama",
        imagenPortada: "./imgs/casa miramar 1.jpg",
        imagenes:[
            ".",
            "./imgs/casa miramar interior 2.jpg",
            "./imgs/casa miramar interior 3.jpg"
        ]
    },
    {
        id: 5,
        titulo: "Cruz del Sur",
        precio: 278,
        descripcion: "adfasdfasdf",
        capacidad: 4,
        estrellas: 3,
        propietario: 1,
        ubicacion: "Villa Gesell",
        imagenPortada: "./imgs/casa villa gesell 1.jpg",
        imagenes:[
            "./imgs/casa villa gesell interior 1.jpg",
            "./imgs/casa villa gesell interior 2.jpg",
            "./imgs/casa villa gesell interior 3.jpg"
        ]
    },
    {
        id: 6,
        titulo: "Complejo Tridente",
        precio: 169,
        descripcion: "adfasdfasdf",
        capacidad: 4,
        estrellas: 3,
        propietario: 1,
        ubicacion: "Las Toninas",
        imagenPortada: "./imgs/casa las toninas 1.jpg",
        imagenes:[
            "./imgs/casa las toninas interior 1.jpg",
            "./imgs/casa las toninas interior 2.jpg",
            "./imgs/casa las toninas interior 3.jpg"
        ]
    },
    {
        id: 7,
        titulo: "Costaesmeralda",
        precio: 234,
        descripcion: "adfasdfasdf",
        capacidad: 4,
        estrellas: 3,
        propietario: 1,
        ubicacion: "Costa Esmerarlda",
        imagenPortada: "./imgs/casa Costa Esmeralda 1.jpg",
        imagenes:[
            "./imgs/casa costa esmeralda interior 1.jpg",
            "./imgs/casa costa esmeralda interior 2.jpg",
            "./imgs/casa costa esmeralda interior 3.jpg"
        ]
    },
    {
        id: 8,
        titulo: "Ohana del bosque",
        precio: 300,
        descripcion: "adfasdfasdf",
        capacidad: 5,
        estrellas: 4,
        propietario: 1,
        ubicacion: "Necochea",
        imagenPortada: "./imgs/Casa Necochea 1.jpg",
        imagenes:[
            "./imgs/casa necochea interior 1.jpg",
            "./imgs/casa necochea interior 2.jpg",
            "./imgs/casa necochea interior 3.jpg"
        ]
    },
    
];



function renderizarCasas(){
    
    const contenedor = document.getElementById("gallery");
    console.log(contenedor);
    for (let index = 0; index < listadoPropiedades.length; index++) {
        const propiedad = listadoPropiedades[index];
        console.log(propiedad);
        contenedor.innerHTML  += `
        <a href="./detalle.html?id=${propiedad.id}">
            <div class="post-card">
                <img class="post-card-img" src="${propiedad.imagenPortada}" alt="${propiedad.titulo}">
                <div class="post-card-body">
                    <div class="post-card-header-and-price">
                        <div>
                            <b class="bold">${propiedad.titulo}</b>
                            <h1 class="post-card-title">- ${propiedad.ubicacion} </h1>
                        </div>
                        <h1 class="post-card-price">${propiedad.precio}$</h1>
                    </div>
                    <div class="post-card-h3">
                    <div class="rating">★★★★</div>
                        <h3 class="post-card-personas">
                            ${propiedad.capacidad}
                            <img src="imgs/people.png" height="24">
                        </h3>
                    </div>
                </div>
            </div>
        </a>
        `
    }
}

renderizarCasas();