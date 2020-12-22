const Hero = {
    data() {
    return {
     mensaje:"Taksumaqui sempucriaco",
     portfolo:{
	    name: "Arturo Aguilar",
	    profession:[
	    {name:"User Experience ",link:"url UX",state:1,icono:"url imagen ícono A "},
	    {name:"Diseño de producto", link:" Link Diseño de producto", state:1,icono:"url imagen B "},
	    {name:"User Research", link: "Link User Research",state:1,icono:"url imagen C"},
	      {name:"Frontend Developer", link: "Link Fron end",state:1,icono:"url imagen D"}
	    ],  
	      message: "Bienvenido a mi portafolio"
	  
	    }, 
     projects:
	    [
	      {name:"Sistema de entregas de departamepentos",
	      client:"Viva ",
	      infoBlocks:[{
		title:"Problema",
		desc:"iSe vio una necesidad",
		image:"url block 1 image",
		order:1
	      },{
		title:"Problema",
		desc:"Se vio una necesidad",
		image:"url block 1 image",
		order:1
	      },{
		title:"Problema",
		desc:"Se vio una necesidad",
		image:"url block 1 image",
		order:1
	      }]},
              	 {name:"Sistema de entregas online",
	      client:"Viva ",
	      infoBlocks:[{
		title:"Problema",
		desc:"Se vio una necesidad",
		image:"url block 1 image",
		order:1
	      },{
		title:"Problema",
		desc:"Se vio una necesidad",
		image:"url block 1 image",
		order:1
	      },{
		title:"Problema",
		desc:"Se vio una necesidad",
		image:"url block 1 image",
		order:1
	      }] }   ]
    }
  },
  template: `
  <div>
          Hola, soy {{ portfolio.name }}, y {{ portfolio.message }} 
      <ul> 
      <li v-for="profession in portfolio.profession">
    {{ profession.name }}
     </li>
      </ul>
  </div>
  `
};


