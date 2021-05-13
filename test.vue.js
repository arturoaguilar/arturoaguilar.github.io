const Test = {
    data() {
        return {
            selection: [],
            mensaje: "this is a test",
            files: '',
            newpdf: ''

        }
    },
    methods: {
        changeFiles(e) {
            this.files = e.target.files || e.dataTransfer.files;
            console.log("files have change");
            console.log(this.files[0]);
        },

        async SendFile() {
            const API_URL = "https://voltiumlab.com/imptest/back/sendDocument.php";
            var data = new FormData()
            data.append('files', this.files[0])
         
         
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                body:
                    data,
            });

   
                const json= await response.json();
        

            console.log("PRUEBA ");
            console.log(json);
            if (response.ok) {
       
            } else {
                console.log("Fail");
            }
   


  /*          const result = await fetch('https://voltiumlab.com/imptest/back/sendDocument.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: data
            })
            .then(res => res.json())
            .then(res => {
                if (res.success) {
                    //success
                }else{
                  //failed
                }
            })
            .catch(function() {
                  alert("Can't connect to backend try latter");
            });

*/
            const json= await result;
            console.log("PRUEBA ");
            console.log(json);

            if (response.ok) {
                //props.updateLinkList();
            } else {
                console.log("Fail");
            }


        },

    },
    template:/* vue-html */ `
    <div class="test__body">
    
    <div class="test__body__call-to-action">
    <h2> Welcome to this Imprimu test </h2>
    <form class="test__form" id="fileForm" @submit.prevent="SendFile">
    <label for="userfile"> Upload your pdf to send a email with it</label>
    <input  id="userfile" class="test__form__userfile" @change="changeFiles" name="userfile" type="file" accept="application/pdf"/>
        <button class="test_form__submit"> Submit </button>
    </form>

    <button class="test__form__design"> Design with canva! </button>
    </div>
    
    <div class="test__body__image-container">

  <img class="test__body__image" src="/img/testBackgroundImage.png">
    </div>


    </div>

`
};