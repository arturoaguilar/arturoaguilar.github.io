const Hero = {
  data() {
    return {
      mensaje: "Taksumaqui sempucriaco",
      portfolio: {
        name: "Arturo Aguilar",
        profession: [
          { name: "Diseño de experiencias del usuario (UX)", link: "url UX", state: 1, icono: "url imagen ícono A " },
          /* { name: "User Research", link: "Link User Research", state: 1, icono: "url imagen C" },*/
          { name: "Desarrollo Web", link: "Link Fron end", state: 1, icono: "url imagen D" },
          { name: "Gestión ágil de proyectos", link: "Link escritor", state: 1, icono: "url imagen escritor" },
        ],
        message: "Me encanta la innovación, el diseño de productos/servicios digitales y el desarrollo de software. Los campos en los que trabajo son:"

      },
      abilities: [
        { id: "001", name: "User Research", type: 1, typeName: "Product Design", level: 3 },
        { id: "002", name: "Design Thinking", type: 1, typeName: "Product Design", level: 3 },
        { id: "005", name: "Scrum", type: 1, typeName: "Product Design", level: 3 },
        { id: "002", name: "Human Centered Design", type: 1, typeName: "Product Design", level: 3 },
        { id: "002", name: "Double Diamond Design", type: 1, typeName: "Product Design", level: 3 },
        { id: "003", name: "Lean Ux", type: 1, typeName: "Product Design", level: 3 },
        { id: "003", name: "Lean Startup", type: 1, typeName: "Product Design", level: 3 },
        { id: "004", name: "Google Design Sprint", type: 1, typeName: "Product Design", level: 3 },
        { id: "006", name: "Gamification", type: 1, typeName: "Product Design", level: 3 },
        { id: "007", name: "Html", type: 2, typeName: "Frontend Development", level: 3 },
        { id: "008", name: "Javascript", type: 2, typeName: "Frontend Development", level: 3 },
        { id: "009", name: "Angular 9/10", type: 2, typeName: "Frontend Development", level: 3 },
        { id: "009", name: "Arquitectura de la Información", type: 1, typeName: "Product Design", level: 3 },
        { id: "010", name: "Vue3", type: 2, typeName: "Frontend Development", level: 3 },
        { id: "011", name: "CSS", type: 2, typeName: "Frontend Development", level: 3 },
        { id: "011", name: "Grid CSS / Flexbox", type: 2, typeName: "Frontend Development", level: 3 },
        { id: "011", name: "Heroku", type: 2, typeName: "Frontend Development", level: 3 },
        { id: "012", name: "Google Firestore", type: 2, typeName: "Frontend Development", level: 3 },
        { id: "012", name: "Git/Github", type: 2, typeName: "Frontend Development", level: 3 },
        { id: "012", name: "Flexbox Grid", type: 2, typeName: "Frontend Development", level: 3 },
        { id: "012", name: "Bootstrap", type: 2, typeName: "Frontend Development", level: 3 },
      ],

      tools: [
        { id: "001", name: "Figma", type: 1, typeName: "Product Design", level: 3 },
        { id: "002", name: "Miro", type: 1, typeName: "Product Design", level: 3 },
        { id: "003", name: "Visual Studio Code", type: 1, typeName: "Product Design", level: 3 },
        { id: "004", name: "neo Vim", type: 1, typeName: "Product Design", level: 3 },
        { id: "005", name: "Google Drive", type: 1, typeName: "Product Design", level: 3 },
        { id: "006", name: "Keep", type: 1, typeName: "Product Design", level: 3 },
        { id: "007", name: "Photoshop", type: 2, typeName: "Frontend Development", level: 3 },
        { id: "008", name: "Premier Pro", type: 2, typeName: "Frontend Development", level: 3 }
      ],
      education: [
        { id: "001", name: "Master en Neuromarketing e Investigación de mercados", school: "Universidad de Barcelona" },
        { id: "002", name: "Diplomado en Publicidad Digital", school: "Toulouse Lautrec " },
        { id: "003", name: "Diplomano en Gestión de Recursos Humanos", school: "Zegel IPAE" },
        { id: "0011", name: "Ingeniería de Sistemas", school: "Universidad de Lima" },
        { id: "004", name: "Professional Scrum Master", school: "PSM I Scrum.org" },
        { id: "012", name: "User Experience", school: "Area 51" },
        { id: "005", name: "Design Sprint", school: "Platzi" },
        { id: "005", name: "Gestión de Procesos de UX", school: "Platzi" },
        { id: "005", name: "Design Thinking con Minds Garage", school: "Platzi" },
        { id: "006", name: "Product Designer por Aerolab", school: "Platzi" },
        { id: "005", name: "Metodologías Ágiles", school: "Platzi" },
        { id: "005", name: "Figma", school: "Platzi" },
        { id: "005", name: "Javascript", school: "Platzi" },
        { id: "005", name: "Angular", school: "Platzi" },
        { id: "005", name: "Vuejs 3", school: "Platzi" },
        { id: "005", name: "Grid CSS", school: "Platzi" },
        { id: "007", name: "Marketing Digital", school: "Universidad de Lima" },
        { id: "008", name: "Marketing Digital", school: "Instituto Peruano de Marketing" },
        { id: "009", name: "Creación de Temas y Plugins en WordPress", school: "Platzi" },
        { id: "010", name: "Power BI for Users", school: "DMC Perú" },
        { id: "011", name: "Creación de Tiendas en Línea con WooCommerce", school: "Platzi" },
        { id: "005", name: "HTML y CSS", school: "Platzi" },
        { id: "005", name: "Ionic", school: "Area 51" },
        { id: "005", name: "Gamificación", school: "Platzi" },
        { id: "005", name: "Dirección de cuentas", school: "La Calle: Escuela Creativa" },
        { id: "005", name: "Planning Publicitario", school: "La Calle: Escuela Creativa" },

      ],
      projects:
        [
          {
            id: "001", order: 1, align: "v", name: "Entregando Juntos",
            client: "Viva ", desc: "", functs: "", portImg: "img/dummyProPort.png",
            habilidades: [{ id: 1, name: "User Experience" }, { id: 2, name: "Desarrollo frontend" }, { id: 3, name: "User Research" }, { id: 4, name: "gamification" }]
          },
          {
            id: "002", order: 2, align: "o", name: "Sistema de administración de entregas",
            client: "Viva ", desc: "", functs: "", portImg: "img/thumbnailAdminProy.png",
            habilidades: [{ id: 1, name: "User Experience" }, { id: 2, name: "Desarrollo frontend" }]
          },
          {
            id: "003", order: 3, align: "v", name: "Sistema de entregas online",
            cliente: "Viva", desc: "", functs: "", portImg: "img/thumbnailProyEntreOnline.png",
            habilidades: [{ id: 1, name: "User Experience" }, { id: 2, name: "Desarrollo frontend" }]
          },
          {
            id: "004", order: 4, align: "o", name: "Pawadin", cliente: "Pawadin", desc: "", functs: "", portImg: "img/thumbnailpawadin.png",
            habilidades: [{ id: 1, name: "User Experience" }, { id: 2, name: "Desarrollo frontend" }, { id: 3, name: "User Research" }, { id: 4, name: "Lean Startup" }, { id: 5, name: "Design Thinking" }]
          },
          {
            id: "005", order: 5, align: "v", name: "Role master", cliente: "Arturo Aguilar", desc: "", functs: "", portImg: "img/thumbnailRolemProy.png",
            habilidades: [{ id: 1, name: "User Experience" }, { id: 2, name: "Desarrollo frontend" }, { id: 3, name: "User Research" }, { id: 4, name: "gamification" }, { id: 5, name: "Desarrollo Backend" }]
          }
        ],
      spaceshipTranslate: false,
    }
  },
  created() {
    console.log('10 Component has been created!');
  },
  destroyed() {
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
<router-link class="menu--main__item menu--main__item--active" :to="'/'">
<span>Ux/Frontend</span>
</router-link>
<router-link class="menu--main__item" :to="'/eschome'">
<span>Escritura</span>
</router-link>
</div>
</section>
<section class="hero">
<div class="row">

<div class="col-md-7 col-xs-12 ">
<div data-aos="fade-down" data-aos-duration="1500" class="hero__inner">
<span class="hero__desc__p">Hola, soy </span><h3> {{ portfolio.name }}.</h3>  
<p class="hero__desc__p">{{portfolio.message}}</p>
<div> 
      <span class="profession__item" v-for="profession in portfolio.profession">
    {{ profession.name }}
     </span>
  </div>
</div>
</div>

<div class="col-md-3  col-xs-12 first-xs last-md hero__main-image-container">
<img class="hero__main-image-back" src="img/space003.png">
<img class="hero__main-image" src="img/space001__ship.png">
<p class="hero__main-paragraph">Baja para explorar</p>
</div>

</div>
</section>

<section class="projects" >

<div class="row">

<div class="section__title__recip col-md-12">
<span class="section__title section__title--projects" ><img class="section__title__icon" src="img/space_ship_light_icon.png">Proyectos</span>
</div>
</div>

<div class="projects__inner row">


<div class="col-xs-12 col-md-6" >
<div data-aos="fade-up"  data-aos-duration="1000"  class="projects__block" v-for="project in projectsLeft">

<router-link class="projects__block__link" :to="'project/'+project.id">
<img class="projects__block__img " v-bind:src="project.portImg" />
<div class="projects__detail__container">
<span class="projects__block__title">{{ project.name}}</span>
<span class="projects__block__habilidad" v-for="(habilidad,index) in project.habilidades">
<span v-if="index > 0">/</span>
{{ habilidad.name}}
</span>
</div>
</router-link>


</div>
</div>


<div class="col-xs-12 col-md-6" >
<div  data-aos="fade-up"  data-aos-duration="1000"  class="projects__block" v-for="project in projectsRight">
<div class="projects__detail__container">

<router-link class="projects__block__link" :to="'project/'+project.id">
<img class="projects__block__img " v-bind:src="project.portImg" />
<span class="projects__block__title">{{ project.name}}</span>
<span class="projects__block__habilidad" v-for="(habilidad,index) in project.habilidades">
<span v-if="index > 0">/</span>
{{ habilidad.name}}
</span>
</router-link>

</div>
</div>
</div>

</div>

</section>

<section class="abilities">

<div class=" row">
<div class="section__title__recip col-md-12">
<div  class="section__title section__title--abilities" ><img class="section__title__icon" src="img/space_ship_dark_icon.png">Habilidades </div>
</div>
</div>

<div  class="abilities__inner row">

<div data-aos="fade-up"  data-aos-duration="1000" class="abilities__block col-md-6 col-xs-12">
<h2 class="col-md-12">Web Development</h2>
<span  class="ability__block--dev hvr-grow col-xs-12 col-md-12" v-for="ability in abilitiesDev">
{{ability.name }}
</span>
</div>

<div data-aos="fade-up" data-aos-duration="1000"  class="abilities__block col-md-6 col-xs-12">
<h2>User Experience y Gestión de Proyectos</h2>
<span class="ability__block--ux hvr-grow col-xs-12 col-md-12" v-for="ability in abilitiesUx">
{{ability.name }}
</span>
</div>

</div>


</section>


<section class="tools">
<!--
<div class="row">
<div class="section__title__recip--centrado col-md-12">
<div class="section__title section__title--tools" >Herramientas </div>
</div>
</div>

<div class="tools__inner row">
<div class="col-xs-12 col-md-12">
<span class="tool__block hvr-grow col-xs-12 col-md-12" v-for="tool in tools">
{{tool.name }}
</span>
</div>
</div>
--->
<div class="row">
<div class="section__title__recip--centrado col-md-12">
<div class="section__title section__title--tools" ><img class="section__title__icon" src="img/space_ship_dark_icon.png">Educación </div>
</div>
</div>

<div class="tools__inner row">
<div class="col-xs-12 col-md-12" data-aos="fade-up" data-aos-duration="1000">
<span class="tool__block hvr-grow col-xs-12 col-md-12" v-for="(course,index) in education">
 {{course.name }} 
<span class="tool__block__school">({{course.school}})</span>
</span>
</div>
</div>

<div class="row">
<div class="col-xs-12 tools__monster-planet-container">
<p v-show="spaceshipTranslate" class="section__tool__translate-screen"><span class="translate-screen__title">Traductor de tu nave:</span>Bienvenido al planeta del diseño de productos y desarrollo de ideas innovadoras. Gracias por hacer contacto. Espero que podamos trabajar juntos. <button @click="spaceshipTranslate=!spaceshipTranslate" class="translate-screen__close-button">Entendido</button></p>
<img @click="spaceshipTranslate=!spaceshipTranslate" class="tools__monster-planet" src="img/planet001.png">
</div>

</div>

</section>

<section class="contact">
      <div data-aos="fade-up"  data-aos-duration="1000"  class="contact__text__container">
      <div class="contact__character__container">
      <img class="contact__character" src="img/space001_man.png">
      <img class="contact__character" src="img/monsteralone002.png">
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
