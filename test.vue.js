const Test = {
    data() {
        return {
            selection: [],
            mensaje: "this is a test",

        }
    },
    methods: {
        SendFile() {

           console.log("HI"); 
        
    },

},
    template:/* vue-html */ `

  <div class="test__body">
<form id="fileForm" action="back/sendDocument.php" @submit.prevent="SendFile">
  <label for="userfile"> Upload your pdf</label>
  <input v-model: id="userfile" name="userfile" type="file" accept="application/pdf"/>
  <button> Upload </button>
 </form>
</div>

`
};