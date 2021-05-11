const Test = {
    data() {
        return {
            selection: [],
            mensaje: "this is a test",

        }
    },
    methods: {
        SendFile() {
            fetch('https://voltiumlab.com/imptest/back/sendDocument.php', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    },
    created() {

    },
    destroyed() {


    },
    template:/* vue-html */ `
  <div class="test__body">
<form action="back/sendDocument.php" @submit.prevent="SendFile">
  <label for="userfile"> Upload your pdf</label>
  <input id="userfile" name="userfile" type="file" accept="application/pdf"/>
  <button> Upload </button>
 </form>
</div>
  `
};




