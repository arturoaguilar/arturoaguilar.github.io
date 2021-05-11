const Test = {
	data() {
		return {
			selection: [],
			mensaje: "this is a test",

		}
	},
	methods: {
		clickFunct() {
			console.log('One of my on');
		}
	},
	created() {

	},
	destroyed() {
		

	},
	template:/* vue-html */ `
  <div class="project__body">
<section class="project__text__body">

  <div class="project__text__body__inner">
  <div @click="clickFunct">
  
SDFSDFSD
</div>
</div>

  </section>
  
  


    </div>
  `
};




