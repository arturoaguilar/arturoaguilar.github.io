const escProjects = {
	data() {
		return {
			selection: [],
			mensaje: "Taksumaqui sempucriaco",
			projects:
				[
					{   
						id: "001", name: "Carcocha Cósmica",
						client: "Viva ",
						links:[{id:1,name:"Ver Reseñas",link:"https://www.instagram.com/carcochacosmica/"}],
						habilidades: [{ id: 1, name: "Redacción" }, { id: 2, name: "Diseño" }, { id: 3, name: "Copy Writing" }],
						infoBlocks: [{
							title: "Descripción",
							blockType: 2,
							desc: "Es una cuenta en Instagram, en la que comparto reseñas de novelas, cuentos y comics; que me gustan y me marcaron de alguna manera.",
							images: [{ imgId: "dIm001", order: 1, imgUrl: "img/proyCarcocha001.png" }, { imgId: "dIm002", order: 2, imgUrl: "img/proyCarcocha002.png" }, { imgId: "dIm003", order: 1, imgUrl: "img/proyCarcocha003.png" }],
							order: 1
						}]
					},
					{
						id: "002", name: "Insomnes y patriotas",
						client: "Viva ",
						links:[{id:1,name:"Ver libro",link:"https://amzn.to/38AnrJ3"}],
						habilidades: [{ id: 1, name: "Escritura" }, { id: 2, name: "Diseño de producto" }, { id: 3, name: "Marketing" }],
						infoBlocks: [{
							title: "Descripción",
							blockType: 2,
							desc: "Este es mi primer libro y consiste en una antología de doce historias que suceden en la misma ciudad, que comparten personajes y lugares; mostrando sus distintos rostros mientras el lector avanza con su lectura. Pertenece al genero negro, aquel que muestra una ciudad decadente controlada por el crimen, y sátira, criticando la falsa idea de normalidad que puede llegar a tener la sociedad de hoy. Mi siguiente libro que está en proceso pertenecerá al género del terror.",
							images: [{ imgId: "dIm001", order: 1, imgUrl: "img/proInsomnes001.png" }, { imgId: "dIm003", order: 2, imgUrl: "img/proInsomnes003.png" }, { imgId: "dIm002", order: 2, imgUrl: "img/proInsomnes002.png" }],
							order: 1
						}]
					},
					{
						id: "003", name: "Estación Averno",
						client: "Viva ",
						links:[{id:1,name:"Podcast en Spotify",link:"https://open.spotify.com/show/1372kt9XHsv8DUyjheMCYb?si=I5HvbFhhRVWWQkhD-CZKIA&utm_source=copy-link"},{id:1,name:"Podcast en Youtube",link:"https://youtube.com/channel/UCWphfZg8JeebZfqlGtu_Ecg"}],
						habilidades: [{ id: 1, name: "Escritura de guión" }, { id: 2, name: "Voz" }, { id: 3, name: "Diseño de producto" }],
						infoBlocks: [{
							title: "Descripción",
							blockType: 2,
							desc: "Este podcast narra desde la perspectiva de un locutor y la información que le llega de los ciudadanos, los extraños eventos que ocurren en la ficticia ciudad de Laguna Roja. Pertenece al género de terror con un poco de comedia.",
							images: [{ imgId: "dIm001", order: 1, imgUrl: "img/proyEstacionA001.png" }, { imgId: "dIm002", order: 2, imgUrl: "img/proyEstacionA002.png" }, { imgId: "dIm003", order: 2, imgUrl: "img/proyEstacionA003.png" }],
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
  <router-link class="menu--main__item" :to="'/eschome'">
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
  <p> {{ block.desc}} </p>
  <p><a class="project__block__link" v-for="link in selection.links" :href="link.link">{{link.name}}</a></p>
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




