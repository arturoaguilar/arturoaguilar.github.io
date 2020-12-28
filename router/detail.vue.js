const Projects = {
    data() {
    return {
     selection:[],
     mensaje:"Taksumaqui sempucriaco",
     projects:
	    [
	      {id:"001", name:"Sistema de entregas de departamepentos",
	      client:"Viva ",
	      infoBlocks:[{
		title:"Escenario",
		desc:"Durante varias veces al año, La constructora VIVA realiza eventos de entregas de departamentos a para ersonas de bajos recursos. Este evento se realiza con los voluntarios de la misma empresa, que se apuntan para ocupar lo distintos puestos que requiere la producción del evento como fotógrafo, recepción, animación, etc...",
		images:[{imgId:"dIm001",imgUrl:"img/dummyProPort.png"},{imgId:"dIm002",imgUrl:"img/dummyProPort.png"},{imgId:"dIm003",imgUrl:"img/dummyProPort.png"}],
		order:1
	      },{
		title:"Problema",
		desc:"La invitación en la comunicación se hacen via mail, con un link que dirige a un formulario, donde el colaborador puede ingresar sus datos. La empresa está tratando de implementar una estrategia de premios, para dar una mayor motivación para participar.",
		images:[{imgId:"dIm001",imgUrl:"img/dummyProPort.png"},{imgId:"dIm002",imgUrl:"img/dummyProPort.png"},{imgId:"dIm003",imgUrl:"img/dummyProPort.png"}],
		order:1
	      },{
		title:"Solución",
		desc:"Se entrevistó al equipo involucrado en la dirección del proyecto, como también a los colaboradores que serian los voluntarios",
		images:[{imgId:"dIm001",imgUrl:"img/dummyProPort.png"},{imgId:"dIm002",imgUrl:"img/dummyProPort.png"},{imgId:"dIm003",imgUrl:"img/dummyProPort.png"}],
		order:1
	      }]},
              	 {id:"002", name:"Sistema de entregas online",
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
     methods:{
       clickFunct(){
	  console.log('One of my on');
       }
     },
  created() {
    this.selection = this.projects.find(element => element.id = this.$route.params.name);
    // `this` points to the vm instance
    console.log('Selection con referencia this');
    console.log(selection);// => "count is: 1"
  },
  template: `
  <div>
     <div>{{mensaje }} --- {{ $route.params.name }}</div> 
	
	      {{ selection.name }}
	      <div @click="clickFunct" v-for="block in selection.infoBlocks">
		    {{ block.title }}
		    {{ block.desc}}
		    <div v-for="imgBlock in block.images">
	
<img class="projects__detail__block__img" v-bind:src="imgBlock.imgUrl" />
		    </div> 
	      </div>
    </div>
  `
};


/*
 <div>
     <div>{{mensaje }} --- {{ $route.params.name }}</div> 
	  <div v-for="project in projects">
	      {{ project.name }}
	      <div @click="clickFunct" v-for="block in project.infoBlocks">
		    {{ block.title }}
		    {{ block.desc}}
		    <div v-for="imgBlock in block.images">
	
<img class="projects__detail__block__img" v-bind:src="imgBlock.imgUrl" />
		    </div> 
	      </div>
	  </div>
    </div>
 */

