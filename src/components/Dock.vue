<template>
  <h1 @click="consol">
    Docking
  </h1>
</template>

<script>
    export default {
        name: "Dock",
        data() {
            return {
                dock: ""
            }
        },
        mounted() {
            this.http.get("https://script.google.com/macros/s/AKfycbxCjgXnB-w0d2OHvq5pmHAqEW1mhJOT6b5NRvtBfuRRLUldLicNvLTGMZU_CvuJlBb6/exec?path=Dock")
            .then( (response) => this.dock = response.data )
            .catch(function (error) {
            console.log(error);
        });
        },
        methods: {
            consol() {
                console.log(this.dock);
            }
        }
    }
</script>