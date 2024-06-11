const listadoPropiedades = [
    {
        id: 1,
        titulo: "Encantadora Casa de Playa",
        precio: 260,
        descripcion: "Esta acogedora casa de playa en Pinamar es ideal para disfrutar de unas vacaciones relajantes. Con 3 dormitorios, 2 baños, una cocina abierta, y una sala de estar luminosa, la propiedad ofrece un ambiente cálido y familiar. El jardín privado y la terraza con parrilla son perfectos para reuniones al aire libre.",
        capacidad: 6,
        estrellas: 5,
        propietario: 1,
        ubicacion: "Pinamar",
        imagenPortada: "./imgs/Casa Pinamar 1.jpg",
        imagenes:[
            "./imgs/Casa pinamar interior 1.jpg",
            "./imgs/casa pinamar interior  2.jpg",
            "./imgs/casa pinamar interior 3.jpg"
        ]
    },
    {
        id: 2,
        titulo: "Casa Contemporánea",
        precio: 180,
        descripcion: "Descubre esta casa contemporánea situada en una de las zonas más exclusivas de Mar del Plata. Con 4 dormitorios, 3 baños, una cocina totalmente equipada y una sala de estar con ventanales que ofrecen impresionantes vistas al mar, esta propiedad es perfecta para quienes buscan lujo y comodidad. Además, cuenta con un amplio jardín y una piscina infinita.",
        capacidad: 4,
        estrellas: 4,
        propietario: 1,
        ubicacion: "Mar del Plata",
        imagenPortada: "./imgs/casa mar de plata 1.jpg",
        imagenes:[
            "./imgs/casa mar de plata interior 1.jpg",
            "./imgs/casa mar del plata interior 2.jpg",
            "./imgs/casa mar del plata interior 3.jpg"
        ]
    },

    {
        id: 3,
        titulo: "Cabaña Alpina del Bosque",
        precio: 255,
        descripcion: "Situada en el exclusivo bosque de Cariló, esta elegante residencia combina lujo y naturaleza. Con 5 dormitorios, 4 baños, una cocina de chef, y una amplia sala de estar con chimenea, es ideal para grandes familias o grupos. El extenso jardín y la piscina climatizada ofrecen un oasis de tranquilidad.",
        capacidad: 2,
        estrellas: 3,
        propietario: 1,
        ubicacion: "Carilo",
        imagenPortada: "./imgs/casa carilo 1.jpg",
        imagenes:[
            "./imgs/casa carilo interior 1.jpg",
            "./imgs/baño cabaña alpina del bosque.jpg",
            "./imgs/imgscocina cabaña alpina.jpg"
        ]
    },
    {
        id: 4,
        titulo: "Residencia Elegante",
        precio: 354,
        descripcion: "Vive en el corazón de la costa atlántica en esta elegante residencia en Miramar. Con 4 dormitorios, 3 baños, una cocina moderna y completamente equipada, y una sala de estar espaciosa con chimenea, esta casa combina confort y estilo. El amplio jardín con piscina y la terraza con vistas al mar crean el escenario perfecto para relajarse y disfrutar de momentos inolvidables.",
        capacidad: 8,
        estrellas: 4,
        propietario: 1,
        ubicacion: "Miramar",
        imagenPortada: "./imgs/casa miramar 1.jpg",
        imagenes:[
            "./imgs/casa miramar interior 1.jpg",
            "./imgs/casa miramar interior 2.jpg",
            "./imgs/casa miramar interior 3.jpg"
        ]
    },
    {
        id: 5,
        titulo: "Cruz del Sur",
        precio: 278,
        descripcion: "Disfruta de la modernidad y el confort en esta casa contemporánea en Villa Gesell. Con 4 dormitorios, 3 baños, una cocina moderna, y una sala de estar con grandes ventanales, esta propiedad ofrece luminosidad y amplitud. El jardín y la terraza con jacuzzi son ideales para relajarse y disfrutar del paisaje.",
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
        descripcion: "Esta encantadora casa en Las Toninas es perfecta para quienes buscan tranquilidad y proximidad a la playa. Con 3 dormitorios, 2 baños, una cocina funcional y una sala de estar con amplios ventanales, esta propiedad ofrece un ambiente cálido y luminoso. El jardín privado, con zona de parrilla y espacio para juegos, es ideal para disfrutar en familia o con amigos.",
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
        titulo: "Villa de Lujo",
        precio: 234,
        descripcion: "Experimenta la máxima elegancia en esta espectacular villa situada en Costa Esmeralda, un exclusivo barrio privado. Con 5 dormitorios, 4 baños, una cocina gourmet y una amplia sala de estar con techos altos y grandes ventanales, esta propiedad ofrece un diseño moderno y sofisticado. El exterior cuenta con un extenso jardín, una piscina climatizada y una terraza con parrilla, ideal para disfrutar de momentos al aire libre con familiares y amigos, todo en un entorno de privacidad y tranquilidad.",
        capacidad: 4,
        estrellas: 3,
        propietario: 1,
        ubicacion: "Costa Esmerarlda",
        imagenPortada: "./imgs/casa costa esmeralda.jpg",
        imagenes:[
            "./imgs/casa costa esmeralda.jpg",
            "./imgs/casa costa esmeralda interior 2.jpg",
            "./imgs/casa costa esmeralda interior 3.jpg"
        ]
    },
    {
        id: 8,
        titulo: "Ohana del bosque",
        precio: 300,
        descripcion: "Encuentra el hogar perfecto para tu familia en esta espaciosa casa en Necochea. Con 4 dormitorios, 2 baños, una cocina completa, y una sala de estar acogedora, esta propiedad tiene todo lo necesario para la vida familiar. El patio trasero con juegos para niños y la parrilla hacen de esta casa un lugar ideal para convivir.",
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