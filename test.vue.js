const Test = {
    data() {
        return {
            selection: [],
            mensaje: "this is a test",
            file:'',
            newPDF:''

        }
    },
    methods: {
        async SendFile() {
  

           const API_URL = "http://voltiumlab.com/imptest/back/sendDocument.php";
 
               
             const response = await fetch(API_URL, {
               method: "POST",
               headers: {
                 "Content-Type": "application/json",
               },
               body: JSON.stringify({
                 text: this.newPDF
               }),
             });
             const json = await response.json();
             console.log(json);
             if (response.ok) {
               props.updateLinkList();
             } else {
               console.log("Fail");
             }
   

        
    },

},
    template:/* vue-html */ `

  <div class="test__body">
<form id="fileForm" action="back/sendDocument.php" @submit.prevent="SendFile">
  <label for="userfile"> Upload your pdf</label>
  <input  v-model="newPDF" id="userfile" name="userfile" type="file" accept="application/pdf"/>
  <button> Upload </button>
 </form>
</div>

`
};