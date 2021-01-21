const Hero = {
    data() {
    return {
     mensaje:"Taksumaqui sempucriaco",
     portfolio:{
	    name: "Arturo Aguilar",
	    profession:[
	    {name:"User Experience ",link:"url UX",state:1,icono:"url imagen ícono A "},
	    {name:"Diseño de producto", link:" Link Diseño de producto", state:1,icono:"url imagen B "},
	    {name:"User Research", link: "Link User Research",state:1,icono:"url imagen C"},
	      {name:"Frontend Developer", link: "Link Fron end",state:1,icono:"url imagen D"},{name:"Escritor",link:"Link escritor",state:1,icono:"url imagen escritor"}
	    ],  
	      message: "Me encanta el desarrollo de tecnologías, la innovación, la investigación de usuarios y escribir"
	  
	    },
    abilities:[
      {id:"001",name:"User Research",type:1,typeName:"Product Design",level:3},
      {id:"002",name:"Design Thinking",type:1,typeName:"Product Design",level:3},
      {id:"003",name:"Lean Ux",type:1,typeName:"Product Design",level:3},
      {id:"004",name:"Google Design Sprint",type:1,typeName:"Product Design",level:3},
      {id:"005",name:"Scrum",type:1,typeName:"Product Design",level:3},
      {id:"006",name:"Gamification",type:1,typeName:"Product Design",level:3},
      {id:"007",name:"Html",type:2,typeName:"Frontend Development",level:3},
      {id:"008",name:"Javascript",type:2,typeName:"Frontend Development",level:3},
      {id:"009",name:"Angular 9/10",type:2,typeName:"Frontend Development",level:3},
      {id:"010",name:"Vue3",type:2,typeName:"Frontend Development",level:3},
      {id:"011",name:"CSS",type:2,typeName:"Frontend Development",level:3},
      {id:"012",name:"Google Firestore",type:2,typeName:"Frontend Development",level:3}
    ],

 tools:[
      {id:"001",name:"Figma",type:1,typeName:"Product Design",level:3},
      {id:"002",name:"Miro",type:1,typeName:"Product Design",level:3},
      {id:"003",name:"Visual Studio Code",type:1,typeName:"Product Design",level:3},
      {id:"004",name:"neo Vim",type:1,typeName:"Product Design",level:3},
      {id:"005",name:"Google Drive",type:1,typeName:"Product Design",level:3},
      {id:"006",name:"Keep",type:1,typeName:"Product Design",level:3},
      {id:"007",name:"Photoshop",type:2,typeName:"Frontend Development",level:3},
      {id:"008",name:"Premier Pro",type:2,typeName:"Frontend Development",level:3}
    ],
     projects:
	    [
	      {id:"001",name:"Sistema de entregas de departamepentos",
		client:"Viva ",desc:"",functs:"",portImg:"img/dummyProPort.png"},
              {id:"002",name:"Sistema de administración de entregas",
	      client:"Viva ",desc:"",functs:"",portImg:"img/dummyProPort.png"},
	      {id:"003",name:"Sistema de entregas online",
	      cliente:"Viva",desc:"",functs:"",portImg:"img/dummyProPort.png"}, 
	      {id:"004",name:"Pawadin",cliente:"Pawadin",desc:"",functs:"",portImg:"img/dummyProPort.png"},
	      {id:"006",name: "Role master", cliente: "Arturo Aguilar",desc:"",functs:"",portImg:"img/dummyProPort.png"}
	    ]
    }
  },
  computed: {

     abilitiesUx: function() {
       return this.abilities.filter(function(a) {
         return a.type==1
     })
   },
     abilitiesDev: function() {
       return this.abilities.filter(function(a) {
         return a.type==2
     })
   }
   
  },
  template: `
  <div>
<section class="hero">
<div class="hero__inner">
Hola, soy <h3> {{ portfolio.name }}</h3>  

<div> 
      <span class="profession__item" v-for="profession in portfolio.profession">
    {{ profession.name }}
     </span>
  </div>

<!--<p>{{ portfolio.message }}</p>--> 
</div>

</section>

<section class="projects">

<div class="row">
<div class="section__title__recip col-md-offset-6">
<span class="section__title--projects  " >¿En qué proyectos trabajé? </span>
</div>
</div>


<div class="projects__inner row">


<div class="projects__block col-xs-12 col-md-4" v-for="project in projects">

<div class="projects__detail__container">
<router-link class="projects__block__link" :to="'project/'+project.id">
<img class="projects__block__img " v-bind:src="project.portImg" />
<span class="projects__block__title">{{ project.name}}</span>
</router-link>
</div>

</div>



</div>


</section>

<section class="abilities">

<div class=" row">
<div class="section__title__recip col-md-offset-2">
<div  class="section__title--abilities" >¿Qué habilidades tengo?</div>
</div>
</div>

<div class="abilities__inner row">
<div class=" col-md-offset-2 col-md-3">
<h2>Frontend development</h2>
<span class="ability__block--dev hvr-grow col-xs-12 col-md-4" v-for="ability in abilitiesDev">
{{ability.name }}
</span>
</div>

<div class="col-md-offset-2 col-md-3">
<h2>User Experience</h2>
<span class="ability__block--ux hvr-grow col-xs-12 col-md-4" v-for="ability in abilitiesUx">
{{ability.name }}
</span>
</div>
</div>


</section>


<section class="tools">

<div class="row">
<div class="section__title__recip col-md-offset-6">
<div class="section__title--tools " > ¿Qué herramientas utilizo? </div>
</div>
</div>

<div class="tools__inner row">
<div class="col-md-offset-4 col-md-4">
<span class="tool__block hvr-grow col-xs-12 col-md-4" v-for="tool in tools">
{{tool.name }}
</span>
</div>
</div>

</section>

<section class="media">

</section>
<section class="contact">
Contactame si deseas trabajar un proyecto conmigo 
</section>

  </div>
  `
};

/*

 */
