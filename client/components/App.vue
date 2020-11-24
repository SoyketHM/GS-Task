<template>
  <div class="container">
    <Navbar variant="info" />
    <b-row class="mt-5">
      <b-col>
        <router-view></router-view>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import Navbar from "./Navbar.vue";
export default {
  replace: false,
  component: { Navbar },
};
</script>
<style scoped>
</style>