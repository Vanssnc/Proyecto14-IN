export const propiedades_alquiler = [
   {
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    baños:2,
    piscina: true,
    panelsolar: false,
    averdes: true,
    conectividad: true,
    costo: 2000,
    smoke: false,
    pets: true
    },

    {
    nombre: 'Apartamento luminoso con vista al mar',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar.',
    ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
    habitaciones: 3,
    baños:3,
    piscina: true,
    panelsolar: true,
    averdes: true,
    conectividad: false,
    costo: 2500,
    smoke: true,
    pets: true
    },

    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    baños:2,
    piscina: false,
    panelsolar: false,
    averdes: false,
    conectividad: true,
    costo: 2200,
    smoke: false,
    pets: false
    },

    {
      nombre: 'Apartamento pequeño y acogedor',
      src: 'https://media.istockphoto.com/id/1361546459/es/foto/nuevo-edificio-de-alquiler-en-un-desarrollo-de-viviendas-en-un-soleado-d%C3%ADa-de-oto%C3%B1o.jpg?s=1024x1024&w=is&k=20&c=b1zksCfLefyU2bhltYxJlXUmHtwpx_Zc9BjJCY-okgQ=',
      descripcion: 'Un apartamento perfecto para una o dos personas',
      ubicacion: '333 Woods, Colorado, CO 12390',
      habitaciones: 1,
      baños:1,
      piscina: true,
      panelsolar: true,
      averdes: true,
      conectividad: true,
      costo: 2700,
      smoke: false,
      pets: true,
      },

      {
      nombre: 'Casa de lujo',
      src: 'https://media.istockphoto.com/id/1148629418/es/foto/casa-o-casa-edificio-exterior-y-dise%C3%B1o-interior-mostrando-villa-de-piscina-tropical-con-jard%C3%ADn.jpg?s=1024x1024&w=is&k=20&c=XMgLB0A1M1naWus6ti0k-X2tFS-53O6viXi4O1hruJ0=',
      descripcion: 'Casa veraniega, especial para unas buenas vacaciones',
      ubicacion: '002 M Beach, Miami, MI 09832',
      habitaciones: 3,
      baños:3,
      piscina: true,
      panelsolar: false,
      averdes: true,
      conectividad: true,
      costo: 2900,
      smoke: true,
      pets: true
      },

      {
      nombre: 'Casa de campo',
      src: 'https://media.istockphoto.com/id/1414798334/es/foto/paisaje-id%C3%ADlico-en-los-alpes-con-chalet-de-monta%C3%B1a-y-vacas-en-primavera.jpg?s=1024x1024&w=is&k=20&c=-ZxFG011LjmOsW4ti-QFbYrLMb3Y3RM-gvdn1LHnEdY=',
      descripcion: 'Casa de campo totalmente apartada del ajetreo de la ciudad',
      ubicacion: '002 Field , Colorado, CO 09332',
      habitaciones: 3,
      baños:2,
      piscina: false,
      panelsolar: true,
      averdes: true,
      conectividad: false,
      costo: 2200,
      smoke: true,
      pets: true
      },

      {
      nombre: 'Departamento céntrico ',
      src: 'https://media.istockphoto.com/id/466418954/es/foto/brickwall-fachadas-de-brooklyn-en-nueva-york-estados-unidos.jpg?s=1024x1024&w=is&k=20&c=tNcalt4PZgMMhc24uIdGf4ZnFB9CeXpU61Ug5qy7VeQ=',
      descripcion: 'Departamento con buena ubicación en la ciudad',
      ubicacion: '002 Av 1 , New York , NY 00001',
      habitaciones: 1,
      baños:1,
      piscina: false,
      panelsolar: false,
      averdes: false,
      conectividad: true,
      costo: 2000,
      smoke: false,
      pets: false
      },


    

    ]

    let render = ""
        for (let propiedad of propiedades_alquiler){
            render += `

        <div id="alquiler" class="col-md-4 mb-4">
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
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                <p><i class="fa-solid fa-water-ladder"></i> ${propiedad.piscina ? "Cuenta con piscina" : "No cuenta con piscina"}</p>
                <p><i class="fa-solid fa-solar-panel"></i> ${propiedad.panelsolar ? "Cuenta con energía solar" : "No cuenta con energía solar"}</p>
                <p><i class="fa-solid fa-tree"></i> ${propiedad.averdes ? "Posee áreas verdes" : "No posee áreas verdes"}</p>
                <p><i class="fa-solid fa-road"></i> ${propiedad.conectividad ? "Buena conectividad" : "Terreno aislado"}</p>


                <p class=${propiedad.smoke ? "text-success" :"text-danger" }>
                  <i class=${propiedad.smoke ?"'fas fa-smoking'":"'fas fa-smoking-ban'"}></i>
                   ${propiedad.smoke ? "Permitido fumar" : "No se permite fumar"}
                </p>
                <p class=${propiedad.pets ? "text-success" :"text-danger" }>
                  <i class=${propiedad.pets ? "'fas fa-paw'" : "'fas fa-ban'"}></i> ${propiedad.pets ? "Mascotas permitidas" : "No se permiten mascotas"}
                </p>
              </div>
            </div>
        </div>
        
        `
        }

const ele = document.querySelector("#alquiler")
ele.innerHTML = render

