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
        { id: "001", name: "Los libros han estado en gran parte de mi vida, desde leer El gato negro y otros cuentos de horror en el colegio, hasta terminar la nausea de Sartre, hace poco; por lo que como digo al inicio de esta página, aprecio mucho las buenas historias, tanto en consumirlas como en (sobre todo) crearlas.", type: 1, typeName: "Escritura", level: 3 },
        { id: "007", name: "Por eso, a pesar de habermo formado en el mundo digital y de investigación; llevo a la par mi carrera como escritor, tanto en el mundo de los libros como en la creación de contenidos exclusivamente digitales.", type: 1, typeName: "Escritura", level: 3 }
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
            id: "001", order: 1, align: "v", name: "Carcocha Cósmica",
            client: "Proyecto Personal ", desc: "Reseñas de libros de distintos géneros dentro de la comunidad de lectores en Instagram.", functs: "", portImg: "img/thumbnailCarcochaCosmica.png", 
            habilidades:[{ id:1,name:"Copywriting" },{ id:2,name:"Ux Writing" },{ id:3,name:"Escritura ficción" },{ id:4,name:"Escritura de guión" }]
          },
          {
            id: "002", order: 2, align: "o", name: "Insomnes y patriotas",
            client: "Proyecto Personal ", desc: "Antología de doce historias(de géneros negro y thriller)  que se entrelazan para dar forma a una oscura ciudad que puede llevar a sus habitantes a la locura.", functs: "", portImg: "img/thumbnailInsomnesYpatriotas.png", 
            habilidades:[{ id:3,name:"Escritura ficción" },{ id:4,name:"Escritura de guión" }]
          },
          {
            id: "003", order: 3, align: "v", name: "Estación Averno",
            cliente: "Proyecto Personal ", desc: "Podcast que cubre los extraños sucesos que ocurren en la ficticia ciudad de Laguna Roja.", functs: "", portImg: "img/thumbnailEstacionAverno.png", 
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

<section class="menu--main">
<div>
<router-link class="menu--main__item" :to="'/'">
<span>Ux/Frontend</span>
</router-link>
<router-link class="menu--main__item menu--main__item--active" :to="'/eschome'">
<span>Escritura</span>
</router-link>
</div>
</section>

<section class="hero--esc">

<div data-aos="fade-down" data-aos-duration="1500" class="hero--esc__inner row end-xs">

<div class="col-md-3 col-xs-12 hero__main-image-container">
<img class="hero__main-image-back" src="img/space003.png">
<img class="hero__main-image" src="img/space001__ship.png">
<p class="hero__main-paragraph">Baja para explorar</p>
</div>

<div class="col-md-8 col-xs-12 ">
<div class="hero__writer__text-container">
<span class="hero__desc__p">Hola, soy </span><h3> {{ portfolio.name }}.</h3>  
<p class="hero__desc__p">{{portfolio.message}}</p>
<div> 
      <!--<span class="profession__item" v-for="profession in portfolio.profession">
    {{ profession.name }}
     </span>-->
  </div>
  </div>
</div>
</div>
</section>

<section class="projects--esc">

<div class="row">

<div class="section--esc__title__recip col-md-12">
<span class="section__title section__title--projects" ><img class="section__title__icon" src="img/space_ship_light_icon.png">Proyectos</span>
</div>
</div>

<div class="projects--esc__inner row">


<div class="col-xs-12 col-md-6" >
<div data-aos="fade-up"  data-aos-duration="1000" class="projects__block" v-for="project in projectsLeft">
<div class="projects__detail__container">

<router-link class="projects__block__link" :to="'escproject/'+project.id">
<img class="projects__block__img " v-bind:src="project.portImg" />
<span class="projects__block__title">{{ project.name}}</span>
<p class="projects__block__desc">{{ project.desc}}</p>
</router-link>

</div>
</div>
</div>


<div class="col-xs-12 col-md-6" >
<div  data-aos="fade-up"  data-aos-duration="1000"  class="projects__block" v-for="project in projectsRight">
<div class="projects__detail__container">

<router-link class="projects__block__link" :to="'escproject/'+project.id">
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
<div  class="section__title section--esc__title--abilities" ><img class="section__title__icon" src="img/space_ship_dark_icon.png">Sobre mí </div>
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

<div data-aos="fade-up"  data-aos-duration="1000"  class="abilities__block col-md-12 col-xs-12">
<!--<h2>Escritura</h2>-->
<span class="ability__block--ux col-xs-12 col-md-12" v-for="ability in abilitiesUx">
{{ability.name }}
</span>
</div>
</div>


</section>


<section class="tools">

<div class="row">
<div class="section__title__recip--centrado col-md-12">
<div class="section__title section--esc__title--tools" ><img class="section__title__icon" src="img/space_ship_dark_icon.png"> Disciplinas </div>
</div>
</div>

<div data-aos="fade-up"  data-aos-duration="1000"  class="tools__inner row">
<div class="col-md-12">
<span class="tool__block hvr-grow col-xs-12 col-md-12" v-for="tool in tools">
{{tool.name }}
</span>
</div>
</div>

<div class="row">
<div class="col-xs-12 tools__monster-planet-container">
<img class="tools__monster-planet" src="img/planet003.png">
</div>

</div>
</section>


      <section class="contact">
      <div data-aos="fade-up"  data-aos-duration="1000"  class="contact__text__container">
      <div class="contact__character__container">
      <img class="contact__character" src="img/space001_man.png">
      <img class="contact__character" src="img/monsteralone001.png">
      </div>
      <p>Si deseas que trabajemos juntos en algún proyecto, contáctame. </p>
      </div>
      
      <div data-aos="fade-up"  data-aos-duration="1000"  class="contact__button__container">
      <a class="contact__button" href = "mailto: arturo.aguilar.tobies@gmail.com"><img class="contact__button__img" src="/img/mail_cont.png"></a>
      <a class="contact__button" href= "https://www.linkedin.com/in/arturoat"><img class="contact__button__img" src="/img/linkedin_cont.png"></a>
      <a class="contact__button" href= "https://www.instagram.com/arturoaguilart"><img class="contact__button__img" src="/img/instagram_cont.png"></a>
      <a class="contact__button" href= "https://www.facebook.com/arturo.aguilartobies"><img class="contact__button__img" src="/img/facebook_cont.png"></a>
      </div>
      
      
      </section>

  </div>
  `
};

/*

 */
