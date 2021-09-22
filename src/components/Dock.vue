<template>
  <div class="h-full w-full md:grid gap-6 mt-10 justify-center">
    <h1 class="text-center mb-3 text-3xl font-bold">
      Daftar item by docking gudang jadi
    </h1>
    <Datatable
      v-if="dock.length > 1"
      :id="'Dock'"
      :heads="['Item', 'Nama Lengkap', 'Lokasi', 'Dock']"
      :datanya="dock"
      :keydata="'id'"
      :option="[]"
    />
    <Skeleton
      v-else
      class="bg-white bg-opacity-50"
      :rows="6"
    />
  </div>
</template>

<script>
import Datatable from "./Datatable.vue";
import Skeleton from "./SkeletonLoading.vue"
    export default {
        name: "Dock",
        components: {
            Datatable,
            Skeleton,
        },
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