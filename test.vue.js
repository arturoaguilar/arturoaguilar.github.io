const Test = {
    data() {
        return {
            selection: [],
            mensaje: "this is a test",
            files:'',
            newpdf:''

        }
    },
    methods: {
        changeFiles(e){
            var files = e.target.files || e.dataTransfer.files;
            console.log(files);
        },
     
        async SendFile() {
  
           const API_URL = "http://voltiumlab.com/imptest/back/sendDocument.php";

             const response = await fetch(API_URL, {
               method: "POST",
               headers: {
                 "Content-Type": "application/json",
               },
               body: JSON.stringify({
                 text: this.files[0]
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
  
<form id="fileForm"  @submit.prevent="SendFile">
3 {{mensaje}}
  <label for="userfile"> Upload your pdf</label>
  <input   id="userfile" @change="changeFiles" name="userfile" type="file" accept="application/pdf"/>
  <button> Upload </button>
 </form>
</div>

`
};