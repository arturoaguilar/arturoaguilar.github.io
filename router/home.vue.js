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
	      message: "Bienvenido a mi portafolio"
	  
	    }, 
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
  template: `
  <div>
    <router-link to="/">Inicio</router-link>
          Hola, soy {{ portfolio.name }}, y {{ portfolio.message }} 
      <div> 
      <span v-for="profession in portfolio.profession">
    {{ profession.name }}
     </span>
      </div>

<div class="projects row">
<div class="projects__block col-xs-12 col-md-4" v-for="project in projects">

<router-link class="projects__block__link" :to="'project/'+project.id">
<img class="projects__block__img hvr-grow" v-bind:src="project.portImg" />
<span class="projects__block__title">{{ project.name}}</span>
</router-link>

</div>
</div>

  </div>
  `
};


