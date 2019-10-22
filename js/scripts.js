
// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files
const Proyecto = {
    data: function () {
        return {
            proyectos: [
              {id:1,nombre: 'Web',cliente:'Bright Loritos',foto:'/proyectos/cv/img/proyecto.png',foto_portada:'/proyectos/cv/img/proyecto_portada.png', desc:'Desc proyecto 0',meta_pro:'meta 0' },
              {id:2,nombre: 'vivagym ',cliente:'VivaGYM',foto:'/proyectos/cv/img/proyecto.png',foto_portada:'/proyectos/cv/img/proyecto_portada.png', desc:'Desc proyecto 1',meta_pro:'meta 1' },
              {id:3,nombre: 'vivagym User',cliente:'VivaGYM',foto:'/proyectos/cv/img/proyecto.png',foto_portada:'/proyectos/cv/img/proyecto_portada.png', desc:'Desc proyecto 2' ,meta_pro:'meta 2'},
              {id:4,nombre: 'Sistema de reservas',cliente:'Pawadin',foto:'/proyectos/cv/img/proyecto.png',foto_portada:'/proyectos/cv/img/proyecto_portada.png', desc:'Desc proyecto 3' ,meta_pro:'meta 3'},
              {id:5,nombre: 'pawadin school',cliente:'Pawadin',foto:'/proyectos/cv/img/proyecto.png',foto_portada:'/proyectos/cv/img/proyecto_portada.png', desc:'Desc proyecto 4' ,meta_pro:'meta 4' },
              {id:6,nombre: 'CRM',cliente:'Inet',foto:'/proyectos/cv/img/proyecto.png',foto_portada:'/proyectos/cv/img/proyecto_portada.png', desc:'Desc proyecto 5' ,meta_pro:'meta 5' },
              {id:7,nombre: 'App Reservas',cliente:'Pawadin',foto:'/proyectos/cv/img/proyecto.png',foto_portada:'/proyectos/cv/img/proyecto_portada.png', desc:'Desc proyecto 6' ,meta_pro:'meta 6' }
            ]
          }
    },
    template: `
      <div class="proyecto">
        <div v-for="proyecto in proyectos" class="col">
        <div v-if="proyecto.id==$route.params.id " >
        <h2>Proyecto: {{ proyecto.nombre }}</h2>
        <h3>Cliente: {{ proyecto.cliente }}</h3>
        <img v-bind:src="proyecto.foto_portada" class="img-fluid">
        <p>{{ proyecto.meta_pro }}</p>
        <p>{{ proyecto.desc }}</p>
        </div>
        </div>
        <router-view></router-view>
      </div>
    `
  }
  const Home ={
    data: function () {
        return {
        nombre: 'Arturo Aguilar',
        profesion:'UX/CX Diseño de productos digitales',
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
          {id:1,nombre: 'Web',cliente:'Bright Loritos',foto:'/proyectos/cv/img/proyecto.png', desc:'Desc proyecto 0',meta_pro:'meta 0' },
          {id:2,nombre: 'vivagym ',cliente:'VivaGYM',foto:'/proyectos/cv/img/proyecto.png', desc:'Desc proyecto 1',meta_pro:'meta 1' },
          {id:3,nombre: 'vivagym User',cliente:'VivaGYM',foto:'/proyectos/cv/img/proyecto.png', desc:'Desc proyecto 2' ,meta_pro:'meta 2'},
          {id:4,nombre: 'Sistema de reservas',cliente:'Pawadin',foto:'/proyectos/cv/img/proyecto.png', desc:'Desc proyecto 3' ,meta_pro:'meta 3'},
          {id:5,nombre: 'pawadin school',cliente:'Pawadin',foto:'/proyectos/cv/img/proyecto.png', desc:'Desc proyecto 4' ,meta_pro:'meta 4' },
          {id:6,nombre: 'CRM',cliente:'Inet',foto:'/proyectos/cv/img/proyecto.png', desc:'Desc proyecto 5' ,meta_pro:'meta 5' },
          {id:7,nombre: 'App Reservas',cliente:'Pawadin',foto:'/proyectos/cv/img/proyecto.png', desc:'Desc proyecto 6' ,meta_pro:'meta 6' }
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
   

     </div>
     <div class="row seccion sobremi">
     <div class="col-12 titulo-seccion">Sobre mí</div> 
     <div class="col-12">
     <p class="col-12  descripcion">{{ descripcion }}</p>
    </div>
     </div>
<div class="row seccion habilidades">
<div class="col-12 titulo-seccion">Habilidades</div> 
<div class="col-4">
<span class="mini-item" v-for="competencia in competencias"  v-if="competencia.tipo==1 ">
   {{ competencia.nombre }}
 </span>
 </div>
 <div class="col-4">
<span class="mini-item" v-for="competencia in competencias"  v-if="competencia.tipo==2 ">
   {{ competencia.nombre }}
 </span>
 </div>
 <div class="col-4">
<span class="mini-item" v-for="competencia in competencias"  v-if="competencia.tipo==3 ">
   {{ competencia.nombre }}
 </span>
 </div>

</div>
<div class="row seccion">
   <span class="col-12 titulo-seccion">Proyectos</span> 
<div v-for="proyecto in proyectos" v-on:click="say(proyecto.id)" class="col-4" style="cursor: pointer;">
{{ proyecto.cliente }}-{{ proyecto.nombre }}    
<img v-bind:src="proyecto.foto" class="img-fluid">
  
 </div>

</div>

<div class="seccion">
   <span class="col-12 titulo-seccion">Estudios</span> 
<li v-for="estudio in estudios">
  <b>{{ estudio.nombre }}</b>- {{ estudio.lugar }}-{{ estudio.desc }}
 </li>
</div></div> ` 

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
        { id:1,nombre: 'Web',cliente:'Bright Loritos',foto:'/proyectos/cv/img/proyecto.png', desc:'Desc proyecto 0',meta_pro:'meta 0' },
        { id:2,nombre: 'vivagym ',cliente:'VivaGYM',foto:'/proyectos/cv/img/proyecto.png', desc:'Desc proyecto 1',meta_pro:'meta 1' },
        { id:3,nombre: 'vivagym User',cliente:'VivaGYM',foto:'/proyectos/cv/img/proyecto.png', desc:'Desc proyecto 2' ,meta_pro:'meta 2'},
        { id:4,nombre: 'Sistema de reservas',cliente:'Pawadin',foto:'/proyectos/cv/img/proyecto.png', desc:'Desc proyecto 3' ,meta_pro:'meta 3'},
        { id:5,nombre: 'pawadin school',cliente:'Pawadin',foto:'/proyectos/cv/img/proyecto.png', desc:'Desc proyecto 4' ,meta_pro:'meta 4' },
        { id:6,nombre: 'CRM',cliente:'Inet',foto:'/proyectos/cv/img/proyecto.png', desc:'Desc proyecto 5' ,meta_pro:'meta 5' },
        { id:7,nombre: 'App Reservas',cliente:'Pawadin',foto:'/proyectos/cv/img/proyecto.png', desc:'Desc proyecto 6' ,meta_pro:'meta 6' }
      ],
      estudios: [
        { nombre: 'Master en Neuromarketing',lugar:'link foto 1', desc:'Desc estudios 1' },
        { nombre: 'Diplomado en Gestión de Recursos Humanos',lugar:'link foto 2', desc:'Desc estudios 2'},
        { nombre: 'Diplomado en publicidad digital',lugar:'link foto 3', desc:'Desc estudios 3'}
      ]
    },
    router
    
  }).$mount('#app')


