
// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files
const Proyecto = {
    data: function () {
        return {
            proyectos: [
              {id:1,nombre: 'Web',cliente:'Bright Loritos',foto:'/img/portadas/brightloritos_prin.png',foto_portada:'/img/portadas/bright_lori_port.png', desc:'Brightloritos, es una academia de idiomas enfocada en los niños, teniendo en cuenta siempre a la diversión como parte fundamental en el aprendizaje de sus alumnos. Debido a las distintas sucursales, distintos horarios y distintas edades de los alumnos se tuvieron que realizar un procesos de diseño de la información de la mano con el cliente segun las prioridades y necesidades del negocio. El desarrollo de esta página, se hizo en paralelo con un centro de aprendizaje online para los profesores de Brightloritos.',meta_pro:'Arquitectura de la información / Design Thinking / User Experience / Customer Journey Map', fotos:[
                { id:1,nombre_foto:'Bienvenida',foto:'/img/proyectos/pawschool01.png'},
                { id:2,nombre_foto:'vivagym',foto:'/img/proyectos/pawschool02.png'},
                { id:2,nombre_foto:'vivagym',foto:'/img/proyectos/pawschool03.png'}
              ] },
              {id:2,nombre: 'Sistema para voluntarios',cliente:'VivaGYM',foto:'/img/portadas/vivagymejprin.png',foto_portada:'/img/portadas/vivagymej.png', desc:'La empresa Viva GYM tenía la necesidad de incentivar a sus colaboradores a participar, de forma voluntaria, en los eventos corporativo en los que se realizan entregas de departamentos a personas de bajos recursos. Con esta premisa se empezó a aterrizar los beneficios que traería el uso de un software para este fin. Se empezó a establecer, de la mano con los equipos de proyectos y sistemas del cliente, el conjunto de puntos de contacto(Touch points) que habría a lo largo de la inscripción. También trabajamos en que la empresa adopte un enfoque ágil del desarrollo del producto(Evitando trabajar a manera de cascada, desarrollando el 100% del proyecto y pniendolo en marcha) estableciendo prototipos y versiones, con las que se iteraba teniendo el feedback de los usuarios en las distintas etapas. Através de este enfoque se descubrieron en el camino más funcionalidades de las que se habían estimado en un inicio, incluso dando lugar a nuevas herramientas a desarrollar que conecte con esta.',meta_pro:'Investigación de usuarios / Agile / Arquitectura de la información / Design Thinking /Lean User Experience / Customer Journey Map ', fotos:[
                { id:1,nombre_foto:'Bienvenida',foto:'/img/proyectos/pawschool01.png'},
                { id:2,nombre_foto:'vivagym',foto:'/img/proyectos/pawschool02.png'},
                { id:2,nombre_foto:'vivagym',foto:'/img/proyectos/pawschool03.png'}
              ] },
              {id:3,nombre: 'Sistema de entregas de departamentos',cliente:'VivaGYM',foto:'/img/portadas/vivagymadminprin.png',foto_portada:'/img/portadas/vivagymadmin.png', desc:'Con el éxito de el desarrollo del proyecto entregando juntos, La empresa viva GYM vio una nueva oportunidad de mejora:"Aparte de registrarse para participar en los eventos corporativos de labor social, había una tarea que se hacía en papel, que era el marcar los departamentos que eran entregados, a manera de una cartilla de bingo, para luego dársela a los encargados y se ingresen en el CRM de la compañia uno a uno los departamentos entregados". Ya con una visión enfocada en la innovación, debido a los proyectos vistos juntos utilizando design thinkin, se diseño y desarrollo una herramienta administrativa que permita a través de una interfáz táctil registrar los departamentos que estan siendo entregados y luego un un clic exportar dicha información al CRM de la empresa, através de un API Rest. Esta mejora hizo que el proceso de registro de entregas de departamento pasar de tomar una semana a durar cuarenta minutos.' ,meta_pro:'Investigación de Usuarios / Rediseño de procesos / Arquitectura de la información / Design Thinking / Lean User Experience / Customer Journey Map', fotos:[
                { id:1,nombre_foto:'Bienvenida',foto:'/img/proyectos/pawschool01.png'},
                { id:2,nombre_foto:'vivagym',foto:'/img/proyectos/pawschool02.png'},
                { id:2,nombre_foto:'vivagym',foto:'/img/proyectos/pawschool03.png'}
              ]},
              {id:4,nombre: 'Sistema de reservas',cliente:'Pawadin',foto:'/img/portadas/pawadinprin.png',foto_portada:'/img/portadas/port_pawadin.png', desc:'Pawadin es una plataforma de economía colaborativa que permite a las personas que , por falta de tiempo, buscan los servicios de hospedaje y paseos caninos, encuentrene a personas que brinden dichos servicios. La plataforma también permite que aparte de realizar las reservas, se pueda hacer un seguimiento del servicio que se está prestando y cada uno de sus estados. Este proyecto ganó el premio nivel nacional de STARTUP PERÚ en la categoría de proyectos innovadores' ,meta_pro:'Statup Perú / Marketing digital / Lean Startup / Arquitectura de la información / Design Thinking / User Experience / Customer Journey Map', fotos:[
                { id:1,nombre_foto:'Bienvenida',foto:'/img/proyectos/pawschool01.png'},
                { id:2,nombre_foto:'vivagym',foto:'/img/proyectos/pawschool02.png'},
                { id:2,nombre_foto:'vivagym',foto:'/img/proyectos/pawschool03.png'}
              ]},
              {id:5,nombre: 'pawadin school',cliente:'Pawadin',foto:'/img/portadas/paw_school_prin.png',foto_portada:'/img/portadas/pawschool_port.png', desc:'Ya que Pawadin está entre los usuarios del servicio y los proveedores, aparte de los procesos de filtrado, tanto en documentación como en entrevistas antes de que los proveedores puedan publicar su perfil, se diseño y desarrollo una escuela virtual con talleres de atención al cliente y cuidado básico canino, para tratar de obtimizar el servicio.' ,meta_pro:'Arquitectura de la información / Design Thinking / User Experience / Customer Journey Map', fotos:[
                { id:1,nombre_foto:'Bienvenida',foto:'/img/proyectos/pawschool01.png'},
                { id:2,nombre_foto:'vivagym',foto:'/img/proyectos/pawschool02.png'},
                { id:2,nombre_foto:'vivagym',foto:'/img/proyectos/pawschool03.png'}
              ]},
              {id:6,nombre: 'CRM',cliente:'Inet',foto:'/img/portadas/inet_principal.png',foto_portada:'/img/portadas/inet_portada.png', desc:'La empresa Inet, que distribuye productos electrónicos de la marca Schneider, necesitaba hacer un mejor control sobre la fuerza de ventas, las visitas a los clientes y el estatus de cada relación. Se realizó el levantamiento de la información y las necesidades del cliente. Se estudió incluso el punto de vista de los vendedores sobre la manera en la que abordaban las reuniones, y se estableció un prototipo que iba a ser usado en un inicio. Atentos al feedback, fuimos mejorando la herramienta en cada versión.' ,meta_pro:'Investigación de usuarios / Tests de usabilidad / Arquitectura de la información / Design Thinking / User Experience / Customer Journey Map', fotos:[
                { id:1,nombre_foto:'Bienvenida',foto:'/img/proyectos/pawschool01.png'},
                { id:2,nombre_foto:'vivagym',foto:'/img/proyectos/pawschool02.png'},
                { id:2,nombre_foto:'vivagym',foto:'/img/proyectos/pawschool03.png'}
              ]},
              {id:7,nombre: 'App Reservas',cliente:'Pawadin',foto:'/img/portadas/app_paw_prin.png',foto_portada:'/img/portadas/apw_app_port.png', desc:'Decidimos llevar la heramienta de gestión de reservas que suan los cuidadores y paseadores caninos a los móviles de los proveedores registrados, así que desarrollamos una app que puedan descargar.' ,meta_pro:'Arquitectura de la información / Design Thinking / User Experience / Customer Journey Map', fotos:[
                { id:1,nombre_foto:'Bienvenida',foto:'/img/proyectos/pawschool01.png'},
                { id:2,nombre_foto:'vivagym',foto:'/img/proyectos/pawschool02.png'},
                { id:2,nombre_foto:'vivagym',foto:'/img/proyectos/pawschool03.png'}
              ]}
            ]
          }
    },methods: {
          
      back: function (id) {
          this.$router.push('/')
        /*alert(message)*/
      },
      instanciarsesiones: function () {
        /*$('.your-class').slick(
          {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true
             }
             );*/
             
       console.log("HOLAAAA5");
       /* alert("Hello! I am an alert box!!");*/
    }},
    template: `
      <div class="proyecto_detalle">
      <div class="row" style="margin-bottom:20px;">
      <div class="col-3">
        <div v-on:click="back()"> <span style="cursor: pointer;">Regresar</span></div>
        </div>
        <div class="col-9" style="text-align:center">
        <div>Detalle proyecto</div>
        </div>
      </div> 

      <div v-for="proyecto in proyectos" class="row">
        
        <div v-if="proyecto.id==$route.params.id " class="col-12">
        <div class="titulo_detalle" >Proyecto: <b >{{ proyecto.nombre }}</b></div>
        <div class="sub_titulo_detalle" >Cliente: <b >{{ proyecto.cliente }}</b></div>
        
        <div>
        <p style="opacity: 0.57;">{{ proyecto.meta_pro }}</p>
        <p>{{ proyecto.desc }}</p>
        
        

     
        </div>
        <!--slider-->
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div v-for="proyectoimg in proyecto.fotos"  class="carousel-item ">
      <img class="d-block w-100"  src="/img/proyectos/pawschool01.png" alt="First slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
   <!-- Fin slider -->
        </div>

        </div>

        



        

      </div>
    `, mounted(){
      this.instanciarsesiones();
    }
  }
  const Home ={
    data: function () {
        return {
        nombre: 'Arturo Aguilar',
        profesion:'UX/CX Diseño de productos digitales',
        mail:'aatbjj2@gmail.com',
        linkedin:"https://linkedin.com/in/arturoat/",
        facebook:"https://www.facebook.com/arturo.aguilartobies",
        instagram:"https://www.instagram.com/carcochacosmica/",
        despedida:'Si deseas contactarme para ayudarte en algún proyecto, no dudes en escribirme.',
        descripcion:'Mi experiencia viene del mundo del desarrollo de productos y servicios digitales, e investigación de usuarios. Me encanta involucrarme en campos de la innovación, transformación digital y diseño de experiencias, tanto en el entorno digital como en el físico. Estoy seguro que el centro de todo buen diseño, tiene que ver con el entendimiento profundo de las personas.',
        competencias: [
          { nombre: 'User Experience', tipo:1 },
          { nombre: 'Customer Experience', tipo:1 },
          { nombre: 'Investigación de usuarios', tipo:1 },
          { nombre: 'Investigación de mercado', tipo:1 },
          { nombre: 'Design Thinking', tipo:1 },
          { nombre: 'Marketing Digital', tipo:2},
          { nombre: 'Lean Startup', tipo:2},
          { nombre: 'Marcos de trabajo Agile', tipo:2},
          { nombre: 'Business Intelligence', tipo:2},
          { nombre: 'Scrum Master',tipo:2},
          { nombre: 'Angularjs y Angular',tipo:3},
          { nombre: 'Vuejs',tipo:3},
          { nombre: 'Mysql',tipo:3},
          { nombre: 'php',tipo:3},
          { nombre: 'larabel',tipo:3},
          { nombre: 'wordpress y woocommerce',tipo:3}
        ],
        proyectos: [
          {id:1,nombre: 'Web',cliente:'Bright Loritos',foto:'/img/portadas/brightloritos_prin.png', desc:'Desc proyecto 0',meta_pro:'meta 0' },
          {id:2,nombre: 'Sistema para voluntarios ',cliente:'VivaGYM',foto:'/img/portadas/vivagymejprin.png', desc:'Desc proyecto 1',meta_pro:'meta 1' },
          {id:3,nombre: 'Sistema de entregas de departamentos',cliente:'VivaGYM',foto:'/img/portadas/vivagymadminprin.png', desc:'Desc proyecto 2' ,meta_pro:'meta 2'},
          {id:4,nombre: 'Sistema de reservas',cliente:'Pawadin',foto:'/img/portadas/pawadinprin.png', desc:'Desc proyecto 3' ,meta_pro:'meta 3'},
          {id:5,nombre: 'pawadin school',cliente:'Pawadin',foto:'/img/portadas/paw_school_prin.png', desc:'Desc proyecto 4' ,meta_pro:'meta 4' },
          {id:6,nombre: 'CRM',cliente:'Inet',foto:'/img/portadas/inet_principal.png', desc:'Desc proyecto 5' ,meta_pro:'meta 5' },
          {id:7,nombre: 'App Reservas',cliente:'Pawadin',foto:'/img/portadas/app_paw_prin.png', desc:'Desc proyecto 6' ,meta_pro:'meta 6' }
        ],
        estudios: [
          { nombre: 'Master en Neuromarketing',lugar:'link foto 1', desc:'Desc estudios 1' },
          { nombre: 'Diplomado en Gestión de Recursos Humanos',lugar:'link foto 2', desc:'Desc estudios 2'},
          { nombre: 'Diplomado en publicidad digital',lugar:'link foto 3', desc:'Desc estudios 3'}
        ]
      }},  methods: {
          
        say: function (id) {
            this.$router.push('/proyecto/'+id)
          /*alert(message)*/
        }
      }, template: `<div> <div class="row seccion hero">   
  <div class="col-12 nombre">{{ nombre }}</div> 
   <div class="col-12 profesion">{{ profesion}}</div>
   <div class="col-12 img_redes_contenedor">
   <a v-bind:href="facebook"><img class="img_redes" src="img/icon/facebook.png"/></a>
   <a v-bind:href="linkedin"><img class="img_redes" src="img/icon/in.png"/></a>
   <a v-bind:href="instagram"><img class="img_redes" src="img/icon/instagram.png"/></a>
   </div>
     </div>
     <div class="row seccion sobremi">
     <div  class="col-12 titulo-seccion">Sobre mí</div> 
     <div  class="col-12">
     <p class="col-12  descripcion">{{ descripcion }}</p>
    </div>

     </div>

     <div class="row seccion proyectos">
     <div  class="col-12 titulo-seccion ">Proyectos</div> 
     
     
     
     <div  v-for="proyecto in proyectos" v-on:click="say(proyecto.id)" class="col-12 col-md-4 img_container" style="cursor: pointer; margin-top:10px;margin-bottom:10px;">
     
     <img v-bind:src="proyecto.foto" class="img-fluid image">
     <div class="overlay">
     <div class="text">{{ proyecto.cliente }}<br>{{ proyecto.nombre }}    </div>
     </div>
      </div>
     
     </div>

<div class="row seccion habilidades">
<div  class="col-12 titulo-seccion">Habilidades</div> 
<div class="col-12">

<div  class="row" style="padding-top:3%;padding-bottom:3%;background-color: #F5F5F5;">
<div class="titulo_grupo_habilidades col-12 col-md-2" >
<img src="img/icon/web_design.png" style="max-width:70px">
</div>
<div class="grupo_habilidades col-12 col-md-10">
<span class="mini-item" v-for="competencia in competencias"  v-if="competencia.tipo==1 ">
   {{ competencia.nombre }}
 </span>
 </div>
 </div>
 
 
 <div  class="row" style="padding-top:3%;padding-bottom:3%;">
 <div class="titulo_grupo_habilidades col-12 col-md-2">
 <img src="img/icon/management.png" style="max-width:70px">
 </div>
 <div class="grupo_habilidades col-12 col-md-10">
<span class="mini-item" v-for="competencia in competencias"  v-if="competencia.tipo==2 ">
   {{ competencia.nombre }}
 </span>
 </div>
 </div>
 
 <div  class="row" style="padding-top:3%;padding-bottom:3%;background-color: #F5F5F5;">
 <div class="titulo_grupo_habilidades col-12 col-md-2">
 <img src="img/icon/web_developement.png" style="max-width:70px">
 </div>
 <div class="grupo_habilidades col-12 col-md-10">
<span class="mini-item" v-for="competencia in competencias"  v-if="competencia.tipo==3 ">
   {{ competencia.nombre }}
 </span>
 </div>
 </div>
 </div>
</div>


<div class="row seccion contacto"  >

   <div  class="col-12 titulo-seccion">Conversemos</div> 
   <div  class="col-12">
<p>{{ despedida }}</p>

</div>

<div  class="col-12" style="padding-top:20px;">
<a class="btnmail" v-bind:href="[\'mailto:\' + mail]">Enviar Mensaje</a>
</div>
</div>
</div> ` 

}
  const UserHome = { template: `<div>Home</div>` }
  const UserProfile = { template: '<div>Profile</div>' }
  const UserPosts = { template: '<div>Posts</div>' }
// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const router = new VueRouter({
    routes: [
      { path: '/', component: Home },
      { path: '/proyecto/:id', component: Proyecto,
        children: [
          // UserHome will be rendered inside User's <router-view>
          // when /user/:id is matched
          { path: '', component: UserHome },
                  
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          { path: 'profile', component: UserProfile },
  
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          { path: 'posts', component: UserPosts }
        ]
      }
    ]
  })

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.


// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
/*

const app = new Vue({
    router
  }).$mount('#app')
  */
  // Now the app has started!

  var app = new Vue({
    el: '#app',
    data: {
      nombre: 'Arturo Aguilar',
      profesion:'UX/CX Diseño de productos digitales',
      descripcion:'Mi experiencia viene del mundo del desarrollo de productos y servicios digitales, e investigación de usuarios. Me encanta involucrarme en campos de la innovación, transformación digital y diseño de experiencias, tanto en el entorno digital como en el físico. Estoy seguro que el centro de todo buen diseño, tiene que ver con el entendimiento profundo de las personas.',
      competencias: [
        { nombre: 'User Experience' },
        { nombre: 'Customer Experience' },
        { nombre: 'Investigación de usuarios' },
        { nombre: 'Investigación de mercado' },
        { nombre: 'Design Thinking' },
        { nombre: 'Marketing Digital'},
        { nombre: 'Lean Startup'},
        { nombre: 'Marcos de trabajo Agile'},
        { nombre: 'Scrum Master'},
        { nombre: 'Web development'}
      ],
      proyectos: [
        { id:1,nombre: 'Web',cliente:'Bright Loritos',foto:'/img/proyecto.png', desc:'Desc proyecto 0',meta_pro:'meta 0' },
        { id:2,nombre: 'vivagym ',cliente:'VivaGYM',foto:'/img/proyecto.png', desc:'Desc proyecto 1',meta_pro:'meta 1' },
        { id:3,nombre: 'vivagym User',cliente:'VivaGYM',foto:'/img/portadas/vivagymadminprin.png', desc:'Desc proyecto 2' ,meta_pro:'meta 2'},
        { id:4,nombre: 'Sistema de reservas',cliente:'Pawadin',foto:'/img/proyecto.png', desc:'Desc proyecto 3' ,meta_pro:'meta 3'},
        { id:5,nombre: 'pawadin school',cliente:'Pawadin',foto:'/img/proyecto.png', desc:'Desc proyecto 4' ,meta_pro:'meta 4' },
        { id:6,nombre: 'CRM',cliente:'Inet',foto:'/img/proyecto.png', desc:'Desc proyecto 5' ,meta_pro:'meta 5' },
        { id:7,nombre: 'App Reservas',cliente:'Pawadin',foto:'/img/proyecto.png', desc:'Desc proyecto 6' ,meta_pro:'meta 6' }
      ],
      estudios: [
        { nombre: 'Master en Neuromarketing',lugar:'link foto 1', desc:'Desc estudios 1' },
        { nombre: 'Diplomado en Gestión de Recursos Humanos',lugar:'link foto 2', desc:'Desc estudios 2'},
        { nombre: 'Diplomado en publicidad digital',lugar:'link foto 3', desc:'Desc estudios 3'}
      ]
    },
    router
    
  }).$mount('#app')


