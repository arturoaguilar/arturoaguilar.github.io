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
	      {name:"Sistema de entregas de departamepentos",
		client:"Viva ",desc:"",functs:"",portImg:"img/dummyProPort.png"},
              {name:"Sistema de entregas online",
	      client:"Viva ",desc:"",functs:"",portImg:"img/dummyProPort.png"},
	      {name:"Plataforma de gestión de entregas",
	      cliente:"Viva",desc:"",functs:"",portImg:"img/dummyProPort.png"}, 
	      {name:"Pawadin",cliente:"Pawadin",desc:"",functs:"",portImg:"img/dummyProPort.png"},
	      {name: "Escuela Pawadin", cliente: "Pawadin",desc:"",functs:"",portImg:"img/dummyProPort.png"},
	      {name: "Libro Insomnes y Patriotas", cliente: "Arturo Aguilar",desc:"",functs:"",portImg:"img/dummyProPort.png"}
	    ]
    }
  },
  template: `
  <div>
          Hola, soy {{ portfolio.name }}, y {{ portfolio.message }} 
      <div> 
      <span v-for="profession in portfolio.profession">
    {{ profession.name }}
     </span>
      </div>

<div>
<div class="projects__block" v-for="project in projects">

    <router-link to="/project/123456">

<img class="projects__block__img" v-bind:src="project.portImg" />
    </router-link>

</div>
</div>

  </div>
  `
};


