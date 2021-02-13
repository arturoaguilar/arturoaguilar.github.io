const Hero = {
  data() {
    return {
      mensaje: "Taksumaqui sempucriaco",
      portfolio: {
        name: "Arturo Aguilar",
        profession: [
          { name: "Diseño de experiencias del usuario (UX)", link: "url UX", state: 1, icono: "url imagen ícono A " },
          { name: "User Research", link: "Link User Research", state: 1, icono: "url imagen C" },
          { name: "Desarrollo Frontend ", link: "Link Fron end", state: 1, icono: "url imagen D" }, 
          { name: "Escritor", link: "Link escritor", state: 1, icono: "url imagen escritor" }, 
        ],
        message: "Me encanta la innovación, el desarrollo de software y contar historias. Los campos en los que trabajo son:"

      },
      abilities: [
        { id: "001", name: "User Research", type: 1, typeName: "Product Design", level: 3 },
        { id: "002", name: "Design Thinking", type: 1, typeName: "Product Design", level: 3 },
        { id: "003", name: "Lean Ux", type: 1, typeName: "Product Design", level: 3 },
        { id: "004", name: "Google Design Sprint", type: 1, typeName: "Product Design", level: 3 },
        { id: "005", name: "Scrum", type: 1, typeName: "Product Design", level: 3 },
        { id: "006", name: "Gamification", type: 1, typeName: "Product Design", level: 3 },
        { id: "007", name: "Html", type: 2, typeName: "Frontend Development", level: 3 },
        { id: "008", name: "Javascript", type: 2, typeName: "Frontend Development", level: 3 },
        { id: "009", name: "Angular 9/10", type: 2, typeName: "Frontend Development", level: 3 },
        { id: "010", name: "Vue3", type: 2, typeName: "Frontend Development", level: 3 },
        { id: "011", name: "CSS", type: 2, typeName: "Frontend Development", level: 3 },
        { id: "012", name: "Google Firestore", type: 2, typeName: "Frontend Development", level: 3 }
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
      projects:
        [
          {
            id: "001", order: 1, align: "v", name: "Sistema de entregas de departamepentos",
            client: "Viva ", desc: "", functs: "", portImg: "img/dummyProPort.png", 
            habilidades:[{ id:1,name:"User Experience" },{ id:2,name:"Desarrollo frontend" },{ id:3,name:"User Research" },{ id:4,name:"gamification" }]
          },
          {
            id: "002", order: 2, align: "o", name: "Sistema de administración de entregas",
            client: "Viva ", desc: "", functs: "", portImg: "img/proy00img.png", 
            habilidades:[{ id:1,name:"User Experience" },{ id:2,name:"Desarrollo frontend" },{ id:3,name:"User Research" },{ id:4,name:"gamification" }]
          },
          {
            id: "003", order: 3, align: "v", name: "Sistema de entregas online",
            cliente: "Viva", desc: "", functs: "", portImg: "img/proy00img.png", 
            habilidades:[{ id:1,name:"User Experience" },{ id:2,name:"Desarrollo frontend" },{ id:3,name:"User Research" },{ id:4,name:"gamification" }]
          },
          { id: "004", order: 4, align: "o", name: "Pawadin", cliente: "Pawadin", desc: "", functs: "", portImg: "img/dummyProPort.png", 
          habilidades:[{ id:1,name:"User Experience" },{ id:2,name:"Desarrollo frontend" },{ id:3,name:"User Research" },{ id:4,name:"gamification" }] },
          { id: "006", order: 5, align: "v", name: "Role master", cliente: "Arturo Aguilar", desc: "", functs: "", portImg: "img/proy00img.png", 
          habilidades:[{ id:1,name:"User Experience" },{ id:2,name:"Desarrollo frontend" },{ id:3,name:"User Research" },{ id:4,name:"gamification" }] }
        ]
    }
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
<section class="hero">
<div class="hero__inner">
<span class="hero__desc__p">Hola, soy </span><h3> {{ portfolio.name }}.</h3>  
<p class="hero__desc__p">{{portfolio.message}}</p>
<div> 
      <span class="profession__item" v-for="profession in portfolio.profession">
    {{ profession.name }}
     </span>
  </div>

</div>
</section>

<section class="projects">

<div class="row">

<div class="section__title__recip col-md-12">
<span class="section__title section__title--projects" >Proyectos</span>
</div>
</div>

<div class="projects__inner row">


<div class="col-xs-12 col-md-6" >
<div class="projects__block" v-for="project in projectsLeft">
<div class="projects__detail__container">

<router-link class="projects__block__link" :to="'project/'+project.id">
<img class="projects__block__img " v-bind:src="project.portImg" />
<span class="projects__block__title">{{ project.name}}</span>
</router-link>

</div>
</div>
</div>


<div class="col-xs-12 col-md-6" >
<div class="projects__block" v-for="project in projectsRight">
<div class="projects__detail__container">

<router-link class="projects__block__link" :to="'project/'+project.id">
<img class="projects__block__img " v-bind:src="project.portImg" />
<span class="projects__block__title">{{ project.name}}</span>
</router-link>

</div>
</div>
</div>

</div>

</section>

<section class="abilities">

<div class=" row">
<div class="section__title__recip col-md-12">
<div  class="section__title section__title--abilities" >Habilidades </div>
</div>
</div>

<div class="abilities__inner row">
<div class="abilities__block col-md-6 col-xs-12">
<div class="row">
<h2 class="col-md-12">Frontend development</h2>
<span class="ability__block--dev hvr-grow col-xs-12 col-md-12" v-for="ability in abilitiesDev">
{{ability.name }}
</span>
</div>
</div>

<div class="abilities__block col-md-6 col-xs-12">
<h2>User Experience</h2>
<span class="ability__block--ux hvr-grow col-xs-12 col-md-12" v-for="ability in abilitiesUx">
{{ability.name }}
</span>
</div>
</div>


</section>


<section class="tools">

<div class="row">
<div class="section__title__recip--centrado col-md-12">
<div class="section__title section__title--tools" >Herramientas </div>
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
