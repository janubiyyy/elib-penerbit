<template>
  <div v-if="loading" id="preloader">
    <div id="loader"></div>
    <div id="textloader">Sedang Memuat</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>


<style scoped>
@import "@/assets/css/loading.css";
</style>