<template>
    <h1>Kendaraaan saya</h1>
</template>

<script>
export default {
    name: "Kendaraan",
    mounted() {
        this.$store.dispatch("Kendaraan/kendaraan")
    }
}
</script>