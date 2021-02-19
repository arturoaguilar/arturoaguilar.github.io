const escHero = {
  data() {
    return {
      mensaje: "Taksumaqui sempucriaco",
      portfolio: {
        name: "Arturo Aguilar",
        profession: [
          { name: "Escritura de libros", link: "url UX", state: 1, icono: "url imagen ícono A " },
          { name: "Guiones", link: "Link User Research", state: 1, icono: "url imagen C" },
          { name: "Reseñas", link: "Link Fron end", state: 1, icono: "url imagen D" }
        ],
        message: "Una de mis grandes pasiones es contar historias, y el medio por el que mejor lo hago es la escritura. Tengo publicado un libro, escribo reseñas sobre libros en Goodreads como en instagram y este año comencé un podcast de terror con un poco de comedia."

      },
      abilities: [
        { id: "001", name: "Me encantan los generos de terror, negro, comedia y misterio.", type: 1, typeName: "Escritura", level: 3 },
        { id: "007", name: "Mi primer libro(insomnes y patriotas) es del genero negro, aquel que muestra una ciudad decadente controlada por el crimen, y sátira, criticando la falsa idea de normalidad que puede llegar a tener la sociedad de hoy. Mi siguiente libro que está en proceso pertenecerá al género del terror.", type: 1, typeName: "Escritura", level: 3 }
       /* { id: "008", name: "Me gusta la generación de contenidos y la lectura. Por lo que ", type: 2, typeName: "UX & CopyWriting", level: 3 },*/
      ],

      tools: [
        { id: "001", name: "Redacción Creativa", type: 1, typeName: "Product Design", level: 3 },
        { id: "002", name: "Ux writing", type: 1, typeName: "Product Design", level: 3 },
        { id: "003", name: "Redacción de ficción", type: 1, typeName: "Product Design", level: 3 },
        { id: "004", name: "Redacción de artículos", type: 1, typeName: "Product Design", level: 3 }
      ],
      projects:
        [
          {
            id: "001", order: 1, align: "v", name: "Reseñas: Carcocha Cósmica",
            client: "Proyecto Personal ", desc: "Es una cuenta en Instagram, en la que comparto reseñas de novelas, cuentos y comics; que me gustan y me marcaron de alguna manera.", functs: "", portImg: "img/thumbnailCarcochaCosmica.png", 
            habilidades:[{ id:1,name:"Copywriting" },{ id:2,name:"Ux Writing" },{ id:3,name:"Escritura ficción" },{ id:4,name:"Escritura de guión" }]
          },
          {
            id: "002", order: 2, align: "o", name: "Libro: Insomnes y patriotas",
            client: "Proyecto Personal ", desc: "Este es mi primer libro y consiste en una antología de doce historias que suceden en la misma ciudad, que comparten personajes y lugares; mostrando sus distintos rostros mientras el lector avanza con su lectura. Pertenece al genero negro, aquel que muestra una ciudad decadente controlada por el crimen, y sátira, criticando la falsa idea de normalidad que puede llegar a tener la sociedad de hoy. Mi siguiente libro que está en proceso pertenecerá al género del terror.", functs: "", portImg: "img/thumbnailInsomnesYpatriotas.png", 
            habilidades:[{ id:3,name:"Escritura ficción" },{ id:4,name:"Escritura de guión" }]
          },
          {
            id: "003", order: 3, align: "v", name: "Podcast: Estación Averno",
            cliente: "Proyecto Personal ", desc: "Este podcast narra desde la perspectiva de un locutor y la información que le llega de los ciudadanos, los extraños eventos que ocurren en la ficticia ciudad de Laguna Roja. Pertenece al género de terror con un poco de comedia.", functs: "", portImg: "img/thumbnailEstacionAverno.png", 
            habilidades:[{ id:1,name:"Copywriting" },{ id:3,name:"Escritura ficción" },{ id:4,name:"Escritura de guión podcast" }]
          }
        ]
    }
  },
  created() {
    console.log('10 Component has been created!');
  },
  destroyed(){
    console.log('se destruyó Home');
	
	},
  computed: {

    projectsRight: function () {
      return this.projects.filter(function (a) {
        return a.order % 2 == 0
      })
    },

    projectsLeft: function () {
      return this.projects.filter(function (a) {
        return a.order % 2 > 0
      })
    },

    abilitiesUx: function () {
      return this.abilities.filter(function (a) {
        return a.type == 1
      })
    },
    abilitiesDev: function () {
      return this.abilities.filter(function (a) {
        return a.type == 2
      })
    }

  },
  template: /* vue-html */ `
  <div>
  <div>
<router-link class="menu--main__item" :to="'/'">
<span>Ux/Frontend</span>
</router-link>
<router-link class="menu--main__item menu--main__item--active" :to="'/eschome'">
<span>Escritura</span>
</router-link>
</div>
<section class="hero--esc">
<div class="hero--esc__inner">
<span class="hero__desc__p">Hola, soy </span><h3> {{ portfolio.name }}.</h3>  
<p class="hero__desc__p">{{portfolio.message}}</p>
<div> 
      <span class="profession__item" v-for="profession in portfolio.profession">
    {{ profession.name }}
     </span>
  </div>

</div>
</section>

<section class="projects--esc">

<div class="row">

<div class="section--esc__title__recip col-md-12">
<span class="section__title section__title--projects" >Proyectos</span>
</div>
</div>

<div class="projects--esc__inner row">


<div class="col-xs-12 col-md-6" >
<div data-aos="fade-up" data-aos-anchor-placement="center-center" class="projects__block" v-for="project in projectsLeft">
<div class="projects__detail__container">

<router-link class="projects__block__link" :to="'project/'+project.id">
<img class="projects__block__img " v-bind:src="project.portImg" />
<span class="projects__block__title">{{ project.name}}</span>
<p class="projects__block__desc">{{ project.desc}}</p>
</router-link>

</div>
</div>
</div>


<div class="col-xs-12 col-md-6" >
<div  data-aos="fade-up" data-aos-anchor-placement="center-center" class="projects__block" v-for="project in projectsRight">
<div class="projects__detail__container">

<router-link class="projects__block__link" :to="'project/'+project.id">
<img class="projects__block__img " v-bind:src="project.portImg" />
<span class="projects__block__title">{{ project.name}}</span>
<p class="projects__block__desc">{{ project.desc}}</p>

</router-link>

</div>
</div>
</div>

</div>

</section>

<section class="abilities--esc">

<div class=" row">
<div class="section--esc__title__recip col-md-12">
<div  class="section__title section__title--abilities" >Sobre mí </div>
</div>
</div>

<div class="abilities--esc__inner row">

<!--
<div class="abilities__block col-md-6 col-xs-12">
<div class="row">
<h2 class="col-md-12">Frontend development</h2>
<span class="ability__block--dev hvr-grow col-xs-12 col-md-12" v-for="ability in abilitiesDev">
{{ability.name }}
</span>
</div>
</div>
-->

<div class="abilities__block col-md-12 col-xs-12">
<h2>Escritura</h2>
<span class="ability__block--ux hvr-grow col-xs-12 col-md-12" v-for="ability in abilitiesUx">
{{ability.name }}
</span>
</div>
</div>


</section>


<section class="tools">

<div class="row">
<div class="section__title__recip--centrado col-md-12">
<div class="section__title section__title--tools" >Áreas de trabajo </div>
</div>
</div>

<div class="tools__inner row">
<div class="col-md-12">
<span class="tool__block hvr-grow col-xs-12 col-md-12" v-for="tool in tools">
{{tool.name }}
</span>
</div>
</div>

</section>

<!--<section class="media">

</section>-->

  </div>
  `
};

/*

 */
