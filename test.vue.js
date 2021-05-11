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
  <div class="test__body">
<form action="back/sendDocument.php" @submit.prevent="addNewLink">
  <label for="userfile"> Upload your pdf</label>
  <input id="userfile" name="userfile" type="file" accept="application/pdf"/>
  <button> Upload </button>
 </form>
</div>
  `
};




