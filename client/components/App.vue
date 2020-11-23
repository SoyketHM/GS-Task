<template>
  <div class="container">
    <Navbar />

    <b-row class="mt-5">
      <b-col>
        <router-view></router-view>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  replace: false,
};
</script>
<style scoped>
</style>