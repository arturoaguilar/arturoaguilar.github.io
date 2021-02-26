const Projects = {
	data() {
		return {
			selection: [],
			mensaje: "Taksumaqui sempucriaco",
			projects:
				[
					{
						id: "001", name: "Sistema de entregas de departamepentos",
						client: "Viva ",
						/*links:[{id:1,name:"Ver página",link:"http://vivagymapps.com/entregandojuntos/"}],*/
						habilidades:[{ id:1,name:"User Experience" },{ id:2,name:"Desarrollo frontend" },{ id:3,name:"User Research" },{ id:4,name:"gamification" }],
						infoBlocks: [{
							title: "Escenario",
							blockType: 1,
							desc: "Durante varias veces al año, La constructora VIVA realiza eventos de entregas de departamentos a para personas de bajos recursos. Este evento se realiza con la ayuda de los voluntarios de la misma empresa, que se apuntan para ocupar lo distintos puestos que requiere la producción del evento como fotógrafo, recepción, animación, etc...",
							images: [{ imgId: "dIm001", order: 1, imgUrl: "img/dummyProPort.png" }, { imgId: "dIm002", order: 2, imgUrl: "img/dummyProPort.png" }, { imgId: "dIm003", order: 1, imgUrl: "img/dummyProPort.png" }],
							order: 1
						}, {
							title: "Problema",
							blockType: 1,
							desc: "La invitación en la comunicación se hacen via mail, con un link que dirige a un formulario, donde el colaborador puede ingresar sus datos. La empresa está tratando de implementar una estrategia de premios, para dar una mayor motivación para participar, sin tener que llevar los registros de los participantes y sus premios en una hoja de calculo que mientras más crezca hará más complicado el mantenimiento.",
							images: [{ imgId: "dIm001", order: 1, imgUrl: "img/dummyProPort.png" }, { imgId: "dIm002", order: 2, imgUrl: "img/dummyProPort.png" }, { imgId: "dIm003", order: 1, imgUrl: "img/dummyProPort.png" }],
							order: 1
						}, {
							title: "Solución",
							blockType: 2,
							desc: "Se entrevistó al equipo involucrado en la dirección del proyecto, como también a los colaboradores que serian los voluntarios. Teniendo en cuenta en en poco tiempo emepzarían los primeros eventos del año, se propuso un <b>enfoque ágil</b> en la resolución de este problema. Dividiríamos el proceso total, agrupando los puntos de contacto(touchpoints) por prioridad y luego realizaríamos un prototipo, cubriendo el primer entregable, con el cual se comenzarían las iteraciones, para ir validando y construyendo la plataforma de la mano con los usarios y gestores del proyecto; después de cada evento, teníamos reuniones para conversar los resultados y delimitar las siguientes funciones que se implementarían.<br><br>Ya que la empresa había tenido proyectos con proveedores bajo la modalidad tradicional de cascada, El desarrollo del proyecto debía incluir también la implementación el enfoque ágil de lean UX en los gestores de la empresa.  Como era de esperar el proyecto fue modificando sus dimensiones en la marcha, permitiendo un mayor entendimiento del problema y abrió puertas a nuevos proyectos.",
							images: [{ imgId: "dIm001", order: 1, imgUrl: "img/dummyProPort.png" }, { imgId: "dIm002", order: 2, imgUrl: "img/proyEntreJuntos01.png" }, { imgId: "dIm003", order: 1, imgUrl: "img/proyEntreJuntos02.png" }, { imgId: "dIm003", order: 2, imgUrl: "img/proyEntreJuntos03.png" }, { imgId: "dIm003", order: 1, imgUrl: "img/proyEntreJuntos04.png" }],
							order: 1
						}]
					},
					{
						id: "002", name: "Sistema de administración entregas",
						client: "Viva ",
						/*links:[{}],*/
						habilidades:[{ id:1,name:"User Experience" },{ id:2,name:"Desarrollo frontend" }],
						infoBlocks: [{
							title: "Escenario",
							blockType: 1,
							desc: "Después de distintos eventos, de voluntariado corporativo, de entregas de departamentos a personas de bajos recursos, la plataforma realizada había crecido a lo largo del año que llevaba activa; Y aparecieron nuevas oportunidades, para que escale, no solo a nivel de interfases para el usuario y los administradores de eventos, sino que a nivel de procesos de negocio.",
							images: [{ imgId: "dIm001", order: 1, imgUrl: "img/proyAdmin01.png" }, { imgId: "dIm002", order: 2, imgUrl: "img/proyAdmin02.png" }],
							order: 1
						}, {
							title: "Problema",
							blockType: 1,
							desc: "Cuando los eventos de voluntarado se realizaban; los voluntarios que se encargaban de registrar las entregas, marcaban los departamentos en una cartilla con números; similar a un bingo, que después de que el evento termine, eran entregadas a un encargado; quien al día siguiente comenzaba a ingresar uno a uno los departamentos entregados en el sistema CRM de la empresa; proceso que demoraba aproximadamente tres días teniendo en cuenta las otras labores de su trabajo habitual. Se identificó la oportunidad de mediante la tecnología, desarrollar un modulo en la herramienta de entregas que pueda mejorar este tedioso proceso.",
							images: [{ imgId: "dIm001", order: 1, imgUrl: "img/dummyProPort.png" }, { imgId: "dIm002", order: 2, imgUrl: "img/dummyProPort.png" }, { imgId: "dIm003", order: 1, imgUrl: "img/dummyProPort.png" }],
							order: 1
						}, {
							title: "Solución",
							blockType: 2,
							desc: "Esta vez ya no se trabajó solo con el equipo de la Inmobiliaria VIVA, sino que también se incluyo al equipo de la consultora encargada del CRM; con quienes también se compartió la visión ágil del desarrollo, ya que ellos también crearían nuevos proceso para la comunicación entre sistemas. Primero se aterrizó la estructura de datos que manejaba el CRM para el registro de departamentos entregados; Luego comparando con la estructura que maenjaba la paltaforma que se había desarrollado se diseñaron dos procesos de extracción transformación y carga (ETL), para que cargar la lista de departamente a entregarse en el evento donde se iban a utilizar, en el sistema de entregando juntos desde el CRM y luego el que llevaría la lista de departamentos entregados de vuelta al CRM para guardar dichas entregas. Para ejecutar estos procesos se desarrolló una interfaz similar a la cartilla de papel de entregas, para que sea usada desde una laptop o una tablet en los eventos y que al finalizar con un solo clic se realice la exportación al CRM, la cual no tomaba más de dos minutos",
							images: [{ imgId: "dIm001", order: 1, imgUrl: "img/proyAdmin01.png" }, { imgId: "dIm002", order: 2, imgUrl: "img/proyAdmin02.png" }],
							order: 1
						}]
					},
					{
						id: "003", name: "Sistema de entregas online",
						client: "Viva ",
						links:[{}],
						habilidades:[{ id:1,name:"User Experience" },{ id:2,name:"Desarrollo frontend" }],
						infoBlocks: [{
							title: "Contexto",
							blockType: 1,
							desc: "Llegó la época de la cuarentena y cambió todas las reglas.",
							images: [{ imgId: "dIm001", imgUrl: "img/proyEntreOnline01.png" }, { imgId: "dIm002", imgUrl: "img/proyEntreOnline02.png" }],
							order: 1
						}, {
							title: "Problema",
							blockType: 1,
							desc: "los eventos de entrega ya no se podían hacer de manera prescencial. Se intetntaron ver otras opciones. La pandemia siguó su curso y se debía buscar una solución más estable, para poder entregar los departamentos de manera segura",
							images: [{ imgId: "dIm001", imgUrl: "img/dummyProPort.png" }, { imgId: "dIm002", imgUrl: "img/dummyProPort.png" }, { imgId: "dIm003", imgUrl: "img/dummyProPort.png" }],
							order: 1
						}, {
							title: "Solución",
							blockType: 2,
							desc: "Se desarrolló una interfaz cuyo link era enviado a cada cliente con un código personal, con el que podría entrar a ver toda la documentación la unidad inmobiliaria que le correspondería(departamento o estacionamiento) con sus datos de acceso directamente desde el CRM, y al ingresar, accedían a la información correspondiente a su departamento, como planos y contratos, para descargárlos y automáticamente se actualizaba el campo de entergas de de documentos correspondiente a los registros de esos departamentos.",
							images: [{ imgId: "dIm001", order: 1, imgUrl: "img/proyEntreOnline01.png" }, { imgId: "dIm002", order: 2, imgUrl: "img/proyEntreOnline02.png" }],
							order: 1
						}]
					},
					{
						id: "004", name: "Pawadin",
						client: "Pawadin",
						links:[{id:1,name:"Ver página",link:"http://www.pawadin.com/"}],
						habilidades:[{ id:1,name:"User Experience" },{ id:2,name:"Desarrollo frontend" },{ id:3,name:"User Research" },{ id:4,name:"Lean Startup"},{id:5,name:"Design Thinking"}],
						infoBlocks: [{
							title: "Contexto",
							blockType: 1,
							desc: "Cada vez son más las familias que eligen tener perritos en casa. De hecho hasta se creó el término perrijos, haciendo referencia a las parejas que prefieren tener un perrito a un hijo. Dada esta importancia la inversión en el cuidado de estas mascotas crece cada vez más",
							images: [],
							order: 1
						}, {
							title: "Problema",
							blockType: 1,
							desc: "Si bien las personas tienen gran cariño para sus mascotas, no siempre disponen del tiempo parr darle los cuidados que necesitan, ya sea por compromisos del día a día como el trabajo o compromisos eventuales como viajes.",
							images: [{ imgId: "dIm001", imgUrl: "img/dummyProPort.png" }, { imgId: "dIm002", imgUrl: "img/dummyProPort.png" }, { imgId: "dIm003", imgUrl: "img/dummyProPort.png" }],
							order: 1
						}, {
							title: "Solución",
							blockType: 2,
							desc: "Se realizó una plataforma digital de economía colaborativa que permitía por un lado a los dueños de perritos encontrar a un cuidador o un paseador cuyo domicilio fue berificado por nuestro equipo, que puedan brindar sus servicio cuando lo necesiten. Por otro lado Los cuidadores y paseadores obtenían nuevas oportunidades para incrementar sus ingresos.",
							images: [{ imgId: "dIm001", order: 1, imgUrl: "img/proyPawadin01.png" }, { imgId: "dIm002", order: 2, imgUrl: "img/proyPawadin02.png" }, { imgId: "dIm003", order: 1, imgUrl: "img/proyPawadin03.png" }, { imgId: "dIm004", order: 2, imgUrl: "img/proyPawadin04.png" }, { imgId: "dIm005", order: 1, imgUrl: "img/proyPawadin05.png" }, { imgId: "dIm006", order: 2, imgUrl: "img/proyPawadin06.png" }],
							order: 1
						}]
					},
					{
						id: "006", name: "Role Master",
						client: "Role Master",
						links:[{}],
						habilidades:[{ id:1,name:"User Experience" },{ id:2,name:"Desarrollo frontend" },{ id:3,name:"User Research" },{ id:4,name:"gamification" },{id:5,name:"Desarrollo Backend"}] ,
						infoBlocks: [{
							title: "Contexto",
							blockType: 1,
							desc: "Los juegos de Rol como Dungeon Master, Monster of the week y FATE, son jugados por miles de personas en distintas partes del mundo. En estos juegos un grupo de personas se reunen en una mesa, en los que uno de ellos es el maestro del juego, le cuenta al grupo de jugadores, que previamente crearon sus personajes, la aventura en la que se embarcarán y estos comienzan a contar las acciones tirando dados, sumándole los bonificadores que ellos configuraron al crear sus personajes y moviendo las fichas que los representan en un tablero. ",
							images: [{ imgId: "dIm001", imgUrl: "img/dummyProPort.png" }, { imgId: "dIm002", imgUrl: "img/dummyProPort.png" }, { imgId: "dIm003", imgUrl: "img/dummyProPort.png" }],
							order: 1
						}, {
							title: "Problema",
							blockType: 1,
							desc: "Después de la situación de la pandemia, las personas que acostumbran jugar rol, dejaron de poder reunirse, y les quedaan dos opciones: jugar con sus hojas con desde sus casa con alguna herramienta de videoreuniones, o utilizar alguna herramienta digital para jugar rol. El problema es que algunas solo te brindan la posibilidad de dados virtuales y otras muy avanzadas brindaban muchas herramientas para crear largas campañas pero no necesariamente son amigables y hasta resultan confusas para usuarios que piensan jugar aventuras cortas.",
							images: [{ imgId: "dIm001", imgUrl: "img/dummyProPort.png" }, { imgId: "dIm002", imgUrl: "img/dummyProPort.png" }, { imgId: "dIm003", imgUrl: "img/dummyProPort.png" }],
							order: 1
						}, {
							title: "Solución",
							blockType: 2,
							desc: "Se realizó una plataforma que permite configurar el sistema de dados, tablero, imágenes y personajes a cualquier conjunto de reglas de rol que el maestro del juego necesite, incluso si creo su propio juego de rol. Todo de una manera más sensilla y practica. Primero se entrevistó a jugadores experimentados y otros principiantes, con los que se comenzó las primeras sesiones jugando a través de plataformas de reuniones virtuales, aún con las hojas de personaje y los dados físicos o virtuales simples. Poco a poco se comenzó a añadir avances de la plataforma a los juegos ahasta reemplazar totalmente cualquier elemento exterono, guardando sus partidas y teniendo un registro histórico de todos sus movimientos. La creación de los personajes se convirtió en un proceso más intuitivo que la misma herramiento ayudaba a seguir y simplificaba la creación de aventuras para el maestrodel juego; por lo que todo el juego se volvía más ágil.",
							images: [{ imgId: "dIm001", order: 1, imgUrl: "img/rolemproy01.png" }, { imgId: "dIm002", order: 2, imgUrl: "img/rolemproy02.png" }],
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
	computed: {


		/* === */

		/* === */

		projectLeft: function () {
			let bloqueFinal = [];
			let bloque = this.selection.infoBlocks.filter(function (a) {
				return a.blockType == 2
			})

			for (let b of bloque) {
				console.log(b);
				for (let i of b.images) {
					if (i.order == 1) {
						bloqueFinal.push(i);
					}

				}

			}

			return bloqueFinal
		},
		projectRight: function () {
			let bloqueFinal = [];
			let bloque = this.selection.infoBlocks.filter(function (a) {
				return a.blockType == 2
			})

			for (let b of bloque) {
				console.log(b);
				for (let i of b.images) {
					if (i.order == 2) {
						bloqueFinal.push(i);
					}

				}

			}

			return bloqueFinal
		}
		
	},
	created() {
		this.selection = this.projects.find(element => element.id == this.$route.params.name);
		// `this` points to the vm instance
		console.log('Selection con referencia this');
		console.log(this.selection);// => "count is: 1"
	},
	destroyed() {
		console.log('10 se destruyó Detail ');

	},
	template:/* vue-html */ `
  <div class="project__body">
  <section class="menu--main">

  <div>
  <router-link class="menu--main__item" :to="'/'">
  <span>Inicio</span>
  </router-link>
  </div>

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
  <p v-html="block.desc"> {{ block.desc}} </p>
 
  </div>
  </div>
  <!--
  <div class="row project__block__images" v-if="block.blockType==2">
  <div class="project__block__img__container col-md-6 col-xs-12" v-for="imgBlock in block.images"  >
   <a rel="gallery-1" :href="imgBlock.imgUrl" class="swipebox">
    <img class="project__block__img" v-bind:src="imgBlock.imgUrl" />
    </a>
  </div>
  </div> 
  -->
  
  </div>
  
  <p><a class="project__block__link" v-for="link in selection.links" :href="link.link">{{link.name}}</a></p>
  
  

</div>
  
  <!-- Se listan las imágenes del proyecto -->
  <div class="row">
  
  <div class="col-md-6 col-xs-12 project__block__images">
  <div class="project__block__img__container" v-for="imgBlock in projectLeft"  >
 
   <a rel="gallery-1" :href="imgBlock.imgUrl" class="swipebox">
    <img class="project__block__img" v-bind:src="imgBlock.imgUrl" />
    </a>
  </div>
  </div> 
  
  <div class="col-md-6 col-xs-12 project__block__images">
  <div class="project__block__img__container" v-for="imgBlock in projectRight"  >
 
   <a rel="gallery-1" :href="imgBlock.imgUrl" class="swipebox">
    <img class="project__block__img" v-bind:src="imgBlock.imgUrl" />
    </a>
  </div>
  </div> 


</div>
  <!-- Fin de la lista de imágenes del proyecto -->

  </section>
  <section class="contact">
  <div data-aos="fade-up" data-aos-duration="1000"  class="contact__text__container">
  <p>Si deseas que trabajemos juntos en algún proyecto, contáctame. </p>
  </div>
  
  <div data-aos="fade-up" data-aos-duration="1000"  class="contact__button__container">
  <a class="contact__button" href = "mailto: arturo.aguilar.tobies@gmail.com"><img class="contact__button__img" src="/img/mail_cont.png"></a>
  <a class="contact__button" href= "https://www.linkedin.com/in/arturoat"><img class="contact__button__img" src="/img/linkedin_cont.png"></a>
  <a class="contact__button" href= "https://www.instagram.com/arturoaguilart"><img class="contact__button__img" src="/img/instagram_cont.png"></a>
  <a class="contact__button" href= "https://www.facebook.com/arturo.aguilartobies"><img class="contact__button__img" src="/img/facebook_cont.png"></a>
  </div>
  
  
  </section>

    </div>
  `
};




