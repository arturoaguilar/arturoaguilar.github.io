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
            this.files = e.target.files || e.dataTransfer.files;
            console.log(this.files[0]);
        },
     
        async SendFile() {
            console.log(this.files[0]);
           const API_URL = "https://voltiumlab.com/imptest/back/sendDocument.php";
           var data = new FormData()
           data.append('files', this.files[0])
             const response = await fetch(API_URL, {
               method: "POST",
               headers: {
                 "Content-Type": "application/json",
               },
               body:
              JSON.stringify({ data }),
               // data,
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
26 {{mensaje}}
  <label for="userfile"> Upload your pdf</label>
  <input   id="userfile" @change="changeFiles" name="userfile" type="file" accept="application/pdf"/>
  <button> Upload </button>
 </form>
</div>

`
};