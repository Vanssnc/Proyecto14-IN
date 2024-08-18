const propiedades_ventas = [
    {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    baños:4,
    piscina: false,
    panelsolar: false,
    averdes: true,
    conectividad: true,
    costo: 5000,
    smoke: false,
    pets: false
    },

    {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road,Summit Peaks, CA 23456',
    habitaciones: 2,
    baños:1,
    piscina: false,
    panelsolar: true,
    averdes: true,
    conectividad: false,
    costo: 1200,
    smoke: true,
    pets: true
    },

    {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    baños:3,
    piscina: true,
    panelsolar: false,
    averdes: true,
    conectividad: false,
    costo: 4500,
    smoke: false,
    pets: true
    },

    {
    nombre: 'Casa grande en zona residencial',
    src: 'https://media.istockphoto.com/id/1436217023/es/foto/exterior-de-una-casa-suburbana-azul.jpg?s=1024x1024&w=is&k=20&c=lRolTEJa2alfPvYTom3znN5X2sPd0j2Vro64892tD2w=',
    descripcion: 'Especial para una familia y ubicada en una zona tranquila',
    ubicacion: '777 Second Street, Ohaio, OH 00090',
    habitaciones: 4,
    baños:2,
    piscina: true,
    panelsolar: false,
    averdes: true,
    conectividad: true,
    costo: 2700,
    smoke: true,
    pets: true
    },

    {
    nombre: 'Casa en la playa',
    src: 'https://media.istockphoto.com/id/576912916/es/foto/cala-gat-en-ratjada-mallorca-hermosa-playa-y-costa.jpg?s=1024x1024&w=is&k=20&c=mNxk5SYcLaz8rGIZXMP3K2T9EWGi3h1AnnB5HFDJuPE=',
    descripcion: 'Literalmente al lado del mar',
    ubicacion: '777 Beach, California, CA 07640',
    habitaciones: 4,
    baños:2,
    piscina: false,
    panelsolar: false,
    averdes: true,
    conectividad: false,
    costo: 2900,
    smoke: true,
    pets: true
    },

    {
    nombre: 'Casa en el bosque',
    src: 'https://media.istockphoto.com/id/1578254574/es/foto/imagen-generada-por-computadora-de-una-casa-visualizaci%C3%B3n-arquitect%C3%B3nica-renderizado-3d-dise%C3%B1o.jpg?s=1024x1024&w=is&k=20&c=xOd9N1ixDv7tbpND9p3gIEtQlTlgrJtjcoObY--kLI8=',
    descripcion: 'Rodeada de naturaleza',
    ubicacion: '712 Woods, Colorado, CO 11112',
    habitaciones: 2,
    baños:1,
    piscina: false,
    panelsolar: true,
    averdes: true,
    conectividad: false,
    costo: 2500,
    smoke: false,
    pets: true
    },

    {
    nombre: 'Apartamento pequeño céntrico',
    src: 'https://media.istockphoto.com/id/813211306/es/foto/edificios-hist%C3%B3ricos-en-la-ciudad-de-nueva-york.jpg?s=1024x1024&w=is&k=20&c=JbWvOelzxyOtQ8JN5hBNQb_PcQ9_8Xo39-YbW5YyFVU=',
    descripcion: 'Pequeño, pero con muy buena ubicación',
    ubicacion: '712 Av, New York, NY 10092',
    habitaciones: 2,
    baños:1,
    piscina: false,
    panelsolar: false,
    averdes: false,
    conectividad: true,
    costo: 2100,
    smoke: false,
    pets: false
    },

    
  


    ]

    let render = ""
        for (let propiedad of propiedades_ventas){
            render += `

          <div id="venta" class="col-md-4 mb-4">
            <div class="card">
              <img
                src=${propiedad.src}
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedad.nombre}
                </h5>
                <p class="card-text">
                  ${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${propiedad.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>
                <p><i class="fa-solid fa-water-ladder"></i> ${propiedad.piscina ? "Cuenta con piscina" : "No cuenta con piscina"}</p>
                <p><i class="fa-solid fa-solar-panel"></i> ${propiedad.panelsolar ? "Cuenta con energía solar" : "No cuenta con energía solar"}</p>
                <p><i class="fa-solid fa-tree"></i> ${propiedad.averdes ? "Posee áreas verdes" : "No posee áreas verdes"}</p>
                <p><i class="fa-solid fa-road"></i> ${propiedad.conectividad ? "Buena conectividad" : "Terreno aislado"}</p>

                <p class=${propiedad.smoke ? "text-success" :"text-danger" }>
                  <i class=${propiedad.smoke ?"'fas fa-smoking'":"'fas fa-smoking-ban'"}></i> ${propiedad.smoke ? "Permitido fumar" : "No se permite fumar"}
                </p>
                <p class=${propiedad.pets ? "text-success" :"text-danger" }>
                  <i class=${propiedad.pets ? "'fas fa-paw'" : "'fas fa-ban'"}></i> ${propiedad.pets ? "Mascotas permitidas" : "No se permiten mascotas"}
                </p>
              </div>
            </div>
            </div>

          
`
 }
 const ele = document.querySelector("#venta")
ele.innerHTML = render


