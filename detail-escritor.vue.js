const escProjects = {
	data() {
		return {
			selection: [],
			mensaje: "Taksumaqui sempucriaco",
			projects:
				[
					{
						id: "001", name: "Reseñas: Carcocha Cósmica",
						client: "Viva ",
						habilidades: [{ id: 1, name: "User Experience" }, { id: 2, name: "Desarrollo frontend" }, { id: 3, name: "User Research" }, { id: 4, name: "gamification" }],
						infoBlocks: [{
							title: "Escenario",
							blockType: 1,
							desc: "Durante varias veces al año, La constructora VIVA realiza eventos de entregas de departamentos a para ersonas de bajos recursos. Este evento se realiza con los voluntarios de la misma empresa, que se apuntan para ocupar lo distintos puestos que requiere la producción del evento como fotógrafo, recepción, animación, etc...",
							images: [{ imgId: "dIm001", imgUrl: "img/dummyProPort.png" }, { imgId: "dIm002", imgUrl: "img/dummyProPort.png" }, { imgId: "dIm003", imgUrl: "img/dummyProPort.png" }],
							order: 1
						}, {
							title: "Problema",
							blockType: 1,
							desc: "La invitación en la comunicación se hacen via mail, con un link que dirige a un formulario, donde el colaborador puede ingresar sus datos. La empresa está tratando de implementar una estrategia de premios, para dar una mayor motivación para participar.",
							images: [{ imgId: "dIm001", imgUrl: "img/dummyProPort.png" }, { imgId: "dIm002", imgUrl: "img/dummyProPort.png" }, { imgId: "dIm003", imgUrl: "img/dummyProPort.png" }],
							order: 1
						}, {
							title: "Solución",
							blockType: 2,
							desc: "Se entrevistó al equipo involucrado en la dirección del proyecto, como también a los colaboradores que serian los voluntarios",
							images: [{ imgId: "dIm001", imgUrl: "img/dummyProPort.png" }, { imgId: "dIm002", imgUrl: "img/dummyProPort.png" }, { imgId: "dIm003", imgUrl: "img/dummyProPort.png" }],
							order: 1
						}]
					},
					{
						id: "002", name: "Libro: Insomnes y patriotas",
						client: "Viva ",
						habilidades: [{ id: 1, name: "User Experience" }, { id: 2, name: "Desarrollo frontend" }, { id: 3, name: "User Research" }, { id: 4, name: "gamification" }],
						infoBlocks: [{
							title: "Escenario",
							blockType: 1,
							desc: "Después de que la primera versión, fuera utilizada en distintos eventos, y con el feedback de los usuarios se fue arreglando más detalles y agregando funciones. Después de cada evento de entregas (En promedio se entregaban cuarentaicinco departamentos), los encargados marcaban, en el lugar del evento, cartillas señalando los departamentos que eran entregados para que luego otro encargado regresara a la oficina e ingresara uno por uno, los departamentos entregados al sistema CRM. Este trabajo duraba en promedio dos días después del evento ",
							images: [{ imgId: "dIm001", imgUrl: "img/proyAdmin01.png" }, { imgId: "dIm002", imgUrl: "img/proyAdmin02.png" }],
							order: 1
						}, {
							title: "Problema",
							blockType: 1,
							desc: "Se buscaba seguir el rediseño de los procesos de entrega, buscando integrar la nueva herramienta al CRM. Para esto la interfaz debía mostrar los departamentos seleccionados para entregar el día del evento, que eran los que ya tenían contrato firmado. Por otro lado, debía registrar las entregas del día sobre esos departamentos y enviar al CRM dichas entragas, dando a conocer cuales quedaron pendientes.",
							images: [{ imgId: "dIm001", imgUrl: "img/dummyProPort.png" }, { imgId: "dIm002", imgUrl: "img/dummyProPort.png" }, { imgId: "dIm003", imgUrl: "img/dummyProPort.png" }],
							order: 1
						}, {
							title: "Solución",
							blockType: 2,
							desc: "Se diseñó una interfaz que reflejara la acción a la que estaban acostumbrados, de marcar en una cuadrícula los departamentos que esta´n siendo entregados y se desarrollaron dos procesos ETL: El primero extraía de la base de datos del CRM de la empresa los departamentos seleccionados para ser entregados. Por motivos de seguridad y conexión desde el lugar del evento, no se actualizaba directamente sino que se guardaba en la base de datos de la aplicación, para luego exportar toda la data de las entregas con un solo clic",
							images: [{ imgId: "dIm001", imgUrl: "img/proyAdmin01.png" }, { imgId: "dIm002", imgUrl: "img/proyAdmin02.png" }],
							order: 1
						}]
					},
					{
						id: "003", name: "Podcast: Estación Averno",
						client: "Viva ",
						habilidades: [{ id: 1, name: "User Experience" }, { id: 2, name: "Desarrollo frontend" }, { id: 3, name: "User Research" }, { id: 4, name: "gamification" }],
						infoBlocks: [{
							title: "Contexto",
							blockType: 1,
							desc: "Al llegar la época de cuarentena.",
							images: [{ imgId: "dIm001", imgUrl: "img/proyEntreOnline01.png" }, { imgId: "dIm002", imgUrl: "img/proyEntreOnline02.png" }],
							order: 1
						}, {
							title: "Problema",
							blockType: 1,
							desc: "los eventos de entrega ya no se podían hacer de manera prescencial. Había que ver una forma de desarrollar las entregas de manera remota",
							images: [{ imgId: "dIm001", imgUrl: "img/dummyProPort.png" }, { imgId: "dIm002", imgUrl: "img/dummyProPort.png" }, { imgId: "dIm003", imgUrl: "img/dummyProPort.png" }],
							order: 1
						}, {
							title: "Solución",
							blockType: 2,
							desc: "Se desarrolló una interfaz cuyo link era enviado a cada cliente con sus datos de acceso directamente desde el CRM, y al ingresar accedían a la información correspondiente a su departamento, como planos y contratos, para descargárlos y automáticamente se actualizaba el campo de entergas de de documentos correspondiente a los registros de esos departamentos.",
							images: [{ imgId: "dIm001", imgUrl: "img/proyEntreOnline01.png" }, { imgId: "dIm002", imgUrl: "img/proyEntreOnline02.png" }],
							order: 1
						}]
					}
				]
		}
	},
	methods: {
		clickFunct() {
			console.log('One of my on');
		}
	},
	created() {
		this.selection = this.projects.find(element => element.id == this.$route.params.name);
		// `this` points to the vm instance
		console.log('Selection con referencia this');
		console.log(this.selection);// => "count is: 1"
	},
	destroyed(){
		console.log('10 se destruyó Detail ');

	},
	template:/* vue-html */ `
  <div class="project__body">
<section class="project__menu">
    <router-link to="/"> <img class="project__menu__home__img" src="img/btn_home.png" > <span class="project__menu__home__btn">Inicio</span></router-link>	
</section>
<section class="project__header">

<div class="project__header__inner">
	     <h2 class="project__title"> {{ selection.name }}</h2>
		 <div class="project_abilities">
		 <span style="display:block" v-for=" (habilidad, index) in selection.habilidades">
		<!--<span v-if="index > 0"> / </span> -->
		{{ habilidad.name}}
		 </span>
		 </div>
</div>	

</section>

<section class="project__text__body">

<div class="project__text__body__inner">
<div @click="clickFunct" v-for="block in selection.infoBlocks">
<div class="row project__block">
<div class="col-md-12">
<h3 class="project_block__title">{{ block.title }} </h3>
<p> {{ block.desc}} </p>
</div>
</div>
<div class="row project__block__images" v-if="block.blockType==2">
<div class="project__block__img__container col-md-6 col-xs-12" v-for="imgBlock in block.images"  >
 <a rel="gallery-1" :href="imgBlock.imgUrl" class="swipebox">
	<img class="project__block__img" v-bind:src="imgBlock.imgUrl" />
  </a>
</div>
</div>

</div>
</div>

</section>


    </div>
  `
};



