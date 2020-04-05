<template>
  <main>
    <v-header />
    <splash />
    <v-footer />
  </main>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import Splash from "@/components/Splash.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  components: {
    "v-footer": TheFooter,
    "v-header": TheHeader,
    Splash
  }
};
</script>

<style scoped>
main {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
}
</style>