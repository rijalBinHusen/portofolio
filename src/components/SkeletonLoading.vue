<template>
  <div
    v-for="r in rows"
    :key="r"
    style="height:60px; background: rgba(140,226,255,1) 39%;"
    class="rounded animate-pulse text-center font-bold mb-1"
  >
    <span />
  </div>
</template>

<script>
export default {
    name: "Skeleton",
    props: {
        rows: {
            type: Number,
            default: 1
        }
    },
}
</script>