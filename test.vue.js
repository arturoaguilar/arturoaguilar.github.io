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
            console.log(this.files[0]);
        },

        async SendFile() {
            const API_URL = "https://voltiumlab.com/imptest/back/sendDocument.php";
            var data = new FormData()
            data.append('files', this.files[0])
            const response = await fetch(API_URL, {
                method: "POST",
                /* headers: {
                   "Content-Type": "application/json",
                 },*/
                body:
                    // JSON.stringify({ data }),
                    data,
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
    
    <div class="test__body__call-to-action">
    <h2> Welcome to this Imprimu test </h2>
    <form class="test__form" id="fileForm" @submit.prevent="SendFile">
    <label for="userfile"> Upload your pdf to send a email with it</label>
    <input  id="userfile" @change="changeFiles" name="userfile" type="file" accept="application/pdf"/>
        <button> Submit </button>
    </form>
    </div>
    
    <div class="test__body__image">

    image
    </div>


    </div>

`
};